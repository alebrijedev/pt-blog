import { Badge, Box, Card, CardHeader, Flex, Avatar, Text, CardBody, HStack, Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

interface Entry {
    id: number
    title: string
    author: string
    pubDate: string
    content: string
}

export default function EntryDetail() {

    const {entryId} = useParams()
    const [entry, setEntry] = useState<Entry>({
        id: 0,
        title: "",
        author: "",
        pubDate: "",
        content: ""
    })

    useEffect(() => {
        axios.get(`/api/entries/${entryId}`)
            .then((res) => {
                setEntry(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <Box>
            <Card key={entry.id} borderTop="8px" borderColor="orange.400" bg="white">
                <CardHeader color="gray.700">
                    <Flex  gap={5}>
                        <Box w="50px" h="50px">
                            <Avatar name={entry.author} src=""/>
                        </Box>
                        <Box>
                            <Heading as="h3" size="sm">{entry.title}</Heading>
                            <HStack>
                                <Text>by {entry.author}</Text>
                                <Badge colorScheme='green'>{entry.pubDate}</Badge>
                            </HStack>
                        </Box>
                    </Flex>
                    
                </CardHeader>
                <CardBody color="gray.500">
                    <Text>{entry.content}</Text>
                </CardBody>
                </Card>
        </Box>
    )
}