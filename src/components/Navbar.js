import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py={6}
      px={10}
      bg={isDarkMode ? "gray.800" : "white"}
      color={isDarkMode ? "white" : "gray.800"}
      boxShadow={isDarkMode ? "md" : "none"}
    >
      <Box>
        <Link href="/" fontSize="xl" fontWeight="bold">
          E-Dictionary
        </Link>
      </Box>
      <Box>
        <Link onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
