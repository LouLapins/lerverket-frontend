interface IItem {
    "id": string,
    "attributes": {
      "title": string,
      "artist": string,
      "description": string,
      "forSale": boolean,
      "createdAt": string,
      "updateAt": string,
      "publishedAt": string,
      "coverImage": {
        "data": any
      },
      "images": {
        "data": any
      }
    }
}
export default IItem