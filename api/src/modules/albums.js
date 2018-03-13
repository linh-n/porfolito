import executeMongo from "../db";
import { albumsCollection, albumsActions } from "../db/albums";

export const get = () => {};

export const add = async (req, res) => {
  await executeMongo(albumsCollection)(
    albumsActions.add({
      ...req.body,
    }),
  );
  res.sendStatus(200);
};
