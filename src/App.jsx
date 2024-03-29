import React, { useState } from 'react'
import { configWeb3Modal } from "./connection"
import Header from './components/Header';
import Proposal from './components/Proposal';
import "@radix-ui/themes/styles.css";
import DelegateVote from './components/DelegateVote';
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import useHandleVote from './CustomHooks/useHandleVote';
import useProposals from './CustomHooks/useProposals';

configWeb3Modal();

const App = () => {
  const { loading, data: proposals } = useProposals();
  const [id, setId] = useState(0);
  const handleVote = useHandleVote(id);
  
  return (
    <div>
      <Header />
      <main className='my-6'>
        <Box mb="4">
            <DelegateVote />
          </Box>
          <Flex wrap={"wrap"} gap={"6"}>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : proposals.length !== 0 ? (
                        proposals.map((item, index) => (
                            <Proposal
                                key={index}
                                name={item.name}
                                handleVote={handleVote}
                                id={id}
                                voteCount={Number(item.voteCount)}
                            />
                        ))
                    ) : (
                        <Text>Could not get proposals!!</Text>
                    )}
                </Flex>
      </main>
    </div>
  )
}

export default App