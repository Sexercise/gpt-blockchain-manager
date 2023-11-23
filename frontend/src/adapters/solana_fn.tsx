
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Connection, PublicKey, Version } from "@solana/web3.js";

export const _connectToPhantomWallet = async (): Promise<null | PhantomWalletAdapter> => {

  //@ts-ignore
  const provider = window.solana;
  if (!provider || !provider.isPhantom) {
    window.open("https://phantom.app/", "_blank");
    return null;
  }
  let wallet = new PhantomWalletAdapter(provider);

  if (!wallet) {
    console.log("Please install Phantom Wallet to use this feature");
    return null;
  }

  if (wallet.connected) {
    console.log("You 