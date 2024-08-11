import * as React from 'react';

import { Button, Box, Paper, TableContainer, TableHead, TableRow, Typography, ButtonProps, TableContainerProps } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

import { closedMixin, openedMixin } from './styleMixins';
import noDataImg from '../../public/media/404-img.svg';
import catImg from '../../public/media/hero.png';

// Style interfaces
interface StyledButtonProps extends ButtonProps {
    href?: string;
    target?: string;
}

interface StyledTableContainerProps extends TableContainerProps {
    component?: React.ElementType;
    elevation: number;
}

export const StyledBackground = styled(Paper)(({ theme }) => ({
    flexGrow: 1,
    height: '100%',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(209,221,241)',
    backgroundImage: `url(${catImg})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `right`,
    backgroundSize: `contain 90%`,
    display: 'flex',
    justifyContent: `center`,
    alignItems: `center`,
    flexWrap: 'nowrap',
    overflow: `auto`,
    '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#5C62F9',
        borderRadius: '8px',
    },
}));

export const StyledBackgroundLight = styled(StyledBackground)(() => ({
    backgroundColor: '#fff',
}));

export const TextBackground = styled(Paper)(({ theme }) => ({
    height: 'auto',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginBottom: theme.spacing(2),
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.common.black,
    marginBottom: theme.spacing(2),
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginY: theme.spacing(4),
    color: theme.palette.common.black,
    lineHeight: theme.spacing(3),
}));

export const Accent = styled('span')(({ theme }) => ({
    color: '#5C62F9',
    fontWeight: 600,
    margin: theme.spacing(0.5),
}));

export const StyledButton = styled(Button)<StyledButtonProps>(() => ({
    textTransform: 'none',
    backgroundColor: '#5C62F9',
    '&:hover': {
        backgroundColor: '#4B52D4',
    },
}));

export const StyledTableContainer = styled(
    TableContainer
)<StyledTableContainerProps>(() => ({
    '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#F2F3F5',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#5C62F9',
        borderRadius: '8px',
    },
}));

export const StyledTableHeader = styled(TableHead)(() => ({
    '& th': {
        backgroundColor: 'rgba(209,221,241)',
        fontWeight: 700,
    },
}));

export const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(even)': {
        backgroundColor: 'rgb(232, 237, 242)',
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    width: '70%',
    height: '80%',
    overflow: 'auto',

    '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#F2F3F5',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#5C62F9',
        borderRadius: '8px',
    },
}));

// No data
export const NoDataBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6),
    minHeight: '400px',
    width: '80%',
    height: '80%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: '#5C62F9 !important',
    fontWeight: 'bold',
    margin: theme.spacing(0.5),
    backgroundImage: `url(${noDataImg})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `contain 50%`,
    backgroundColor: 'rgba(209,221,241,0.8)',
}));

// Navbar Styles

export const StyledNavbarHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export const StyledNavbar = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: 240,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    '& .MuiPaper-root': {
        display: 'flex',
        justifyContent: `center`,
        color: '#fff',
        backgroundColor: '#01082D',
        '& svg': {
            color: '#fff',
        },
    },

    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));
