import React, { useEffect } from 'react';

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Tooltip,
    Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { Loading } from '@homework-task/components/Loading';
import { useAsyncService } from '@homework-task/hooks/useAsyncService';
import {
    NoDataBox,
    StyledTableContainer,
    StyledTableHeader,
    StyledTableRow,
} from '@homework-task/layout/styled';
import { ListProps } from '@homework-task/types/interfaces';

export const List = <T extends Record<string, string | number>>({
    colDefs,
    getList,
}: ListProps<T>) => {
    // Custom hook for fetching data
    const {
        isLoading,
        isError,
        data: rowData,
        fetchData,
    } = useAsyncService<T[]>();

    useEffect(() => {
        void fetchData(getList);
    }, [fetchData, getList]);

    return (
        <>
            {isLoading && <Loading />}
            {rowData && rowData.length > 0 ? (
                <StyledTableContainer
                    sx={{ flex: '0 0 80%', height: 'auto', maxHeight: '80%' }}
                    component={Paper}
                    elevation={5}
                >
                    <Table stickyHeader={true} aria-label="sticky table">
                        <StyledTableHeader>
                            <TableRow>
                                {colDefs?.length > 0 &&
                                    colDefs.map((colDef) => (
                                        <TableCell
                                            key={uuidv4()}
                                            align={colDef?.align || 'left'}
                                        >
                                            {colDef?.headerName ||
                                                colDef?.fieldName}
                                        </TableCell>
                                    ))}
                            </TableRow>
                        </StyledTableHeader>
                        <TableBody>
                            {rowData.map((row) => (
                                <StyledTableRow key={uuidv4()}>
                                    {colDefs?.map((colDef) => {
                                        if (!colDef?.fieldName) {
                                            return null;
                                        }
                                        const cellValue =
                                            row[colDef.fieldName as keyof T];
                                        return (
                                            <TableCell key={uuidv4()}>
                                                <Tooltip
                                                    title={String(cellValue)}
                                                    placement="right"
                                                >
                                                    <span>
                                                        {String(cellValue)}
                                                    </span>
                                                </Tooltip>
                                            </TableCell>
                                        );
                                    })}
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            ) : (
                (!isLoading || isError) && (
                    <NoDataBox elevation={5}>
                        <Typography variant="h4">No results</Typography>
                    </NoDataBox>
                )
            )}
        </>
    );
};
