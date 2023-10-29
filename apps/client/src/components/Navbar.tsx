import { Flex, Heading, Spacer, Box, HStack, Text } from "@chakra-ui/react"

export default function NavBar() {
    return (
        <Flex as="nav" p="10px" mb="60px" alignItems="center">
            <Heading as="h1" fontSize="1.5em">PT Blog</Heading>
            <Spacer />
            <HStack>
                <Box bg="gray.200" p="10px 15px" borderRadius="50%">U</Box>
                <Text>usuario@mail.com</Text>
            </HStack>
        </Flex>
    )
}