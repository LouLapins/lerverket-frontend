interface ICategory {
    "id": number,
    "attributes": {
      "name": string,
      "slug": string,
      "articles": {
        "data": any
      }
    }
}
export default ICategory