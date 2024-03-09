import { useCallback } from "react"
import { SUPPORTED_CHAIN } from "../connection";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "../constants/provider";
import { getProposalsContract } from "../constants/contract";
import { isAddress } from "ethers";


const useRightToVote = (address) => {
  const {chainId} = useWeb3ModalAccount();
  const {walletProvider} = useWeb3ModalProvider();

  return useCallback(async () => {
    if(!SUPPORTED_CHAIN(chainId)) return console.error("Connect to the right chain");
    if(!isAddress(address)) return console.error("Invalid address")

    const readWriteProvider = getProvider(walletProvider)
    const signer = await readWriteProvider.getSigner()
    const contract = getProposalsContract(signer)

    try {
      const transaction = await contract.RightToVote()
      const receipt = await transaction.wait();
      console.log("Receipt:", receipt)

      if(receipt.status) {
        return console.log("rightToVote successful")
      } console.log("rightToVote failed")
      
    } catch(err) {
      console.log(err)
    }
  }, [address, chainId, walletProvider]);
}

export default useRightToVote