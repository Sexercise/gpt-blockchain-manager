import React from 'react';
import CryptoPrice from './adapters/cryptoprice';
import Ethereum from './adapters/ethereum';
import ChartComponentTest from './adapters/ChartComponentTest';
import Solana from './adapters/solana';


const Tester: React.FC = () => {
  return (
    <div>
      <h1>Crypto Tester: </h1>
        <CryptoPrice ></C