const assert = require('assert');
const Math = require('../math.js');
let value = 0;
describe('classe matematica', function () {
    //hooks
    beforeEach(function () {
        value = 0;
    });

    it('soma dois numeros', function (done) {
        const math = new Math();

        value = 5;
        math.sum(5, value, (value) => {
            assert.equal(value, 10)
            done();
        });

    })

    //it.skip('Multiplica', function () {
    //it.only('Multiplica', function () {
    it('Multiplica', function () {

        const math = new Math();
        assert.equal(math.multiply(value, 5), 0)
    });
})