const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory
    let simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory(
            "SimpleStorage"
        )
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert
        // expect
        assert.equal(currentValue.toString(), expectedValue);
    })
    it("Should update when we call store", async function () {
      const expectedValue = "7";
      const transactionResponse = await simpleStorage.store(expectedValue);
      await transactionResponse.wait(1);

      const currentValue = await simpleStorage.retrieve()
      assert.equal(currentValue.toString(), expectedValue)
    })
    // it("Should add person to people array", async function () {
    //   const addPerson = await simpleStorage.addPerson("keaton", 13);
    //   await addPerson.wait(1);
    //   const currentLength = await simpleStorage.people.length;
    //   // const updatedLength = await simpleStorage.people.length;
    //   console.log(currentLength)
    //   assert.equal(currentLength )
    // })
})
