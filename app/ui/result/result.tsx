import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { styles } from "./styles";


const Result = ({data={}}) => {
  
  const headers: string[] = Object.keys(data || {}) || [];
  const values: string[] = Object.values(data || {}) || [];

 
  return (
    <TableContainer sx={{ ...styles.container }} data-testid="data-table">
      <Table variant="simple" ml={0} size="md" mr={0}>
        <Thead sx={{ ...styles.tableWrapper }}>
          <Tr sx={{ ...styles.text }}>
            <Th color={"white"}>Header</Th>
            <Th color={"white"}>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          {headers.map((header: string, index: number) => (
            <Tr key={header}>
              <Td sx={{ ...styles.text }}>{header}</Td>
              <Td sx={{ ...styles.text }}>{values[index]}</Td>{" "}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Result;
