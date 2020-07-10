import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { compose, spacing, palette } from '@material-ui/system';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import './imagelinkform.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15em',
    },
  },
}));



const Box = styled('div')(compose(spacing, palette));

const ImageLinkForm = ( { onInputChange, onSubmit, onErase, inputdata } ) => {
	const classes = useStyles();
	return (
		<div  className="container">
			<Box className="box "color="black" bgcolor="None"  p={1}>
				<div>
					<p>{`Copy & Paste a picture's link to get a box around the face`}</p>
				</div>
				<div>
					<form className={classes.root} noValidate autoComplete="off">
	  					<TextField id="outlined-basic"  variant="outlined" label="Enter Link here" className="linkform"  value={ inputdata }
	  					onChange={onInputChange}/>
					</form>
					<div>
		    			<Button
		    				onClick={ onSubmit }
        					variant="contained"
        					color="primary"
        					className={classes.button}
        					endIcon={<SendIcon />}
      							>
        					Send
      					</Button>
		    			<Button
		    				onClick={ onErase }
		    				id="erase"
        					variant="contained"
        					color="secondary"
        					className={classes.button}
        					startIcon={<DeleteIcon />}
      						>
        					Delete
      					</Button>
	    			</div>
				</div>
			</Box>
		</div>
		)
}


export default ImageLinkForm;



