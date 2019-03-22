import React from 'react';
import {Paper,Grid,TextField,Button,withStyles} from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    paper: {
      marginLeft: theme.spacing.unit * 65,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      align:'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
      width:300,
      height:350,
      backgroundColor:'#EAEAEA'
    }
});
class LoginTab extends React.Component{
  state={
    email:'',
    password:'',
    eflag:false,
    pflag:false,
    pinflag:false,
    disable:false,
    pin:'',
    flag:false
  };
  onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  handleBlur=(e)=>{
    if(e.target.name==='email'){
      if(e.target.value!=='abc')
      this.setState({eflag:true});
      else this.setState({eflag:false});
    }
    if(e.target.name==='password'){
      if(e.target.value!=='pass')
      this.setState({pflag:true});
      else this.setState({pflag:false});
    }
    if(e.target.name==='pin'){
      if(e.target.value!=='18')
      this.setState({pinflag:true});
      else this.setState({pinflag:false});
    }
  }
  onSubmit=()=>{
    if(this.state.email==='abc' && this.state.password==='pass' && this.state.pin==='18'){
      this.setState({flag:true});}
    else this.setState({flag:false});

  }
  render(){
    const {classes}=this.props;
    return(
      <Paper className={classes.paper}>
        <div className={classes.margin}>
          <Grid container spacing={16} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField value={this.state.email}
              name="email" label="Username"
              type="email" autoFocus required
              onBlur={this.handleBlur}
              onChange={this.onChange}
              error={this.state.eflag}
              helperText={this.state.eflag===true?'Invalid username':''}/>
            </Grid>
          </Grid>
          <Grid container spacing={40} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField value={this.state.password}
              name="password" label="Password"
              type="password" required
              onBlur={this.handleBlur}
              onChange={this.onChange}
              error={this.state.pflag}
              helperText={this.state.pflag===true?'Invalid password':''}/>
            </Grid>
          </Grid>
          <Grid container spacing={40} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField value={this.state.pin}
              name="pin" label="Login using pin"
              type="password" required
              placeholder="Enter 10 digit pin"
              onBlur={this.handleBlur}
              onChange={this.onChange}
              error={this.state.pinflag}
              helperText={this.state.pinflag===true?'Invalid pin':''}/>
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: 50,marginLeft:70 }}>
            SignIn
            <Button variant="contained" color="primary"
            style={{ textTransform: "none",marginLeft:10,marginBottom:25 }}
            onClick={this.onSubmit} disable={this.state.flag}><Link to="/Table"><ArrowForward/></Link></Button>
          </Grid>
          <Link to="/Register1" style={{fontSize:14,textDecoration:'none'}}>Don't have an account ? Create</Link>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(LoginTab);
