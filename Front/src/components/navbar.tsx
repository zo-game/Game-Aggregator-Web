import { AppBar, Button, Toolbar, Typography, Box, Tabs, Tab} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Container } from '@mui/system';
import {makeStyles} from '@mui/styles';
import {Outlet, useNavigate} from 'react-router-dom';
import {useState} from 'react';


const useStyles = makeStyles((theme) => ({
    navbar: {
       background: 'linear-gradient(45deg, #000 30%, #000 90%)'    
    },
  
  }))

type MenuLink = {
    link: string,
    name: string,
    num: number
}

const menuLinks : MenuLink[] = [
    {link: '/', name: 'Главная', num: 0},
    {link: '/', name: 'Подбор тиммейтов', num: 1},
    {link: '/', name: 'Поддержка', num: 2},
]



export function Navbar():JSX.Element{
    const classes = useStyles();
    const navigate = useNavigate();
    const [currentTab, changeTab] = useState<number | boolean>(0);
    
    const handleTabClick = (tab: MenuLink) => {
        navigate(tab.link);
        changeTab(tab.num);
    }

    const buttonClick = (href: string) => {
        navigate(href);
        changeTab(false);
    }
    return(<>
            <AppBar className={classes.navbar}>
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
                                {menuLinks.map((item) => 
                                    <Tab label={item.name} key={item.name}  onClick={() => handleTabClick(item)}/>
                                )}
                            </Tabs>
                        <Box sx={{position: 'absolute', right: '-150px'}}>
                            <Button color='inherit' variant='outlined' style={{marginRight: '1vw'}} onClick={() => buttonClick('login')} endIcon={<LoginIcon/>}>Войти</Button>
                            <Button color='inherit' variant='outlined' onClick={() => buttonClick('registration')}>Регистрация</Button>                            
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
                <Outlet />
        </>)
}