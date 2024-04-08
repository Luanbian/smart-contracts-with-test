import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  async function deployLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const LockContract = await ethers.getContractFactory("Lock");
    const contract = await LockContract.deploy();
    return { contract, owner, otherAccount };
  }

  it("should get Hello world", async () => {
    const { contract } = await loadFixture(deployLockFixture);
    const sut = await contract.hello();
    expect(sut).to.equal("Hello world");
  });

  it("should set message to newMessage", async () => {
    const { contract } = await loadFixture(deployLockFixture);
    await contract.setMessage("New message");
    const sut = await contract.hello();
    expect(sut).to.equal("New message");
  });
});
