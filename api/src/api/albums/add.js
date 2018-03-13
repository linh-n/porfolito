import executeMongo from "../../db";
import { albumsCollection, albumsActions } from "../../db/albums";

export default async (req, res) => {
  await executeMongo(albumsCollection)(
    albumsActions.add({
      ...req.body,
    }),
  );
  res.sendStatus(200);
};
