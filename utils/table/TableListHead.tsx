import PropTypes from 'prop-types';
// @mui
import {Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel, SortDirection} from '@mui/material';
import {ChangeEvent} from 'react';
import {ITableHead} from '../interfaces/tables';
import {StyledTableCell} from "@/utils/table/Styled";

// ----------------------------------------------------------------------

const visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
};


interface TableListHeadType {
    order: 'asc' | 'desc',
    orderBy: string,
    rowCount: number,
    headLabel: Array<ITableHead>,
    numSelected: number,
    onRequestSort: Function,
    onSelectAllClick: ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void),
};

export default function TableListHead({
                                          order,
                                          orderBy,
                                          rowCount,
                                          headLabel,
                                          numSelected,
                                          onRequestSort,
                                          onSelectAllClick,
                                      }: TableListHeadType) {

    const createSortHandler = (property: any) => (event: any) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </StyledTableCell>
                {headLabel.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.alignRight ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            hideSortIcon={headCell.hideSortIcon}
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box
                                    sx={{...visuallyHidden}}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
