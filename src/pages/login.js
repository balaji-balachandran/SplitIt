import React from 'react';
import logo from '../img/sendmon.png'
import eye from '../img/eye.png'

function showPassword() {
    var passwordList = document.getElementsByClassName('passwords');
    for(let i = 0;i<2;i++){
      var x = passwordList[i];
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
}


class BackgroundImages extends React.Component{
    render(){
        return (<div className = "banner">
            <img src={logo} alt="logo" id="login-logo-1"></img>
        </div>);
    }
}

class LoginBox extends React.Component{
    render(){
        return (<div className = "registration-box">
                    <p className = "titleText">Login</p>
                    <LoginForm />
                    <p className = "redirect">Don't have an account? <a href="/register" className ="switchPage">Register</a></p>
                </div>)
    }
}

class LoginForm extends React.Component{
    render(){
        return (<form href="/select" onSubmit={(event) =>{
            event.preventDefault();
            window.location.href = "/scan";
        }}>
                    <input type="text" name="Username" placeholder="Username" required></input>
                    <input type="password" className = "passwords" id = "confirmPassword" name="Password" placeholder="Password" required></input>
                    <img src={eye} id = "eyePicture" alt="eye" onMouseOver = {showPassword} onMouseOut = {showPassword}></img>
                
                    <p className = "error"></p>
                    <input type="submit" name="Register" value="SIGN IN"></input>
                </form>);
    }
}

const Login = () =>{
    return (<div><BackgroundImages /><LoginBox /></div>);
};

export default Login
