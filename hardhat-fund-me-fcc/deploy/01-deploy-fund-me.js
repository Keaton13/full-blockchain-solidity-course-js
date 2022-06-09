// imports
// main function
// calling of main function

// function deployFunc() {
//     console.log("Hi!")
// }

// module.exports.default = deployFunc;

const { networkConfig } = require("../helper-hardhat-config")
const {network} = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // if chainId is X use y
    // if chainId is Z use A

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

    // if the contract doesn't exist, we deploy a minimal version of 
    // for our local testing

    // well what happens when we want to change chains?
    // when going for localhost or hardhat network we want to use a mock
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [address], // put price feed address
        log: true,
    })
}
