_ = require('@nomiclabs/hardhat-ethers');

hardhat = require('hardhat');
chai = require('chai');

describe("Hello World", () => {
    it("should get the hello world", async () => {
        const HW = await hardhat.ethers.getContractFactory("HelloWorld");
        const hello = await HW.deploy();

        chai.expect(await hello.hello()).to.equal("Hello, World");
    });
});