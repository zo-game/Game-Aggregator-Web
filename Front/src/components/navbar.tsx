import { AppBar, Button, Toolbar, Typography, Box, Tabs, Tab} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Container } from '@mui/system';
import {makeStyles} from '@mui/styles';
import {Outlet, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const useStyles = makeStyles((theme) => ({
    navbar: {
       background: 'linear-gradient(45deg, #000 30%, #000 90%)',       
    },
  
  }))

// type MenuLink = {
//     link: string,
//     name: string,
//     num: number,
//     icon: JSX.Element
// }

// const menuLinks : MenuLink[] = [
//     {link: 'main', name: 'Главная', num: 0, icon: <HelpIcon/>},
//     {link: '/', name: 'Подбор тиммейтов', num: 1, icon: <HelpIcon/>},
//     {link: '/', name: 'Поддержка', num: 2, icon: <HelpIcon/>},
// ]



export function Navbar():JSX.Element{

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0});
    const classes = useStyles();
    const navigate = useNavigate();
    const [currentTab, changeTab] = useState<number | boolean>(0);
    
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
                        <Typography variant='h5' 
                        style={{
                            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            marginRight: '5%'
                            }}>Game Aggregator</Typography>

                            <Tabs textColor='inherit' value={currentTab} indicatorColor='secondary'>
                                    <Tab icon={<HomeIcon color={currentTab !==0 ? 'inherit' : "secondary"}/>}
                                         iconPosition={'end'} label={"Главная"} onClick={() => handleTabClick('main', 0)}/>
                                    <Tab label={"Поддержка"}   onClick={() => handleTabClick('/', 1)}
                                         icon={<HelpIcon color={currentTab !==1 ? 'inherit' : "secondary"}/>}
                                         iconPosition={"end"}/>
                                    <Tab icon={<LocalOfferIcon color={currentTab !==2 ? 'inherit' : "secondary"}/>}
                                         iconPosition={"end"} label={"Магазин игр"}   onClick={() => handleTabClick('/', 2)}/>

                                {/*{menuLinks.map((item) => */}
                                {/*)}*/}
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