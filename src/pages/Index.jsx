import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Financial Times
        </Heading>
      </Box>

      {/* Navigation Bar */}
      <Box bg="gray.700" color="white" py={2}>
        <HStack spacing={8} justify="center">
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Markets</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Companies</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Tech</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Opinion</Link>
        </HStack>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} py={8} px={4}>
        {/* Main Section */}
        <Box flex="3" mr={{ md: 4 }}>
          {/* Featured Article */}
          <Box mb={8}>
            <Heading as="h2" size="lg" mb={4}>
              Featured Article
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>

          {/* Other Articles */}
          <VStack spacing={8}>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Article Title 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Article Title 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebars */}
        <Box flex="1">
          {/* Financial Data */}
          <Box mb={8}>
            <Heading as="h3" size="md" mb={4}>
              Financial Data
            </Heading>
            <Text>
              Stock Market: Up 1.2%
            </Text>
            <Text>
              Dow Jones: 34,000
            </Text>
            <Text>
              NASDAQ: 14,000
            </Text>
          </Box>

          {/* Trending News */}
          <Box>
            <Heading as="h3" size="md" mb={4}>
              Trending News
            </Heading>
            <Text>
              Trending Article 1
            </Text>
            <Text>
              Trending Article 2
            </Text>
            <Text>
              Trending Article 3
            </Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="center" spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Contact Information</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Privacy Policy</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Terms of Service</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;