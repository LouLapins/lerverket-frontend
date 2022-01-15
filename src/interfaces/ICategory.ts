interface ICategory {
    "id": string,
    "attributes": {
      "name": string,
      "slug": string,
      "articles": {
        "data": any
      }
    }
}
export default ICategory