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
import '../SignIn/SignIn.css';

const Copyright = () => {
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

const checkCredentials = (email) => {
    if (email.includes('@')) {
      return true;
    } else {
      return false
    }
  }
export default class Register extends React.Component  {
  
  constructor (props) {
    super (props)
      this.state = {
        registerName: '',
        registerLastName: '',
        registerEmail:'',
        registerPassword:'',

      }
  }

  onNameChange = (event) => {
    this.setState({registerName: event.target.value})
  }

  onLastNameChange = (event) => {
    this.setState({registerLastName: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({registerEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({registerPassword: event.target.value})
  }


  

  onSubmitRegister = () => {
    if (checkCredentials(this.state.registerEmail)) {
        fetch('https://rocky-cove-89609.herokuapp.com/register',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.state.registerName,
          lastname: this.state.registerLastName,
          email: this.state.registerEmail,
          password: this.state.registerPassword,
        })
      })
        .then(response => response.json())
        .then(user => {
          if (user.id) {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
          } else {
            window.alert("Empty Fills");
          }
        })
    } else {
      window.alert("INGRESE EMAIL CORRECTO");
    }
    
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
          Register
        </Typography>
        <div className="form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={ this.onNameChange }
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={ this.onLastNameChange }
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={ this.onEmailChange }
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={ this.onPasswordChange }
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} >
            
            </Grid>
          </Grid>
          <Button
            onClick={ this.onSubmitRegister }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item className="link2">
              <Link href="#" variant="body2" onClick={() => onRouteChange('signin')}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
  }

}