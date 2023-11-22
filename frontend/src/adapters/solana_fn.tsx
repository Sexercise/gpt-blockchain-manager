
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Connection, PublicKey, Version } from "@solana/web3.js";

export const _connectToPhantomWallet = async (): Promise<null | PhantomWalletAdapter> => {

  //@ts-ignore
  const provider = window