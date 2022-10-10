import { AppBar, Button, Toolbar, Typography, Box, Tabs, Tab} from '@mui/material';
import { Container } from '@mui/system';
import {makeStyles} from '@mui/styles';
import { LoginForm } from './login-form';

const useStyles = makeStyles((theme) => ({
    navbar: {
       background: 'linear-gradient(45deg, #000 30%, #000 90%)'    
    },
  
  }))

type MenuLink = {
    link: string,
    name: string
}

const menuLinks : MenuLink[] = [
    {link: '#', name: 'Главная'},
    {link: '#', name: 'Подбор тиммейтов'},
    {link: '#', name: 'Поддержка'},
]



export function Navbar():JSX.Element{
    const classes = useStyles();
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

                            <Tabs textColor='inherit' value={0} indicatorColor='secondary'>
                                {menuLinks.map((item) => 
                                    <Tab label={item.name} key={item.name} href={item.link}/>
                                )}
                            </Tabs>
                        <Box sx={{position: 'absolute', right: '-150px'}}>
                            <Button color='inherit' variant='outlined' style={{marginRight: '1vw'}}>Войти</Button>
                            <Button color='inherit' variant='outlined'>Регистрация</Button>                            
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
                <LoginForm/>
        </>)
}