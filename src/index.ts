import { ethers } from "ethers";
import Counter from '../artifacts/contracts/index.sol/Counter.json';

function getEth() {
    // @ts-ignore
    const eth = window.ethereum;

    if(!eth) {
        throw new Error("Error")
    }
    return eth;
}

async function hasAccounts() {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_accounts"}) as string[];

    return accounts && accounts.length;
}

async function requestAccounts() {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_requestAccounts"}) as string[];

    return accounts && accounts.length;
}

async function run() {
    if(!await hasAccounts() && !await requestAccounts()) {
        throw new Error("Error")
    }

    const counter = new ethers.Contract(
        process.env.CONTRACT_ADDRESS,  // 目的錢包
        Counter.abi, // 告訴 ether 合約中有哪些方法
        new ethers.providers.Web3Provider(getEth()).getSigner(),
    )
    
    const el = document.createElement("div");
    async function setCounter(count?) {
        el.innerHTML = count || await counter.getCounter()
    }
    setCounter();

    const btn = document.createElement("button");
    btn.innerText = "increament";
    btn.onclick = async function() {
        await counter.count();
    }

    counter.on(counter.filters.CounterInc(), function(count) {  // 類似於 js 的 eventListner，CounterInc 執行時就觸發
        setCounter(count);
    })

    document.body.appendChild(el);
    document.body.appendChild(btn);
}

run()