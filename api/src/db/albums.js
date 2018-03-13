export const albumsCollection = db => db.collection("albums");

export const albumsActions = {
  add: obj => collection => {
    collection.insert({
      ...obj,
      timeCreated: Date.now(),
    });
  },
  get: filters => collection => collection.find(filters).toArray(),
};
