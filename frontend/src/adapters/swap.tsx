import  IUniswapV3PoolABI  from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import  SwapRouterABI from '@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json';


// import a from '@uniswap/v3-periphery/artifacts/contracts/interfaces/'

import   ERC20ABI  from './../ERC20ABI.json';

const {ethers} = require ('ethers')



const providerMainnet =  new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/"+process.env.REACT_APP_INFURA
  );
  const providerTestnet = new ethe