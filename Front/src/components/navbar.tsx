import { AppBar, Button, Toolbar, Typography, Box, Tabs, Tab} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Container } from '@mui/system';
import {makeStyles} from '@mui/styles';
import {Outlet, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import '../GA.png';

const logo = require('../GA.png');

const useStyles = makeStyles((theme) => ({
    navbar: {
       background: 'linear-gradient(45deg, #000 30%, #000 90%)',       
    },
  
  }))

export function Navbar():JSX.Element{

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
                <Container fixed>
                    <Toolbar>
                        <img src={logo} />

                            <Tabs textColor='inherit' >
                                <Button variant={'text'}
                                        sx=
                                    {{
                                        textShadow: `${currentTab === 1 ? '4px 4px 15px #41B7FB, -4px -4px 15px #41B7FB' : 'none'}`,
                                        color: `${currentTab === 1 ? '#41B7FB' : '#ffffff'}`,
                                        fontFamily: 'Dela Gothic One',
                                        fontSize: '12px',

                                    }}
                                        onClick={() => handleTabClick('shop', 1)}>найти тиммейта</Button>
                                    <Button variant={'text'} sx=
                                        {{
                                            textShadow: `${currentTab === 2 ? '4px 4px 15px #41B7FB, -4px -4px 15px #41B7FB' : 'none'}`,
                                            color: `${currentTab === 2 ? '#41B7FB' : '#ffffff'}`,
                                            fontFamily: 'Dela Gothic One',
                                            fontSize: '12px',

                                        }}
                                    onClick={() => handleTabClick('main', 2)}>
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
                            </Tabs>
                        <Box sx={{position: 'absolute', right: '-150px'}}>
                            <Button color='inherit' variant='outlined' style={{marginRight: '1vw'}} onClick={() => buttonClick('login')} endIcon={<LoginIcon/>}>Войти</Button>
                            <Button color='inherit' variant='outlined' onClick={() => buttonClick('registration')}>Регистрация</Button>                            
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
                <Outlet />
        </>)
}