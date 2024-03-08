import React from 'react'
import { Avatar, Box, Button, Card, Flex, Text} from "@radix-ui/themes"

const Proposal = ({id, name, voteCount }) => {
  return (
    <Card size="2" style={{ width: 425 }}>
    <Flex gap="4" align="center">
      <Avatar size="4" radius="full" fallback={id} color="indigo" />
      <Box>
        <Text as="div" weight="bold">
          {name}
        </Text>
        <Text as="div" color="gray">
          Number of vote: {voteCount}
        </Text>
        <Button onClick={()=>console.log(id)}>Vote</Button>
      </Box>
    </Flex>
  </Card>
  )
}

export default Proposal