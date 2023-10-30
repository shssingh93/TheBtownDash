import React, { useState } from 'react';
import CustomBtn from './CustomBtn';
import logo from "../../images/logo.png";
import logoMobile from '../../images/logo.png';
import { Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.5rem;
  z-index: 1;
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = styled(Link)`
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: none;
  &:hover {
    background-color: #f5f5f5;
  }
`;


const styles = makeStyles({
  bar: {
    paddingTop: '1.15rem',
    paddingBottom: '1.15rem',
    backgroundColor: 'white',
    width: '100%',
  },
  logo: {
    width: '100%',
  },
  logoMobile: {
    width: '100%',
    display: 'none',
  },
  menuItem: {
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    cursor: 'pointer',
    flexGrow: 1,
    color: '#000',
    fontWeight: '500',
    transition: 'color 0.3s, text-shadow 0.3s',
    '&:hover': {
      color: '#4f25c8',
      textShadow: '0px 0px 5px rgba(79, 37, 200, 0.5)',
    },
  },
});

function NavBar() {
  const classes = styles();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Toolbar position="sticky" className={classes.bar}>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="Logo" />
        <img src={logoMobile} className={classes.logoMobile} alt="Logo Mobile" />
      </Link>
      <StyledLink to="/admin">
        <Typography variant="h6" className={classes.menuItem}>
          Admin Home
        </Typography>
      </StyledLink>
        <Typography variant="h6" className={classes.menuItem}>
          <a href="/delivery-details" style={{textDecoration: 'none', color: "#000"}}>Deliveries</a>
        </Typography>
      <StyledLink to="/admin/driver-registration">
        <Typography variant="h6" className={classes.menuItem}>
          Register New Driver
        </Typography>
      </StyledLink>

      
      <Typography variant="h6" className={classes.menuItem}>
        <StyledLink to="/admin/edit-services">
        Add/Remove Services
        </StyledLink>
      </Typography>
      
      
      
      <StyledLink to="/contact">
        <Typography variant="h6" className={classes.menuItem}>
          Contact Us
        </Typography>
      </StyledLink>

      <CustomBtn txt="WELCOME" onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
      {isDropdownOpen && (
        <DropdownContainer>
          <DropdownList>
            <DropdownItem to="/">Logout</DropdownItem>
          </DropdownList>
        </DropdownContainer>
      )}
    </Toolbar>
  );
}

export default NavBar;
