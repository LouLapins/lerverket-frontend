export class RestErrorModel {
    constructor(
        public data: null,
        public error: {
            status: string,
            name: string,
            message: string,
            details: {}
        }
    ) {}
}
  