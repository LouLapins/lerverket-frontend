interface IArticle {
    "id": number,
    "attributes": {
      "title": string,
      "text": string,
      "images": {
        "data": any
      }
    }
}
export default IArticle