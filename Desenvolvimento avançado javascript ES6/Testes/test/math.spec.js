const assert = require('assert');
const expect = require('chai').expect
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
            expect(value).to.equal(10)
            //assert.equal(value, 10)
            done();
        });

    })

    //it.skip('Multiplica', function () {
    //it.only('Multiplica', function () {
    it.only('Multiplica', function () {
        const math = new Math();
        const obj = {
            name: "Pedro Daniel"
        }
        const obj2 = {
            name: "Pedro Daniel"
        }



        expect(obj).to.have.property('name').equal('Pedro Daniel')
        expect(obj).to.deep.equal(obj2)
        expect(math.multiply(value, 5)).to.equal(0)
        //assert.equal(math.multiply(value, 5), 0)


    });
})