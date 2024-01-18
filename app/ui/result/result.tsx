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
    <TableContainer sx={{ ...styles.container }} data-testid='data-table'>
      <Table variant="simple">
        <Thead sx={{ ...styles.tableWrapper }}>
          <Tr sx={{ ...styles.divider }}>
            <Th color={"white"}>Header</Th>
            <Th color={"white"}>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          {headers.map((header: string, index: number) => (
            <Tr key={header}>
              <Td sx={{ ...styles.divider }}>{header}</Td>
              <Td>{values[index]}</Td>{" "}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Result;
