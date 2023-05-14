import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import {  FaSun , FaMoon } from "react-icons/fa"

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      py={0}
      px={8}
      h="60px"
      bg={isDarkMode ? "gray.800" : "white"}
      color={isDarkMode ? "black" : "gray.800"}
      boxShadow={isDarkMode ? "md" : "none"}
    >
      <Box>
        
      </Box>
      <Box>
        <IconButton onClick={toggleDarkMode} isRound >
          {isDarkMode ? <FaSun/> : <FaMoon/>}
        </IconButton>
      </Box>
    </Flex>
  );
}

export default Navbar;
