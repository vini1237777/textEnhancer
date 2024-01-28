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
import { rem } from "@/app/lib/functions";

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
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Divider sx={{ width: { base: "90%", lg: "100%" } }} />
        </Box>
        <ModalCloseButton sx={{ ...styles.title }} />
        <ModalBody
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { base: rem(10), sm: rem(50), md: rem(100),lg:rem(30) },
            flexWrap: "wrap",
            padding: rem(30),
          }}
        >
          {featuresContent.map((feature, index) => (
            <Box
              key={feature.title}
              mb={3}
              sx={{
                gap: rem(10),
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: { base: "100%",sm:'40%', md: "30%", lg: "45%" },
                height: "50%",
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
