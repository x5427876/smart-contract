// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint32 private counter;

    function count() public {
        counter++;
        console.log("Counter is now", counter);
    }

    function getCounter() public view returns (uint32) {
        return counter;
    }
}