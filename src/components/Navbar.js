import React from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <Box
      as="nav"
      position="fixed" 
      top="0"
      left="0"
      right="0"
      zIndex="999" 
      py={2}
      px={4}
      bg={isDarkMode ? "gray.800" : "white"}
      color={isDarkMode ? "black" : "gray.800"}
      boxShadow="base"
    >
      <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
        <Box>
          <Text fontSize="26px" fontWeight="600" fontFamily="Arial" color={isDarkMode ? "white" : "black"}>
            <span className="c">D</span>efine<span className="c">I</span>t
          </Text>
        </Box>
        <Box>
          <IconButton onClick={toggleDarkMode} isRound>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </IconButton>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
