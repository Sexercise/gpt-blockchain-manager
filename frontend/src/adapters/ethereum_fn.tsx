
import { Contract } from "ethers";

const {ethers} = require ('ethers')

export const _isConnectedToMetamask = async (): Promise<boolean> => {
  if (typeof window.ethereum === "undefined") {
    console.log("Please install MetaMask to use this feature");
    return false;
  } else {
    // Check if the wallet is already connected
    if (window.ethereum.selectedAddress !== null) {
      console.log("You are already connected to MetaMask");
      return true;
    } else {
      console.log("You are not connected to MetaMask");
      return false;
    }
  }
};

export const _connectToMetaMask = async (): Promise<string | null> => {
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

export const _disconnectFromMetaMask = async (): Promise<void> => {
  // Check if MetaMask is installed
  if (typeof window.ethereum === "undefined") {
    console.log("Please install MetaMask to use this feature");
    // return null;
  }

  // Check if the wallet is already disconnected
  if (!window.ethereum.selectedAddress) {
    console.log("You are already disconnected from MetaMask");
    // return null;
  }

  try {
    // Disconnect from MetaMask
    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [{ eth_accounts: {} }],
    });
    localStorage.removeItem("publicKey");
    console.log("You have successfully disconnected from MetaMask");
  } catch (error: any) {
    // Handle error gracefully
    console.log("Failed to disconnect from MetaMask: " + error.message);
    // return null;
  }
};

export const _getPublicKey = async (): Promise<void | null | string> => {
  // Check if MetaMask is installed
  if (typeof window.ethereum === "undefined") {
    console.log("Please install MetaMask to use this feature");
    return null;
  }

  // Check if the wallet is connected
  if (!window.ethereum.selectedAddress) {
    console.log("You are not connected to MetaMask");
    return null;
  }

  try {
    // Retrieve the public key from MetaMask
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (error: any) {
    // Handle error gracefully
    console.log(
      "Failed to retrieve public key from MetaMask: " + error.message
    );
    return null;
  }
};

export const _getNetworkInfo = async (): Promise<null | {
  chainId: string;
  networkId: number;
  networkName: string;
}> => {
  // Check if MetaMask is installed
  if (typeof window.ethereum === "undefined") {
    console.log("Please install MetaMask to use this feature");
    return null;
  }

  // Check if the wallet is connected
  if (!window.ethereum.selectedAddress) {
    console.log("You are not connected to MetaMask");
    return null;
  }

  try {
    // Retrieve the network information from MetaMask
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const networkId = await window.ethereum.request({
      method: "net_version",
    });

    let networkName;
    switch (chainId) {
      case "0x1":
        networkName = "Mainnet";
        break;
      case "0x3":
        networkName = "Ropsten Testnet";
        break;