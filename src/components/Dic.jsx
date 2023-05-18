import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Stack, Button, Heading, Text, Icon, InputGroup, Flex, Spinner } from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'
function Dic({ isDarkMode }) {
    const [word, setWord] = useState("");
    const [definitions, setDefinitions] = useState([]);
    const [phonetic, setPhonetic] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const toast = useToast();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setNotFound(false);

            try {
                const response = await axios.get(
                    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
                );
                const data = response.data;
                console.log(data);

                if (data.length > 0) {
                    setDefinitions(data[0].meanings);
                    setPhonetic(data[0].phonetic);
                } else {
                    setDefinitions([]);
                    setNotFound(true);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setDefinitions([]);
                setNotFound(true);
            }

            setLoading(false);
        }

        if (word) {
            fetchData();
        }
        
    }, [word]);

    function handleSearch(event) {
        event.preventDefault();
       
        if(word == "")
       
        {  toast({
            title: "Error",
            description: "Please enter a word.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
        else
        {
            setWord(event.target.search.value);
        }
    }

    return (
        <Flex h="2000px" direction="column" py="10" marginTop="50px" bg={isDarkMode ? "gray.900" : "white"} alignItems="center">
            <form onSubmit={handleSearch}>
                <Stack spacing={[2, 4]}>
                    <Stack direction={{ base: "row", lg: "row" }} justifyContent="center" padding={["20px", "30px", "40px"]}>
                        <InputGroup size="lg" w={["100%", "600px"]} mx="auto" >
                            <Input type="text" name="search" focusBorderColor="none"  borderRadius="8px" boxShadow="rgba(0,0,0,0.2) 0px 4px 6px 0px" placeholder="Search" color={isDarkMode ? "white" : "gray.800"} bg={isDarkMode ? "gray.800" : "white"} />
                        </InputGroup>
                        <Stack direction="row" align="center" justifyContent="center">
                            <Button type="submit" px={[2, 4]} py={[5, 6]}><Icon as={FaSearch} w={6} h={10} color="gray.600" /></Button>
                        </Stack>
                    </Stack>
                </Stack>
            </form>

            {isLoading ? (
                <Spinner size="lg" color={isDarkMode ? "white":"Grey"} />
            ) : notFound ? (
                <Text fontSize="2xl" fontWeight="bold" color={isDarkMode ? "white" : "gray.800"} mt={10}>
                    No results found for "{word}"
                </Text>
            ) : (
                <Stack alignItems="flex-start" spacing="4">
                    {definitions.map((meaning, index) => (
                        <div key={index}>
                            <Stack padding={["20px", "25px", "35px"]} bg={isDarkMode ? "gray.900" : "white"} color={isDarkMode ? "white" : "gray.700"}>
                                <Stack direction="column" justifyContent="flex-start">
                                    <Stack direction="row">
                                        <Heading fontSize={["24px", "32px"]} color={isDarkMode ? "white" : "black"} fontWeight="900" lineHeight="taller">
                                            {word.charAt(0).toUpperCase() + word.slice(1)}
                                        </Heading>
                                        <Heading fontSize={["24px", "32px"]} fontWeight="700" lineHeight="taller">
                                            {phonetic}
                                        </Heading>
                                    </Stack>
                                    <Text fontSize={["16px", "20px"]} fontWeight="600">
                                        {meaning.partOfSpeech}
                                    </Text>
                                </Stack>
                                <Stack>
                                    {meaning.definitions.map((definition, index) => (
                                        <Text as="p" fontSize={["16px", "lg"]} fontWeight={["400", "500"]} fontFamily="Monospace" key={index}>
                                            {definition.definition}
                                        </Text>
                                    ))}
                                </Stack>
                            </Stack>
                        </div>
                    ))}
                </Stack>
            )}
        </Flex>
    );
}

export default Dic;
