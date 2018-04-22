import { ObjectId } from "mongodb";

const STATUS_ACTIVE = "active";
const STATUS_DELETED = "deleted";

export const photosCollection = db => db.collection("photos");

export const photosActions = {
  add: obj => async db => {
    const objToInsert = {
      ...obj,
      album: null,
      status: STATUS_ACTIVE,
      timeCreated: Date.now(),
    };
    await photosCollection(db).insert(objToInsert);
    return objToInsert;
  },

  update: (id, newParams) => async db => {
    const obj = await photosCollection(db).findOne({ _id: new ObjectId(id) });
    const results = await photosCollection(db).save({
      ...obj,
      ...newParams,
      timeCreated: obj.timeCreated,
    });
    return results;
  },

  delete: id => db =>
    photosCollection(db).findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { status: STATUS_DELETED } },
    ),

  get: (pageSize = 1, lastId = undefined) => async db => {
    let criteria = {};
    if (lastId !== undefined) {
      const lastObj = await photosCollection(db).findOne({ _id: new ObjectId(lastId) });
      criteria = { timeCreated: { $lt: lastObj.timeCreated } };
      console.log(lastObj);
    }
    return photosCollection(db)
      .find(criteria)
      .sort({ timeCreated: -1 })
      .limit(pageSize)
      .toArray();
  },
};
