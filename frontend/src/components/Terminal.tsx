
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Terminal.css";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Connection, PublicKey, Version } from "@solana/web3.js";

import ChainId, { Token } from "@uniswap/sdk-core";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { BigNumber, Contract } from "ethers";
import SwapRouterABI from "@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json";

const request = require("superagent");
const { ethers } = require("ethers");
interface Output {
  command: string;
}
const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<Output[]>([]);
  const [remainingRequests, setRemainingRequests] = useState(2); // Define the remainingRequests variable
  const [solanaNetwork, setSolanaNetwork] = useState<string>(
    "https://api.mainnet-beta.solana.com"
  );
  const [connection, setConnection] = useState<any>(
    new window.solanaWeb3.Connection(solanaNetwork)
  );
  const [solanaWallet, setSolanaWallet]: any = useState(undefined);
  const [rpcUrlInitial, setRpcUrlInitial] = useState<string>(
    "https://test.novafi.xyz/blockchainnode2"
  );

  // Set the value of `isUserPaid` based on some condition
  const isUserPaid = true; // Example value, replace with your own logic
  type UserType = "free" | "paid";

  const MAX_REQUESTS_FREE_USER = 2;
  const MAX_REQUESTS_PAID_USER = 10;

  let userRequestCount: Map<string, number> = new Map();

  const UNISWAP_V3_ROUTER_ADDRESS =
    "0xE592427A0AEce92De3Edee1F18E0157C05861564"; // Example router address for Ethereum Mainnet

  const getData = (input: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      request
        .post("/gpt-test")
        .send({ command: input })
        .set("Accept", "application/json")
        .set("Access-Control-Allow-Origin", "*")
        .end((err: any, res: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
    });
  };

  const _getCryptoCurrencyPrice = async (
    cryptoName: string,
    date?: string
  ): Promise<number> => {
    cryptoName = cryptoName.toLowerCase();
    if (!date) {
      date = new Date().toISOString().slice(0, 10);
    }

    const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoName}/history?date=${date}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data.market_data.current_price.usd;
  };

  const _getCurrentCryptoCurrencyPrice = async (
    cryptoName: string
  ): Promise<number> => {
    cryptoName = cryptoName.toLowerCase();
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoName}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data.market_data.current_price.usd;
  };

  //ethereum functions
  const _connectToMetaMask = async (): Promise<string | null> => {
    // Check if MetaMask is installed
    if (typeof window.ethereum === "undefined") {
      console.log("Please install MetaMask to use this feature");
      return null;
    }

    // Check if the wallet is already connected
    if (window.ethereum.selectedAddress !== null) {
      console.log("You are already connected to MetaMask");
      return window.ethereum.selectedAddress;
    }

    try {
      // Request permission to access the user's accounts
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // Save the selected account address to local storage
      localStorage.setItem("publicKey", accounts[0]);
      return accounts[0];
    } catch (error: any) {
      // Handle error gracefully
      console.log("Failed to connect to MetaMask: " + error.message);
      return null;
    }
  };

  const _disconnectFromMetaMask = async (): Promise<void> => {
    // Check if MetaMask is installed
    if (typeof window.ethereum === "undefined") {
      console.log("Please install MetaMask to use this feature");
      // return null;
    }

    // Check if the wallet is already disconnected
    if (!window.ethereum.selectedAddress) {
      console.log("You are already disconnected from MetaMask");
      // return null;