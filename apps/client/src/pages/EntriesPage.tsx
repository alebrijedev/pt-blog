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
    Avatar,
    Input,
    FormControl,
    FormLabel,
    Button
} from "@chakra-ui/react"
import { Form, Formik } from "formik"

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
        <Box>
            <Formik
                initialValues={{
                    title: "",
                    author: "",
                    content: ""
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({handleChange, values}) => (
                    <Form>
                        <Box maxW="480px" mb="30px">
                            <FormControl>
                                <FormLabel>Filter title</FormLabel>
                                <Input type="text" name="title" value={values.title} onChange={handleChange}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Filter author</FormLabel>
                                <Input type="text" name="author" value={values.author} onChange={handleChange}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Filter content</FormLabel>
                                <Input type="text" name="content" value={values.content} onChange={handleChange}/>
                            </FormControl>
                        </Box>
                        <SimpleGrid spacing={10} minChildWidth={300}>
                        {   entries.length === 0 ? (<Link to="create"><Button bg="orange.400" color="gray.50">Add new Entry</Button></Link>) :
                            entries
                            .filter(item => item.title.toLowerCase().includes(values.title.toLocaleLowerCase()))
                            .filter(item => item.author.toLowerCase().includes(values.author.toLocaleLowerCase()))
                            .filter(item => item.content.toLowerCase().includes(values.content.toLocaleLowerCase()))
                            .map(entry => (
                                <Link to={`entries/${entry.id}`} key={entry.id}>

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
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default EntriesPage