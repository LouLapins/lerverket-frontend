interface IArticle {
    "id": string,
    "attributes": {
      "title": string,
      "text": string,
      "slug": string,
      "buttonText": string,
      "buttonRoute": string,
      "images": {
        "data": any
      }
    }
}
export default IArticle