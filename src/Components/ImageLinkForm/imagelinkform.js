import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { compose, spacing, palette } from '@material-ui/system';
import './imagelinkform.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));


const Box = styled('div')(compose(spacing, palette))


const ImageLinkForm = () => {
	const classes = useStyles();
	return (
		<div  className="container">
			<Box className="box "color="black" bgcolor="None"  p={1}>
				<div>
					<p>{'Give it try'}</p>
				</div>
				<div>
					<form className={classes.root} noValidate autoComplete="off">
	  					<TextField id="outlined-basic"  variant="outlined" label="Ingrese Link aqui"/>
					</form>
					<Button variant="contained" color="primary">
	      				Try it!
	    			</Button>
				</div>
			</Box>
		</div>
		)
}


export default ImageLinkForm;



