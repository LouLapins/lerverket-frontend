export class ItemModel {
    constructor(
        public id: number,
        public attributes: {
            title: string,
            createdAt: string,
            updatedAt: string,
            publishedAt: string,
            artist: string,
            forSale: boolean
        }
    ) {}
}