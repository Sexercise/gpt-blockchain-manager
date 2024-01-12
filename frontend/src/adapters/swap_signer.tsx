import ChainId, { Token  } from "@uniswap/sdk-core";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { BigNumber, Contract } from "ethers";
import  SwapRouterABI from '@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json';

const UNISWAP_V3_ROUTER_ADDRESS = "0xE592427A0AEce92De3Edee1F18E0157C05861564"; // Example router address for Ethereum Mainnet

const {ethers} = require ('ethers')

export const swapTokens = async (
  tokenInAd