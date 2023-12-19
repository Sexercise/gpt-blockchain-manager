import  IUniswapV3PoolABI  from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import  SwapRouterABI from '@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json';


// import a from '@uniswap/v3-periphery/artifacts/contracts/interfaces/'

import   ERC20ABI  from './../ERC20ABI.json';

const {ethers} = require ('ethers')



const providerMainnet =  new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/"+process.env.REACT_APP_INFURA
  );
  const providerTestnet = new ethers.providers.JsonRpcProvider(
    "https://goerli.infura.io/v3/"+process.env.REACT_APP_INFURA
  );


const wallet = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY);
const connected_wallet = wallet.connect(providerTestnet);


const provider = providerTestnet // georli
//uni link  0x4Cff90F02897259E1aB69FF6bbD370EA14529bD8
const poolAddress = "0x4d1892f15B03db24b55E73F9801826a56d6f0755" // UNI/WETH
const swapRouterAddress = '0xE592427A0AEce9