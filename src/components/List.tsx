import React, { useState } from 'react';

import styled from '@emotion/styled';
import { StyledTableContainer } from '@homework-task/layout/styled';
import { ListProps } from '@homework-task/types/interfaces';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
} from '@mui/material';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableHeader = styled(TableHead)(({ theme }) => ({
    '& th': {
        backgroundColor: 'rgba(209,221,241)',
        fontWeight: 700,
    },
}));

const StyleTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: 'rgb(232, 237, 242)',
    },
    '& td': {},
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const List = ({ colDefs, getList }: ListProps) => {
    const [rowData, setRowData] = useState([]);

    const getRowData = async () => {
        try {
            const response = await getList();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StyledTableContainer
            sx={{ flex: '0 0 80%', height: 'auto', maxHeight: '80%' }}
            component={Paper}
            elevation={5}
        >
            <Table stickyHeader={true} aria-label="sticky table">
                <TableHeader>
                    <TableRow>
                        {colDefs?.length > 0 &&
                            colDefs?.map((colDef, index) => {
                                return (
                                    <TableCell
                                        key={index}
                                        align={colDef?.align || 'left'}
                                    >
                                        {colDef?.headerName ||
                                            colDef?.fieldName}
                                    </TableCell>
                                );
                            })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rowData?.length > 0 &&
                        rowData?.map((row, index) => {
                            return (
                                <StyleTableRow key={index}>
                                    {colDefs?.map((colDef) => {
                                        if (!colDef?.fieldName) {
                                            return;
                                        }

                                        return (
                                            <TableCell>
                                                <Tooltip
                                                    title={
                                                        row[colDef?.fieldName]
                                                    }
                                                    placement="right"
                                                >
                                                    {row[colDef?.fieldName]}
                                                </Tooltip>
                                            </TableCell>
                                        );
                                    })}
                                </StyleTableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};
