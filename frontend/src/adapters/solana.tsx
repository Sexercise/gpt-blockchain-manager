
import React, { useRef, useState } from "react";
import {_isConnectedToMetamask, _connectToMetaMask, _disconnectFromMetaMask , _getPublicKey , _getNetworkInfo , _getBalance , _deployNewToken } from "./ethereum_fn";
import { _connectToPhantomWallet, _disconnectFromPhantomWallet, _getSolanaBalance, _getSolanaNetworkInfo, _getSolanaPublicKey } from "./solana_fn";

const Solana: React.FC = () => {
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined);
  const [balance, setBalance] = useState<number | null >(null);
  const [network, setNetwork] = useState<{ endpoint: string, solanaCore: string|undefined, featureSet: number|undefined} | null>(null);
  const [connected , setConnected] = useState<boolean|undefined>(undefined);
  const [myWallet, setMyWallet]: any = useState(undefined);
  const [rpcUrl, setRpcUrl] = useState<string | undefined>("https://test.novafi.xyz/blockchainnode2");



  const [token, setToken] = useState('');

  const handleChange = async (event:any) => {
    setToken(event.target.value);
  }

  const handleClick = async (fn :any) => {
   switch (fn) {
    case 'connect':
        try{
           let result= await _connectToPhantomWallet();
           if(result != null){
            setConnected(true)
            setMyWallet(result)
           }else{
            setConnected(false)
           }
        }catch(error){
            console.error(error);
        }
    break;
    case 'disconnect':
        try{
           let result= await _disconnectFromPhantomWallet(myWallet);
           if (result != null){
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
           let result= await  _getSolanaPublicKey(myWallet);
           if(typeof(result) == 'string'){
            setPublicKey(result)
           }else{
            setPublicKey(undefined)
           }