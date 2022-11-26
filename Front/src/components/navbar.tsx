import { AppBar, Button, Toolbar, Typography, Box, Tabs, Tab} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Container } from '@mui/system';
import {makeStyles} from '@mui/styles';
import {Outlet, useNavigate} from 'react-router-dom';
import React, {MouseEvent, useState} from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import '../GA.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Menu} from "@mui/material";
import {MenuItem} from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const logo = require('../GA.png');

const useStyles = makeStyles((theme) => ({
    navbar: {
       background: 'linear-gradient(180deg, #000 98.8%, #D9D9D9 100% 99%)'


    },
  
  }))

export function Navbar():JSX.Element{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = () => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: MouseEvent<HTMLLIElement>) => {
        setAnchorEl(null);
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0});
    const classes = useStyles();
    const navigate = useNavigate();
    const [currentTab, changeTab] = useState<number | boolean>(2);
    
    const handleTabClick = (link: string, num: number) => {
        navigate(link);
        changeTab(num);
    }

    const buttonClick = (href: string) => {
        navigate(href);
        changeTab(false);
    }

    return(<>
        <Slide in={!trigger} >
            <AppBar className={classes.navbar} >
                <Container fixed >
                    <Toolbar sx={{borderBottom: 'white'}}>
                        <img src={logo} />
                            <Tabs
                                sx={{marginLeft: '20%', width: '100%',marginTop: '1%'}}
                            >
                                <Button variant={'text'}
                                        sx=
                                    {{
                                        textShadow: `${currentTab === 1 ? '4px 4px 15px #41B7FB, -4px -4px 15px #41B7FB' : 'none'}`,
                                        color: `${currentTab === 1 ? '#41B7FB' : '#ffffff'}`,
                                        fontFamily: 'Dela Gothic One',
                                        fontSize: '12px',

                                    }}
                                        onClick={() => handleTabClick('main', 1)}>найти тиммейта</Button>
                                    <Button variant={'text'} sx=
                                        {{
                                            textShadow: `${currentTab === 2 ? '4px 4px 15px #41B7FB, -4px -4px 15px #41B7FB' : 'none'}`,
                                            color: `${currentTab === 2 ? '#41B7FB' : '#ffffff'}`,
                                            fontFamily: 'Dela Gothic One',
                                            fontSize: '12px',

                                        }}
                                    onClick={() => handleTabClick('shop', 2)}>
                                        игры</Button>
                                <Button variant={'text'} sx=
                                    {{
                                        textShadow: `${currentTab === 3 ? '4px 4px 15px #41B7FB, -4px -4px 15px #41B7FB' : 'none'}`,
                                        color: `${currentTab === 3 ? '#41B7FB' : '#ffffff'}`,
                                        fontFamily: 'Dela Gothic One',
                                        fontSize: '12px',

                                    }}
                                        onClick={() => handleTabClick('shop', 3)}>блоги</Button>
                                <Button variant={'text'} sx=
                                    {{
                                        textShadow: `${currentTab === 4 ? '4px 4px 15px #41B7FB, -4px -4px 15px #41B7FB' : 'none'}`,
                                        color: `${currentTab === 4 ? '#41B7FB' : '#ffffff'}`,
                                        fontFamily: 'Dela Gothic One',
                                        fontSize: '12px',

                                    }}
                                        onClick={() => handleTabClick('shop', 4)}>конфигурация</Button>

                                <Button variant={'contained'}
                                        sx={{
                                            backgroundColor: '#41B7FB',
                                            fontFamily: 'Dela Gothic One',
                                            fontSize: '10px',
                                            marginLeft: '5%',
                                            padding: '1% 7%',
                                            boxShadow: '0px 0px 15px 0 #41B7FB',
                                        }}>Присоединиться</Button>
                            </Tabs>
                        <Box>
                            <Box sx={{display: 'grid', gridTemplateColumns: '50% 50%', gap: '7px',  }}>
                                <p onClick={handleClick}
                                   className={'language-btn'}
                                   style={{
                                       display: 'grid',
                                       fontFamily: 'Dela Gothic One',
                                       gridTemplateColumns: '60% 40%',
                                       marginLeft: '40%',
                                       gap: '10px'

                                   }}>
                                    <div >RU</div> <KeyboardArrowDownRoundedIcon sx={{}}/>
                                </p>
                                <div style={{display: 'grid',
                                    gridTemplateColumns: '40% 60%',
                                    marginLeft: '20%'
                                    }}>
                                    <div style={{
                                        background: 'white',
                                        width: '1%',
                                        height: '50%',
                                        padding:'0 2px',
                                        margin: '70% 0 0 0',
                                        borderRadius: '5px',
                                        position: 'relative',
                                        left: '5px'
                                    }}></div>

                                    <AccountCircleOutlinedIcon
                                        fontSize='large'
                                        className='profile-btn'
                                        sx={{ marginTop: '30%',
                                            padding: '0'
                                   }}
                                    onClick={() => buttonClick('login')}
                                    />
                                </div>
                            </Box>
                            <Menu
                                sx={{
                                    position: 'absolute',
                                    left: '79%',
                                    top: '-75%'
                                }}
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>English</MenuItem>
                                <MenuItem onClick={handleClose}>Украинский</MenuItem>
                                <MenuItem onClick={handleClose}>Russian</MenuItem>
                            </Menu>

                            {/*<Button color='inherit' variant='outlined' style={{marginRight: '1vw'}} onClick={() => buttonClick('login')} endIcon={<LoginIcon/>}>Войти</Button>*/}
                            {/*<Button color='inherit' variant='outlined' onClick={() => buttonClick('registration')}>Регистрация</Button>                            */}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
                <Outlet />
        </>)
}