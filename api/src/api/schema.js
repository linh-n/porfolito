export default [
  `
  type Photo {
    id: String!
    src: String!
    description: String
    album: Album
    location: Location
  }

  type Album {
    id: String!
    name: String!
    description: String
    photos: [Photo]
  }

  type Location {
    id: String!
    name: String!
  }

  scalar Upload

  type Query {
    photo(id: String!): Photo
    photos: [Photo]
    album(id: String!): Album
    albums: [Album]
  }

  type Mutation {
    singleUpload (file: Upload!): String!
    multipleUpload (files: [Upload!]!): [String!]!
  }
  `,
];
