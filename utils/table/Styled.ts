import {styled, TableCell, tableCellClasses, TableRow} from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: 14,
    },
    [`&.${tableCellClasses.head} span.Mui-active`]: {
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.head} span.Mui-active .MuiTableSortLabel-icon`]: {
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.black,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));