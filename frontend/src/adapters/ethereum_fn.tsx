
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