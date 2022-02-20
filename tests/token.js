const {expect} = require("chai");

describe("Token Contract", function (){
    it("Deployment should assign the total supply of tokens to owner", async function(){
        const [owner] = await ethers.getSigners();

        console.log("Signere object", owner);
        //contract instance
        const Token = await ethers.getContractFactory("Token");
        //deploy contract
        const hardhatToken = await Token.deploy();
        // owner balance = 10000
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        console.log("Owner balance", ownerBalance);

        // expect(ownerBalance).to.equal(10000);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    });
});