import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Home
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={NavLink} to="/events" color="white" fontSize="xl" fontWeight="bold" mr={4}>
            Events
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;