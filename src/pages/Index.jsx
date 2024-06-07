import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaCalendarAlt, FaUsers, FaChartLine } from "react-icons/fa";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="brand.700">
          Event Management Simplified
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Our SaaS solution helps you manage events effortlessly, from planning to execution.
        </Text>
        {session ? (
          <Button colorScheme="teal" size="lg" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button colorScheme="teal" size="lg" as="a" href="/login">
            Login
          </Button>
        )}
      </VStack>
      <Box mt={10} width="100%">
        <Flex justify="space-around" wrap="wrap">
          <Box textAlign="center" p={4} maxW="sm">
            <FaCalendarAlt size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Plan
            </Heading>
            <Text mt={2} color="gray.600">
              Seamlessly plan your events with our intuitive tools.
            </Text>
          </Box>
          <Box textAlign="center" p={4} maxW="sm">
            <FaUsers size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Manage
            </Heading>
            <Text mt={2} color="gray.600">
              Efficiently manage attendees, vendors, and more.
            </Text>
          </Box>
          <Box textAlign="center" p={4} maxW="sm">
            <FaChartLine size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4}>
              Analyze
            </Heading>
            <Text mt={2} color="gray.600">
              Gain insights with our powerful analytics tools.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;