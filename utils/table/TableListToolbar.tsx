import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import {Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment, Hidden, Button} from '@mui/material';
import React, { ChangeEvent, MouseEventHandler } from 'react';
import { Delete, Search } from '@mui/icons-material';

// ----------------------------------------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1, 0, 3),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    width: 320,
    boxShadow: theme.shadows[0],
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

// ----------------------------------------------------------------------

interface ITableListToolbar {
  numSelected: number,
  filterQuery: string,
  onFilterQuery: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onDeleteSelect: (event: React.MouseEvent<HTMLElement>) => void;
};


export default function TableListToolbar(
  {
    numSelected, 
    filterQuery, 
    onFilterQuery, 
    onDeleteSelect
  } : ITableListToolbar
  ) {
  return (
    <StyledRoot
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1" sx={{marginRight: 'auto'}}>
          {numSelected} selected
        </Typography>
      ) : (
        <StyledSearch
          value={filterQuery}
          onChange={onFilterQuery}
          placeholder="Search ..."
          startAdornment={
            <InputAdornment position="start">
              <Search/>
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <Button onClick={onDeleteSelect} variant="outlined" startIcon={<Delete />}>
            Delete
          </Button>
        </Tooltip>
      ) : (
          <Typography component="div">
            {""}
          </Typography>
      )}
    </StyledRoot>
  );
}
