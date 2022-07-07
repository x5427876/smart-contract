import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {  
    const C = await ethers.getContractFactory("Counter"); // 呼叫 lib 中合約
    const counter = await C.deploy();
    
    return counter
}

async function count(counter) {
    await counter.count();
    console.log("Counter", await counter.getCounter());
}


deploy().then(count);