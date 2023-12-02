
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
    console.log("You are already connected to Phantom Wallet");
    return wallet;
  }

  try {
    await wallet.connect();
    if (!wallet.publicKey) {
      console.log("No Connected Account");
      return null;
    }
    localStorage.setItem("solanaPublicKey", wallet.publicKey.toBase58());
    return wallet;
  } catch (error: any) {
    console.log("Failed to connect to Phantom Wallet: " + error.message);
    return null;
  }
};

export const _disconnectFromPhantomWallet = async (wallet:PhantomWalletAdapter): Promise<null | string> => {

  if (!wallet) {
    console.log("Please install Phantom Wallet to use this feature");
    return null;
  }

  console.log(wallet.connected)

  