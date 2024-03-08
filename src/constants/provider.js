import { ethers } from "ethers";

// provider pointing only to the sepolia blockchain

export const readOnlyProvider = new ethers.JsonRpcProvider(import.meta.env.VITE_rpc_url);

//  read & write provider

export const getProvider = (provider) => new ethers.BrowserProvider(provider);