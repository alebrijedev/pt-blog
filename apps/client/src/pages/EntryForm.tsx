import { 
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Textarea,
    Button
  } from '@chakra-ui/react'

import { Form, Formik } from "formik"
import axios from "axios"

function EntryForm() {
    return (
        <Box maxW="480px">
            <Formik
                initialValues={{
                    title: "",
                    author: "",
                    pubDate: "",
                    content: ""
                }}
                onSubmit={(values, actions) => {
                    axios.post("/api/entries", values)
                        .then((res) => {
                            console.log(res)
                            actions.resetForm()
                        })
                        .catch((err) => {
                            console.error(err)
                        })
                }}
            >
                {({handleChange, handleSubmit, values, isSubmitting}) => (
                    <Form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>title</FormLabel>
                            <Input type="text" name="title" value={values.title} onChange={handleChange}/>
                            <FormHelperText>Enter entry title</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <FormLabel>author</FormLabel>
                            <Input type="text" name="author" value={values.author} onChange={handleChange}/>
                            <FormHelperText>Enter entry author</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <FormLabel>pubDate</FormLabel>
                            <Input type="date" name="pubDate" value={values.pubDate} onChange={handleChange}/>
                            <FormHelperText>Publish Date</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <FormLabel>content</FormLabel>
                            <Textarea name="content" value={values.content} onChange={handleChange}></Textarea>
                            <FormHelperText>Entry content</FormHelperText>
                        </FormControl>

                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save"}
                        </Button>
                    </Form>
                )}
                
            </Formik>
        </Box>
    )
}

export default EntryForm