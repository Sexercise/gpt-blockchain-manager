
import React, { useEffect, useRef, useState } from "react";
import {_isConnectedToMetamask, _connectToMetaMask, _disconnectFromMetaMask , _getPublicKey , _getNetworkInfo , _getBalance , _deployNewToken  } from "./ethereum_fn";
import { _swap } from "./swap";

import {swapTokens} from "./swap_signer"
import { BigNumber } from "ethers";

const Ethereum: React.FC = () => {
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined);
  const [balance, setBalance] = useState<number | null >(null);
  const [balanceToken, setBalanceToken] = useState<number | null >(null);
  const [network, setNetwork] = useState<{ chainId: string; networkId: number; networkName: string; } | null>(null);
  const [connected , setConnected] = useState<boolean|undefined>(undefined);
   const [newToken,setNewToken] =useState<string|null>('');

  const [token, setToken] = useState('');

  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [supply, setSupply] = useState();


  const weth='0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
  const uni='0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984';



  const [balanceWeth, setBalanceWeth] = useState<number | null >(null);
  const [balanceUni, setBalanceUni] = useState<number | null >(null);


  const [balanceWethBefore, setBalanceWethBefore] = useState<number | null >(null);
  const [balanceUniBefore, setBalanceUniBefore] = useState<number | null >(null);

useEffect(() => {
    const init = async () => {
      try {
        let address = await _getPublicKey();
        let init_weth_balance=await  _getBalance(address,weth);
        setBalanceWethBefore(init_weth_balance)
        let init_uni_balance= await _getBalance(address,uni);
        setBalanceUniBefore(init_uni_balance)
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };

    init();
  }, []);

  const handleChangeToken = async (event:any) => {
    setToken(event.target.value);
  }

  const handleChangeName = async (event:any) => {
    setName(event.target.value);
  }

  const handleChangeSupply = async (event:any) => {
    setSupply(event.target.value);
  }

  const handleChangeSymbol = async (event:any) => {
    setSymbol(event.target.value);
  }


  const handleClick = async (fn :any) => {
   switch (fn) {
    case 'connect':
        try{
           let result= await _connectToMetaMask();
           if(result != null){
            setConnected(true)
           }else{
            setConnected(false)
           }
        }catch(error){
            console.error(error);
        }
    break;
    case 'disconnect':
        try{
           let result= await _disconnectFromMetaMask();
           if (localStorage.getItem('publicKey')){
            setConnected(false)
           }else{
            setConnected(true)
           }
        }catch(error){
            console.error(error);
        }
    break;
    case 'key':
        try{
           let result= await  _getPublicKey();
           if(typeof(result) == 'string'){
            setPublicKey(result)
           }else{
            setPublicKey(undefined)
           }
        }catch(error){
            console.error(error);
        }
    break;
    case 'network':
        try{
           let result= await  _getNetworkInfo();
            setNetwork(result)
        }catch(error){
            console.error(error);
        }
    break;
    case 'balance':
        try{
            
            let address = await _getPublicKey()
            let result= await  _getBalance(address);
            setBalance(result)
        }catch(error){
            console.error(error);
        }
    break;
    case 'balance_token':
        try{
            
            let address = await _getPublicKey();            
            let result= await  _getBalance(address,token);