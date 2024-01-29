import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { IObject } from "@/app/lib/types";
import { dialogTitle, featuresContent } from "@/app/lib/constants";
import { styles } from "./styles";

const FeaturesDialog = ({ isModalOpen, handleMenuClose }: IObject) => {
  const { isOpen,onClose } = useDisclosure({
    isOpen: isModalOpen,
    onClose: handleMenuClose,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
      <ModalOverlay />
      <ModalContent backgroundColor="#0c112e">
        <ModalHeader sx={{ ...styles.title }}>{dialogTitle}</ModalHeader>
        <Box
          sx={{
           ...styles.divider
          }}
        >
          <Divider />
        </Box>
        <ModalCloseButton sx={{ ...styles.title }} />
        <ModalBody
          sx={{
           ...styles.modalBody
          }}
          alignContent="center"
        >
          {featuresContent.map((feature, index) => (
            <Box
              key={feature.title}
              mb={3}
              sx={{
                ...styles.features
              }}
            >
              <Text fontSize="lg" fontWeight="bold" sx={{ ...styles.title }}>
                {feature.title}
              </Text>
              {typeof feature.description === "string" ? (
                <Text mt={1} sx={{ ...styles.content }}>
                  {feature.description}
                </Text>
              ) : (
                feature.description.map((item, idx) => (
                  <Box key={idx} mt={1}>
                    <Text
                      fontSize="md"
                      fontWeight="bold"
                      sx={{ ...styles.heading }}
                    >
                      {item.heading}
                    </Text>
                    <Text mt={1} sx={{ ...styles.content }}>
                      {item.content}
                    </Text>
                  </Box>
                ))
              )}
            </Box>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeaturesDialog;
