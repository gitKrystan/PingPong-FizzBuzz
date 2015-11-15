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

    it("is true for a number that is greater 1", function() {
        expect(validateInput(2)).to.equal(true);
    });

    it("is true for a number that is equal to 1", function() {
        expect(validateInput(1)).to.equal(true);
    });
});

describe('pingPongTest', function() {
    it("returns pingpong for a number that is divisible by 3 and 5", function() {
        expect(pingPongTest(15)).to.equal("pingpong");
    });
    it("returns ping for a number that is divisible by 3", function() {
        expect(pingPongTest(3)).to.equal("ping");
    });
    it("returns pong for a number that is divisible by 5", function() {
        expect(pingPongTest(5)).to.equal("pong");
    });
    it("returns the number for a number that is divisible by 3 and 5", function() {
        expect(pingPongTest(2)).to.equal(2);
    });
});

describe('generatePingPongs', function() {
    it("generates an array of [1,2] when given 2 as an input", function() {
        expect(generatePingPongs(2)).to.have.same.members([1,2]);
    });
});