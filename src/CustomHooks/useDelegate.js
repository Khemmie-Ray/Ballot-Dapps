import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { isAddress } from "ethers";
import { getProvider } from "../constants/provider";
import { getProposalsContract } from "../constants/contract";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const useDelegate = (address) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    if (!isAddress(address)) return console.error("Invalid address");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getProposalsContract(signer);

    try {
      const transaction = await contract.delegate(address);
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        return toast.success("delegate successful!", {
            position: "top-center",
          });
      }

      toast.error("delegate failed!", {
        position: "top-center",
      });
    } catch (error) {
    let errorText;
      if (error.reason === "You already voted.") {
        errorText = "You already voted";
      } else if (error.reason === "Self-delegation is disallowed.") {
        errorText = "Self-delegation is disallowed";
      } else if (error.reason === "Found loop in delegation.") {
        errorText = "Found loop in delegation.";
      } else {
        errorText = "An unknown error occured";
      }

      toast.error(`Error: ${errorText}`, {
        position: "top-center",
      });  
    }
  }, [address, chainId, walletProvider]);
};

export default useDelegate;