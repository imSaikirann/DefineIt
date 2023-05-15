import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Stack, Button, Heading, Text, Icon, InputGroup, Flex } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa"

function Dic({ isDarkMode }) {

    const [word, setWord] = useState("");
    const [definitions, setDefinitions] = useState([]);
    const [phonetic, setphonetic] = useState("")

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            const data = response.data;
            console.log(data);

            if (data.length > 0) {
                setDefinitions(data[0].meanings);
                setphonetic(data[0].phonetic)
            } else {
                setDefinitions([]);
            }
        }
        if (word) {
            fetchData();
        }
    }, [word]);

    function handleSearch(event) {
        event.preventDefault();
        setWord(event.target.search.value);
    }

    return (
        <Flex h="1100px" direction="column" py="10" bg={isDarkMode ? "gray.900" : "white"} alignItems="center">
            <form onSubmit={handleSearch}>
                <Stack spacing={[2, 4]} >
                    <Stack direction={{ base: "row", lg: "row" }} justifyContent="center" padding={["20px", "30px", "40px"]}  >
                        <InputGroup size="lg" w={["100%", "600px"]} mx="auto">
                            <Input type="text" name="search" borderRadius="8px" bozShadow="rgba(0,0,0,0.2) 0px 4px 6px 0px" placeholder="Search" color={isDarkMode ? "white" : "gray.800"} bg={isDarkMode ? "gray.800" : "white"} />
                        </InputGroup>
                        <Stack direction="row" align="center" justifyContent="center">
                            <Button type="submit" px={[2, 4]} py={[5, 6]}><Icon as={FaSearch} w={6} h={10} color="gray.600"></Icon></Button>
                        </Stack>
                    </Stack>
                </Stack>
            </form>

            {definitions.map((meaning, index) => (
                <div key={index}>
                    <Stack padding={["20px", "25px", "35px"]} bg={isDarkMode ? "gray.900" : "white"} color={isDarkMode ? "white" : "gray.700"} h="full">
                        <Stack direction="column" justifyContent="flex-start">
                            <Stack direction="row">
                                <Heading fontSize={["24px", "32px"]} color={isDarkMode ? "white" : "black"} fontweight="900" lineHeight="taller">{word.charAt(0).toUpperCase() + word.slice(1)}</Heading>
                                <Heading fontSize={["24px", "32px"]} fontweight="700" lineHeight="taller">{phonetic}</Heading>
                            </Stack>
                            <Text fontSize={["16px", "20px"]} fontWeight="600">{meaning.partOfSpeech}</Text>
                        </Stack>
                        <Stack >
                            {meaning.definitions.map((definition, index) => (
                                <Text as="p" fontSize={["16px", "lg"]} fontWeight={["400","500"]} fontFamily="Monospace" key={index}> {definition.definition}</Text>
                            ))}
                        </Stack>
                    </Stack>
                </div>
            ))
            }
        </Flex>
    );
}
export default Dic;      