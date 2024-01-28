import { gptText, toolDescriptionContent } from '@/app/lib/constants';
import { rem } from '@/app/lib/functions';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { styles } from './styles';

const ToolDescription = () => {
  return (
    <Flex
      sx={{
        ...styles.container,
      }}
    >
      <Flex
        sx={{
          gap: { sm: 1,base:1, md: 3 },
        }}
      >
        {Array.isArray(toolDescriptionContent.title) &&
          toolDescriptionContent.title.map((content) => (
            <Box key={content} mb={{ base: "1", sm: "2", md: "3" }}>
              <Text
                sx={{
                  ...styles.text,
                  fontSize: {
                    base: rem(20),
                    sm: rem(20),
                    md: rem(30),
                    lg: rem(30),
                  },
                  fontWeight: "bold",
                }}
              >
                {content}
              </Text>
            </Box>
          ))}
      </Flex>
      <Text
        sx={{
          ...styles.text,
          textAlign: "center",
          fontSize: {
            base: rem(15),
            sm: rem(15),
            md: rem(16),
            lg: rem(15),
          },
        }}
        mb='4'
      >
        {toolDescriptionContent.description}
      </Text>
      <Text
        sx={{
          ...styles.text,
          textAlign: "center",
          fontSize: {
            base: rem(15),
            sm: rem(15),
            md: rem(16),
            lg: rem(15),
          },
          fontWeight:'bold',
          textDecoration: 'underline'
        }}
      >
        {gptText}
      </Text>
    </Flex>
  );
}

export default ToolDescription;
