
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
