import { ethers } from "ethers"
import abi from "./abi.json"

export const getProposalsContract = (provider) => new ethers.Contract(import.meta.env.VITE_ballot_contract_adddress, abi, provider)