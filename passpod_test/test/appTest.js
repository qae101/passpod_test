const expect= require('chai').expect;
const app = require('../module');

const testCase = {
    "search": {
        "getSearch" : "The user will be search Jakarta",
    }
}

describe("Passpod search test", () => {
    const keySearch = "Jakarta";
    const noKeySearch = "";

    it(`@get ${testCase.search.getSearch}`, async () => {
        const response = await app.getSearch('/search?'+keySearch);
        expect(response.status).to.equal(200);
    })
})