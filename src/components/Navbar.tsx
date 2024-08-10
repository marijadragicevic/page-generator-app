import React, { useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { Box, List, Divider, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { StyledNavbar, StyledNavbarHeader } from '../layout/styled';
import { NavbarItem } from './NavbarItem';
import logo from '../../public/media/logo-white.svg';

export const Navbar = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleToggleDrawer = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <StyledNavbar variant="permanent" open={open}>
            <StyledNavbarHeader>
                {open && logo && (
                    <Box>
                        <img src={logo} alt="Logo" />
                    </Box>
                )}
                <IconButton onClick={handleToggleDrawer}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </StyledNavbarHeader>
            <Divider />
            <List>
                <NavbarItem
                    open={open}
                    icon={<LooksOneIcon />}
                    title="Task 1"
                    onClick={() => navigate('/')}
                />
                <NavbarItem
                    open={open}
                    icon={<LooksTwoIcon />}
                    title="Task 2"
                    onClick={() => navigate('/list-task')}
                />
                <NavbarItem
                    open={open}
                    icon={<Looks3Icon />}
                    title="Task 3"
                    onClick={() => navigate('/form-task')}
                />
                <NavbarItem
                    open={open}
                    icon={<Looks4Icon />}
                    title="Task 4"
                    onClick={() => navigate('/page-ui-task')}
                />
            </List>
        </StyledNavbar>
    );
};
