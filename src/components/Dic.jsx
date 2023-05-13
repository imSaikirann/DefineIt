import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Stack, Button, Heading, Text, Icon } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa"

function Dictionary() {
    const [word, setWord] = useState("");
    const [definitions, setDefinitions] = useState([]);
    const [phonetic,setphonetic] = useState("")

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
        <Stack py="10">

            <form onSubmit={handleSearch}>
                <Stack spacing={4} >
                    <Stack direction="row" justifyContent="center">
                        <Heading fontFamily="Arial">E-Dictionary</Heading>
                    </Stack>
                    <Stack direction="row" justifyContent="center" >
                        <Input px="2" py="4" borderRadius="8px" bozShadow="rgba(0,0,0,0.2) 0px 4px 6px 0px" size="lg" w="600px" name="search" />
                        <Stack direction="row" justifyContent="center">
                            <Button type="submit" px={4} py={6}><Icon as={FaSearch} w={6} h={10} color="gray.500"></Icon></Button>
                        </Stack>
                    </Stack>

                </Stack>


            </form>
            {definitions.length > 0 ? (
                definitions.map((meaning, index) => (
                    <div key={index}>
                        <Stack px="20" >
                            <Stack direction="column" justifyContent="flex-start">
                               <Stack direction="row">
                               <Heading fontSize="32px" fontweight="900" lineHeight="taller">{word.charAt(0).toUpperCase()+word.slice(1)}</Heading>
                               <Heading fontSize="32px" fontweight="700" lineHeight="taller">{phonetic}</Heading>
                               </Stack>
                                <Text fontSize="20px" fontWeight="600">{meaning.partOfSpeech}</Text>
                            </Stack>
                            <Stack >
                                {meaning.definitions.map((definition, index) => (
                                    <Text as="p" fontSize="lg" fontFamily="Helvetica" key={index}> {definition.definition}</Text>
                                ))}
                            </Stack>
                        </Stack>

                    </div>
                ))
            ) : (
                <p>No definitions found.</p>
            )}
        </Stack>
    );
}

export default Dictionary;
