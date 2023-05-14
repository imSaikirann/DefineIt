import React from "react";
import { Box, Flex, IconButton,Text } from "@chakra-ui/react";
import {  FaSun , FaMoon } from "react-icons/fa"


function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      py={0}
      px={2}
      h="60px"
      bg={isDarkMode ? "gray.800" : "white"}
      color={isDarkMode ? "black" : "gray.800"}
      boxShadow={isDarkMode ? "md" : "none"}
    >
      <Box>
      <Text fontSize="26px" fontWeight="600" fontFamily="Arial" color={isDarkMode ? "white":"black"}><span className="c">D</span>efine<span className="c">I</span>t</Text>
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
