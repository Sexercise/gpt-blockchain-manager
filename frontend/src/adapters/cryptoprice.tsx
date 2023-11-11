import React, { useState } from "react";
import { _getCryptoCurrencyQuote } from "./market";

const CryptoPrice: React.FC = () => {
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [volume, setVolume] = useState<number | undefined>(undefined);
  const [marketCap, setMarketCap] = useState<number | undefined>(undefined);

  const handleClick = async (quote:any) => {

    switch (quote) {
      case 'price':
        try {
          const price = await _getCryptoCurrencyQuote("bitcoin" , "price");
          setPrice(price