const {expect} = require('chai');

const { myFunction } = require("./utils");

describe('utils', () =>{
    it('should run myFunction', async () => {
        const res = await myFunction();
        expect(res).to.equal('Hello World xxx');
    });
});