// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint32 private counter;

    event CounterInc(uint256 counter); // 宣告事件

    function count() public {
        counter++;
        console.log("Counter is now", counter);
        emit CounterInc(counter); // 呼叫事件
    }

    function getCounter() public view returns (uint32) {
        return counter;
    }
}
