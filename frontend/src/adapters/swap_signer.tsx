import ChainId, { Token  } from "@uniswap/sdk-core";
import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { BigNumber, Contract } from "ethers";
import  SwapRouterABI from '@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json';

const UNISWAP_V3_ROUTER_ADDRESS = "0xE592427A0AEce92De3Edee1F18E0157C05861564"; // Example router address for Ethereum Mainnet

const {ethers} = require ('ethers')

export const swapTokens = async (
  tokenInAddress: string,
  tokenOutAddress: string,
  amountIn: BigNumber,
  account: any
) => {
  const providerUrl =
    "https://goerli.infura.io/v3/" + process.env.REACT_APP_INFURA;

  // const provider = new JsonRpcProvider(providerUrl);
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  const routerContract = new Contract(
    UNISWAP_V3_ROUTER_ADDRESS,
    SwapRouterABI.abi,
    signer
  );

  const network = await provider.getNetwork();
  const chainId = network.chainId;

  const tokenIn = new Token(chainId, tokenInAddress, 18); // Assuming 18