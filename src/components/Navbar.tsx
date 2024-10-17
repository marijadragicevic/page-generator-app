import React, { useState } from 'react';

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import { Box, List, Divider, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { NavbarItem } from '@homework-task/components/NavbarItem';
import { StyledNavbar, StyledNavbarHeader } from '@homework-task/layout/styled';

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
                    icon={<HomeIcon />}
                    title="Home"
                    onClick={() => navigate('/')}
                />
                <NavbarItem
                    open={open}
                    icon={<FormatListBulletedIcon />}
                    title="List"
                    onClick={() => navigate('/list-task')}
                />
                <NavbarItem
                    open={open}
                    icon={<AutoFixHighIcon />}
                    title="Form"
                    onClick={() => navigate('/form-task')}
                />
                <NavbarItem
                    open={open}
                    icon={<DashboardIcon />}
                    title="Page Generator"
                    onClick={() => navigate('/page-ui-task')}
                />
            </List>
        </StyledNavbar>
    );
};
