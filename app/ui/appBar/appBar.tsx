'use client'

import {
  Box,
  IconButton,
  Button,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { githubLink } from "@/app/lib/constants";
import FeaturesDialog from "./featuresDialog/featuresDialog";
import { useState } from "react";
import { styles } from "./styles";
import { FaGithub } from "react-icons/fa";

export default function AppBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFeaturesMenuOpen = () => setIsModalOpen(true);
  const handleMenuClose = () => setIsModalOpen(false);

  return (
    <>
      <Box padding="1rem" sx={{ ...styles.container }}>
        <Text alignSelf={"center"} sx={{ ...styles.text }}>
          TEXT EXTRACTOR
        </Text>
        <Box sx={{ ...styles.buttonWrapper }}>
          <Tooltip label="Project Features" hasArrow>
            <Button onClick={handleFeaturesMenuOpen}>Features</Button>
          </Tooltip>

          <Tooltip label="Github Code" hasArrow sx={{ ...styles.toolbar }}>
            <IconButton
              icon={<FaGithub size={"30px"} />}
              onClick={() => window.open(githubLink, "_blank")}
              aria-label="Github Code Link"
              sx={{ ...styles.iconButton }}
            />
          </Tooltip>
        </Box>
      </Box>

      {isModalOpen && (
        <FeaturesDialog
          isModalOpen={isModalOpen}
          handleMenuClose={handleMenuClose}
        />
      )}
    </>
  );
}
