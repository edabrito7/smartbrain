import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './SignIn.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SmartBrain App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default class SignIn extends React.Component  {
  


  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    }
  }



  

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }


  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }


  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.props.loadUser(data);
          this.props.onRouteChange('home');
        } else {
          window.alert("ERROR");
        }
      })
    
  }


  render () {
    const { onRouteChange } = this.props;
    
      return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className="form" >
          <TextField
            onChange={ this.onEmailChange }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={ this.onPasswordChange }
            variant="outlined"
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
          <Button
            onClick={ this.onSubmitSignIn }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit2"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item className="link2">
              <Link   margin="normal" variant="body2" onClick={() => onRouteChange('register')}>
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
  }

}

