
import * as React from 'react';
import {
    CAvatar,
  } from '@coreui/react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ReactImg from '../../../../src/assets/images/sachivalaya.jpg'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";

import avatar8 from './../../../assets/images/avatars/R&BD.jpg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      
    </Typography>
  );
}

const theme = createTheme();

export default function newLogin    (props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}

          sx={{
            backgroundImage: `url(${ReactImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            height:'80vh',
            backgroundPosition: 'center',
          }}
          
        />
        
        <Grid item xs={6} sm={8} md={4} component={Paper} elevation={6} sx={{height:'80vh'}} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CAvatar src={avatar8} size="xl"  />
            <Typography component="h1" variant="h5">
              Dashboard Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="User Login"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link href="#" variant="body2">   
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => props.history.push("/")}
              >
                Login 
              </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
{/* 
        <Grid item xs={6} sm={8} md={3} component={Paper} elevation={6} sx={{height:'10vh'}} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href='https://sso.gujarat.gov.in/SSO.aspx?Rurl=http://rnbwms.guj.nic.in/main/index.php'>
            <Typography>
              Work Monitoring System
            </Typography>
            </Link>
              
            
          </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={3} component={Paper} elevation={6} sx={{height:'10vh'}} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href='\'>
            <Typography>
              IFMS
            </Typography>
            </Link>
              
            
          </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={3} component={Paper} elevation={6} sx={{height:'10vh'}} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href='https://margsahayak.gujarat.gov.in/#/Login'>
            <Typography>
              GujMarg
            </Typography>
            </Link>
              
            
          </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={3} component={Paper} elevation={6} sx={{height:'10vh'}} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href='\'>
            <Typography>
              IWDMS
            </Typography>
            </Link>
              
            
          </Box>
          </Grid> */}
          
      </Grid>  
    </ThemeProvider>
  );
}