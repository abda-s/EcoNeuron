import React from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../assestes/logo.png';

export default function NavBar() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const commonRoutes = [
        { label: "Home", path: '/' },
        { label: "mariam report", path: '/sensor-dashboard' },
        { label: "Contact", path: '/contact' },
    ];

    const drawerContent = (
        <List>
            {commonRoutes.map(({ label, path }) => (
                <ListItem button key={label} onClick={() => navigate(path)}>
                    <ListItemText primary={label} />
                </ListItem>
            ))}
        </List>
    );

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {isMobile && (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,justifyContentL: "center",alignItems: "center",display: "flex" }}>
                    <img src={logo} alt="logo" style={{ height: "35px", width: "auto", marginRight: "10px" }} />
                    EcoNeurn

                </Typography>
                {!isMobile && (
                    <>
                        {commonRoutes.map(({ label, path }) => (
                            <Button key={label} onClick={() => navigate(path)} color="inherit">
                                {label}
                            </Button>
                        ))}
                    </>
                )}
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {drawerContent}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}
