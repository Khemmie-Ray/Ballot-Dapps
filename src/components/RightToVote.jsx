import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import useRightToVote from "../CustomHooks/useRightToVote";
import { useState } from "react";

const RightToVote = () => {
  const [address, setAddress] = useState("")

  const handleGiveRight = useRightToVote(address)
  return (  
    <Dialog.Root>
    <Dialog.Trigger>
        <Button className="bg-blue-600">Add Voter</Button>
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
            Give right to vote
        </Dialog.Description>

        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Voter&apos;s Address
                </Text>
                <TextField.Input placeholder="Enter Voter's Address" onChange={(e) => setAddress(e.target.value)}/>
            </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                <Button variant="soft" color="gray">
                    Cancel
                </Button>
            </Dialog.Close>
            <Dialog.Close>
                <Button className="bg-blue-600" onClick={handleGiveRight}>Add voter</Button>
            </Dialog.Close>
        </Flex>
    </Dialog.Content>
</Dialog.Root>

  )
}

export default RightToVote