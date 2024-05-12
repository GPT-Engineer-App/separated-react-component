import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

// Separate React Component
const CustomComponent = () => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
      <Heading fontSize="xl">Custom Component</Heading>
      <Text mt={4}>This is a custom component inside the Index page.</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Below is an example of a custom component:</Text>
        <CustomComponent />
      </VStack>
    </Container>
  );
};

export default Index;
