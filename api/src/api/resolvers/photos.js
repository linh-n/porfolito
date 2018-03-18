import fs from "fs";
import mkdirp from "mkdirp";
import shortid from "shortid";
import { GraphQLUpload } from "apollo-upload-server";

const uploadDir = "./uploads";

mkdirp.sync(uploadDir); // Ensure upload directory exists

const storeFS = ({ stream }) => {
  const id = shortid.generate();
  const path = `${uploadDir}/${id}`;
  return new Promise((resolve, reject) =>
    stream
      .on("error", error => {
        if (stream.truncated) {
          // Delete the truncated file
          fs.unlinkSync(path);
        }
        reject(error);
      })
      .on("end", () => resolve({ id, path }))
      .pipe(fs.createWriteStream(path)),
  );
};

const processUpload = async upload => {
  const { stream, filename } = await upload;
  await storeFS({ stream, filename });
  return filename;
};

export default {
  Upload: GraphQLUpload,
  Mutation: {
    singleUpload: (obj, { file }) => processUpload(file),
    multipleUpload: async (obj, { files }) => {
      const { resolve, reject } = await Promise.all(files.map(processUpload));

      if (reject.length) {
        reject.forEach(({ name, message }) => console.error(`${name}: ${message}`));
      }

      return resolve;
    },
  },
};
