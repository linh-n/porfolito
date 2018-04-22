export default [
  `
  type Photo {
    id: String!
    src: String!
    title: String
    description: String
    album: String
    location: String
    timeCreated: Float
  }

  input PhotoInput {
    src: String!
    title: String
    description: String
    album: String
    location: String
  }

  scalar Upload

  type Query {
    photo(id: String!): Photo
    photos: [Photo]
  }

  type Mutation {
    singleUpload (file: Upload!): String!
    multipleUpload (files: [Upload!]!): [String!]!
    addPhoto (photo: PhotoInput): Photo
    updatePhoto (photo: PhotoInput): Photo
  }
  `,
];
