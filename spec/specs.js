/**
 * Created by kmenne on 11/14/15.
 */

describe('validateInput', function() {
    it("is false for a non-numeric input", function() {
        expect(validateInput("foo")).to.equal(false);
    });

    it("is false for a number that is less than 1", function() {
        expect(validateInput(0)).to.equal(false);
    });

    it("is true for a number that is greater 1", function () {
        expect(validateInput(2)).to.equal(true);
    });

    it("is true for a number that is equal to 1", function () {
        expect(validateInput(1)).to.equal(true);
    });
});