interface IItem {
    "id": string,
    "attributes": {
      "title": string,
      "artist": string,
      "description": string,
      "forSale": boolean,
      "year": string,
      "price": string,
      "coverImage": {
        "data": any
      },
      "images": {
        "data": any
      }
    }
}
export default IItem