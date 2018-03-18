import { ObjectId } from "mongodb";

const STATUS_ACTIVE = "active";
const STATUS_DELETED = "deleted";

export const albumsCollection = db => db.collection("albums");

export const albumsActions = {
  add: obj => async db => {
    const objToInsert = {
      ...obj,
      photos: [],
      status: STATUS_ACTIVE,
      timeCreated: Date.now(),
    };
    await albumsCollection(db).insert(objToInsert);
    return objToInsert;
  },

  update: (id, newParams) => async db => {
    const obj = await albumsCollection(db).findOne({ _id: new ObjectId(id) });
    const results = await albumsCollection(db).save({
      ...obj,
      ...newParams,
      timeCreated: obj.timeCreated,
    });
    return results;
  },

  delete: id => db =>
    albumsCollection(db).findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { status: STATUS_DELETED } },
    ),

  get: (pageSize = 1, lastId = undefined) => async db => {
    let criteria = {};
    if (lastId !== undefined) {
      const lastObj = await albumsCollection(db).findOne({ _id: new ObjectId(lastId) });
      criteria = { timeCreated: { $lt: lastObj.timeCreated } };
    }
    return albumsCollection(db)
      .find(criteria)
      .sort({ timeCreated: -1 })
      .limit(pageSize)
      .toArray();
  },
};
