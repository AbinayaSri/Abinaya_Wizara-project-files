import React from 'react';
import {Paper,Grid,TextField,Button,withStyles} from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
      height:390,
      backgroundColor:'#EAEAEA'
    }
});

class Register extends React.Component{
  constructor(){
    super();
    this.state={
      fields:{},
      errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onBlur=this.onBlur.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  };
  onChange(e){
    let fields=this.state.fields;
    fields[e.target.name]=e.target.value;
    this.setState({
      fields
    });
  }
  onBlur(e){
    this.validation(e);
  }
  validation(e){
    let fields=this.state.fields;
    let errors={};
    let formIsValid=true;
    if(e.target.name=='username'){
      if(!fields['username']){
        formIsValid=false;
        errors["username"]="*Please enter your user name";
      }
      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }
    }
    if(e.target.name=='emailid'){
      if (!fields['emailid']) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }
      if (typeof fields["emailid"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }
    }
    if(e.target.name=='mobileno'){
      if (!fields['mobileno']) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }
      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }
    }
    /*if(e.target.name=='password'){
      if (!fields['password']) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }
      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }
    }*/
  this.setState({
    errors: errors
  });
  return formIsValid;
}
onSubmit(){
  alert("sucsess");
  console.log(this.state.fields);
}
  render(){
    const {classes}=this.props;
    return(
      <Paper className={classes.paper}>
        <p style={{fontSize:22}}>Sign Up </p>
        <div className={classes.margin}>
          <Grid container spacing={40} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
              name="username" label="User Name"
              type="text" autoFocus required
              onBlur={this.onBlur}
              onChange={this.onChange}
               />
              <div className="errorMsg" style={{color:'red'}}>{this.state.errors.username}</div>
            </Grid>
          </Grid>
          <Grid container spacing={16} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
              name="emailid" label="Email"
              type="email" required
              onBlur={this.onBlur}
              onChange={this.onChange}
             />
             <div className="errorMsg" style={{color:'red'}}>{this.state.errors.emailid}</div>
            </Grid>
          </Grid>
          <Grid container spacing={40} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
              name="mobileno" label="Phone Number"
              type="text" required
              onBlur={this.onBlur}
              onChange={this.onChange}
              />
              <div className="errorMsg" style={{color:'red'}}>{this.state.errors.mobileno}</div>
              </Grid>
            </Grid>
            {/*<Grid container spacing={40} alignItems="flex-end">
              <Grid item md={true} sm={true} xs={true}>
                <TextField
                name="password" label="Password"
                type="password" required
                onBlur={this.onBlur}
                onChange={this.onChange}
                />
                <div className="errorMsg" style={{color:'red'}}>{this.state.errors.password}</div>
              </Grid>
          </Grid>*/}
          <Grid container justify="center" style={{ marginTop: 50,marginLeft:70,marginBottom:25 }}>
            SignUp
            <Button variant="contained" color="primary"
            style={{ textTransform: "none",marginLeft:10 }}
            onClick={this.onSubmit}><ArrowForward/></Button>
          </Grid>
          <Link to="/LoginForm" style={{textDecoration:'none'}}>Already Existing User Login!</Link>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(Register);
