'use client'
import React, {SetStateAction, useState} from "react";
import PropTypes from "prop-types";
import TableListToolbar from "@/utils/table/TableListToolbar";
import {
    Box,
    Card,
    Checkbox, Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer, TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import PROJECT_CONFIG from "@/config/config";
import {applySortFilter, getComparator} from "@/utils/table/tableFunctions";
import Scrollbar from "@/app/(DashboardLayout)/components/scrollbar";
import TableListHead from "@/utils/table/TableListHead";
import {ITableHead} from "@/utils/interfaces/tables";
import {formatDate} from "@/utils/datetime/formatTime";
import {StyledTableCell, StyledTableRow} from "@/utils/table/Styled";


const TABLE_HEAD : Array<ITableHead> = [
    {id: 'name', label: 'Name', alignRight: false, hideSortIcon: false, isSticky: false},
    {id: 'description', label: 'Description', alignRight: false, hideSortIcon: false, isSticky: false},
    {id: 'user_id', label: 'User', alignRight: false, hideSortIcon: false, isSticky: false},
    {id: 'created_at', label: 'Created At', alignRight: false, hideSortIcon: false, isSticky: false},
    {id: 'updated_at', label: 'Update At', alignRight: false, hideSortIcon: false, isSticky: false},
    {id: 'actions', label: 'Actions', alignRight: false, hideSortIcon: true, isSticky: true},
];

interface IBusinessDatatable {
    dataTable: Array<any>
}

export default function BusinessDatatable({dataTable}: IBusinessDatatable) {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState<'asc'| 'desc'>('asc');
    const [selected, setSelected] = useState<number[]>([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterQuery, setFilterQuery] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(PROJECT_CONFIG.TABLE_CONFIG.ROW_PER_PAGE);

    const handleRequestSort = (event: any, property: SetStateAction<string>) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = dataTable.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: Array<number> = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: (React.MouseEvent<HTMLButtonElement> | null), newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0);
        setFilterQuery(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataTable.length) : 0;

    const filteredDataTable = applySortFilter({
        array: dataTable,
        comparator: getComparator({_order: order, _orderBy: orderBy}),
        query: filterQuery
    });

    const isNotFound = !filteredDataTable.length && !!filterQuery;

    const handleDeleteSelected = () => {
        // setRowsForDelete(selected)
        // setOpenConfirmDelete(true)
    }

    return (
        <Card elevation={12}>
                    <TableListToolbar
                        numSelected={selected.length}
                        filterQuery={filterQuery}
                        onFilterQuery={handleFilterByName}
                        onDeleteSelect={handleDeleteSelected}
                    />

                    <Scrollbar>
                        <TableContainer sx={{minWidth: 800}}>
                            <Table>
                                <TableListHead
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={filteredDataTable.length}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />
                                <TableBody>
                                    {filteredDataTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
                                        const {id, name, description} = row;
                                        const selectedRow = selected.indexOf(id) !== -1;
                                        return (
                                            <StyledTableRow hover key={id} tabIndex={-1} role="checkbox"
                                                      selected={selectedRow}>
                                                <StyledTableCell  padding="checkbox">
                                                    <Checkbox checked={selectedRow}
                                                              onChange={(event) => handleClick(event, id)}/>
                                                </StyledTableCell>

                                                <StyledTableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Box component="img" alt={name} src='/assets/images/covers/cover_5.jpg'
                                                             sx={{width: 48, height: 48, borderRadius: 1.5, flexShrink: 0}}/>
                                                        <Typography variant="subtitle2" noWrap>
                                                            {name}
                                                        </Typography>
                                                    </Stack>
                                                </StyledTableCell>

                                                <StyledTableCell align="left">{description}</StyledTableCell>

                                                <StyledTableCell align="left">{formatDate(row.created_at)}</StyledTableCell>

                                                <StyledTableCell align="left">{formatDate(row.updated_at)}</StyledTableCell>

                                                <StyledTableCell align="center">

                                                </StyledTableCell>
                                            </StyledTableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <StyledTableRow style={{height: 53 * emptyRows}}>
                                            <StyledTableCell colSpan={6}/>
                                        </StyledTableRow>
                                    )}
                                </TableBody>

                                {isNotFound && (
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell align="center" colSpan={6} sx={{py: 3}}>
                                                <Paper
                                                    sx={{
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    <Typography variant="h6" paragraph>
                                                        Not found
                                                    </Typography>

                                                    <Typography variant="body2">
                                                        No results found for &nbsp;
                                                        <strong>&quot;{filterQuery}&quot;</strong>.
                                                        <br/> Try checking for typos or using complete words.
                                                    </Typography>
                                                </Paper>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                )}
                            </Table>
                        </TableContainer>
                    </Scrollbar>

                    <TablePagination
                        rowsPerPageOptions={PROJECT_CONFIG.TABLE_CONFIG.ROWS_PER_PAGE_OPTIONS}
                        component="div"
                        count={filteredDataTable.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
    )
}

BusinessDatatable.propTypes = {
    dataTable: PropTypes.array,
};