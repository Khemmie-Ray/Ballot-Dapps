import { useWeb3ModalAccount } from '@web3modal/ethers/react'

const useIsChairperson = () => {
const { address } = useWeb3ModalAccount();
  const chairperson = import.meta.env.VITE_ballot_chairperson;

  return address === chairperson;
}

export default useIsChairperson