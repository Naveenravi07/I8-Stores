import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useRouter } from 'next/router';
import { logoutUser } from '@/Store/Auth.Slice';
import { palette } from '@mui/system';

const navItems = [{ label: 'Shop', href: '/shop' }, { label: 'Cart', href: '/cart' }];

function DrawerAppBar() {
    let user = useSelector((state) => state.auth)
    const router = useRouter()
    let dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutAndLoginBtn = (user) => {
        if (user.loggedIn) {
            handleClose()
            dispatch(logoutUser())
        } else {
            handleClose()
            router.push('/auth/login')
        }
    }

    const handleProfileAndSignupBtn = (user) => {
        if (user.loggedIn) {
            handleClose()
            router.push('/profile')
        } else {
            handleClose()
            router.push('/auth/register')
        }
    }

    return (
        <Box >
            <CssBaseline />
            <AppBar component="nav" style={{ marginBottom: '10rem ',backgroundColor: '#9b0ec2'}}>
                <Toolbar>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        I8-Stores
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button onClick={() => router.push(item.href)} key={item} sx={{ color: '#fff' }}>
                                {item.label}
                            </Button>
                        ))}

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleLogoutAndLoginBtn(user)}>{user.loggedIn ? "Logout" : "Login"}</MenuItem>
                            <MenuItem onClick={() => handleProfileAndSignupBtn(user)}>{user.loggedIn ? "Profile" : "Signup"}</MenuItem>
                        </Menu>

                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
            </nav>
        </Box>
    );
}


export default DrawerAppBar;
