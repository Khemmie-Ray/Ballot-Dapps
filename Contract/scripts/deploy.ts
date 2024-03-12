import { ethers } from "hardhat";

async function main() {
  const Adekunle = "0x4164656b756e6c65205374657068656e00000000000000000000000000000000";
  const Ebuka = "0x4368756b77756d61204562756b61000000000000000000000000000000000000";
  const Victoria = "0x566963746f726961204164656461796f00000000000000000000000000000000";
  const Timothy = "0x54696d6f74687920416c6f000000000000000000000000000000000000000000";
  const proposalNames = [Adekunle, Ebuka, Victoria, Timothy]

  const ballot = await ethers.deployContract("Ballot", [proposalNames]);
  await ballot.waitForDeployment();

  console.log(
    `Ballot was deployed to ${ballot.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
