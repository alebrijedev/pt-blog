import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { 
    Box,
    SimpleGrid,
    Text,
    Flex,
    Heading,
    Card, 
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    Avatar
  } from "@chakra-ui/react"

interface Entry {
    id: number
    title: string
    author: string
    pubDate: string
    content: string
}

function EntriesPage() {

    const [entries, setEntries] = useState<Entry[]>([])

    useEffect(() => {
        axios.get("/api/entries")
            .then((res) => {
                setEntries(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <SimpleGrid spacing={10} minChildWidth={300}>
        {   
            entries.map(entry => (
                <Link to={`entries/${entry.id}`}>

                <Card key={entry.id} borderTop="8px" borderColor="orange.400" bg="white" maxW='sm'>
                    <CardHeader color="gray.700">
                        <Flex  gap={5}>
                            <Box w="50px" h="50px">
                                <Avatar name={entry.author} src=""/>
                            </Box>
                            <Box>
                                <Heading as="h3" size="sm">{entry.title}</Heading>
                                <Text>by {entry.author}</Text>
                            </Box>
                        </Flex>
                        
                    </CardHeader>
                    <CardBody color="gray.500">
                        <Text>{entry.content.substring(0, 70)}</Text>
                    </CardBody>
                    <CardFooter>
                        <HStack>
                            <Text>{entry.pubDate}</Text>
                        </HStack>
                    </CardFooter>
                </Card>
                </Link>
            ))
        }
        </SimpleGrid>
    )
}

export default EntriesPage