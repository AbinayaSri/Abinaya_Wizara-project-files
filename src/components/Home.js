import React from 'react';
import {Link} from 'react-router-dom';
function Home()
{
  return (
    <center>
    <header style={headerStyle}>
    <Link style={linkStyle} to="/LoginForm">Sign In</Link> | <Link style={linkStyle} to="/Register1">Sign Up</Link>
    </header>
    </center>
  )
}
const headerStyle={
  textAlign:'center',
  padding:'5px',
  width:300
}
const linkStyle={
  textDecoration:'none',
  color:'black'
}
export default Home;
