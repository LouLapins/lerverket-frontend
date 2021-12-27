interface IItem {
    "id": Number,
    "attributes": {
      "title": String,
      "artist": String,
      "description": String,
      "forSale": Boolean,
      "createdAt": String,
      "updateAt": String,
      "publishedAt": String,
      "coverImage": {
        "data": any
      },
      "images": {
        "data": any
      }
    }
}
export default IItem