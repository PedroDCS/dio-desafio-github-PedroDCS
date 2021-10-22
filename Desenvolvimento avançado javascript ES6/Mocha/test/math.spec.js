const assert = require('assert');
const Math = require('../math.js');
describe('classe matematica', function () {
    it('soma dois numeros', function () {
        const math = new Math();
        
        try {
            assert.equal(math.sum(5, 5), 10);
        } catch (error) {
            console.log(error);
        }
    })
})