import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '44px',
    padding: '0 25px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    background: '#000',
    color: '#fff',
    transform: 'none',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
    transition: 'background .3s, border-color .3s, color .3s',
    '&:hover': {
      backgroundColor: '#333',
      color: '#fff',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function CustomBtn(props) {
  const handleClick = () => {
    // Handle click event here
    console.log('Button clicked!');
    // You can call props.onClick() to invoke the onClick event handler passed as a prop
    if (props.onClick) {
      props.onClick();
    }
  };
  return <StyledButton variant="contained" onClick={handleClick}>{props.txt}</StyledButton>;
}

export default CustomBtn;
