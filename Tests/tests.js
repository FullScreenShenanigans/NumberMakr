var numTries = 35,
    seed = new Date().getTime(),
    stateLength = 700,
    statePeriod = 420,
    matrixA = 0x9908a1df,
    maskUpper = 0x79000000,
    maskLower = 0x6fffffff,
    NumberMaker;

describe("constructor", function () {
    it("doesn't error", function () {
        new NumberMakr();
    });

    it("takes settings", function () {
        NumberMaker = new NumberMakr({
            "seed": seed,
            "stateLength": stateLength,
            "statePeriod": statePeriod,
            "matrixA": matrixA,
            "maskUpper": maskUpper,
            "maskLower": maskLower
        });
    });

    it("stores seed", function () {
        chai.expect(NumberMaker.getSeed()).to.be.equal(seed);
    });

    it("stores stateLength", function () {
        chai.expect(NumberMaker.getStateLength()).to.be.equal(stateLength);
    });

    it("stores statePeriod", function () {
        chai.expect(NumberMaker.getStatePeriod()).to.be.equal(statePeriod);
    });

    it("stores matrixA", function () {
        chai.expect(NumberMaker.getMatrixA()).to.be.equal(matrixA);
    });

    it("stores maskUpper", function () {
        chai.expect(NumberMaker.getMaskUpper()).to.be.equal(maskUpper);
    });

    it("stores maskLower", function () {
        chai.expect(NumberMaker.getMaskLower()).to.be.equal(maskLower);
    });
});

describe("random", function () {

});