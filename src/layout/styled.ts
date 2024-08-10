import { Button, Paper, TableContainer, Typography } from '@mui/material';
import { Box } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

import { closedMixin, openedMixin } from './styleMixins';
import catImg from '../../public/media/hero.png';

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

export const StyledButton = styled(Button)({
    textTransform: 'none',
    backgroundColor: '#5C62F9',
});

export const StyledTableContainer = styled(TableContainer)({
    '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#F2F3F5',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#CCCED5',
        borderRadius: '8px',
    },
});

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
