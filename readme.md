# Web3 Study Group #2 - Smart Contract

自己寫的一個簡單智能合約，可部署在本機上進行模擬交易 & 測試 Gas fee

## 架構圖

![架構圖](https://i.imgur.com/ZduEW0a.png)

## Installation

### 安裝依賴
`npm install` 

### 啟動 local hardhat server

`npx hardhat node`

### 部署合約至 local server

`npx hardhat run scripts/deploy.ts --network localhost`

### webpack bundle resources

`npx webpack`

### 啟動 local http server 加載網頁
這邊使用的是 Python3 內建的 http server

`python3 -m http.server`

## Reference

[Web3 Course](https://frontendmasters.com/courses/web3-smart-contracts/)

[Web3 Document](https://theprimeagen.github.io/web3-smart-contracts/)

[Ethers.js](https://docs.ethers.io/v5/)







