import axios from 'axios';
import React from 'react';
import reactDom from "react-dom";

class UserManager{
    constructor(){
        
        this.state = {
            isAuthenticated: false,
            error: null,
            token: null,
            username: '',
            password: '',
            codename: null,
            profile: null,
        }

        this.config = {
            
        }
    }

    getProfile = (token,codename) => {
        /**
         * Get the profile of the user using the token
         */
        console.log(token);
        console.log(codename);
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/getprofile/', {
            Token: token,
            CodeName: codename,
            IpAddress: "127.0.0.1", //TODO: get the ip address
        }, {headers: {
            "Content-Type": "application/json"
        }}).then(res => {
            if(res.status === 200){
                if (token === this.state.token){
                    this.profile = res.data[0];
                }
                console.log(res.data);
                //else {return res.data[0];}
            }
        })
    }
    register = () => {
        /**
         * Login the user using username and password
         */
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/registeruser/', {
            EmailId: this.state.username,
            Password: this.state.password,
            IpAddress: "127.0.0.1", //TODO: Get the IP address of the user
        },{headers: {
            "Content-Type": "application/json"
        }})
        .then(res => {
            if(res.status==201){
                this.state.token = res.data.Token;
                this.state.isAuthenticated = true;
                this.state.codename = res.data.CodeName;
                this.getProfile(this.state.token,this.state.codename);
                return {token: res.data.Token, codename: res.data.CodeName};
            }
            else{
                alert(res);
                return(false)}
            }
        )
    }
    login = (email,password)=>{
        /**
         * Login the user using username and password
         */

         return new Promise(() => {
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/loginuser/', {
            EmailId: email,
            Password: password,
            IpAddress: "127.0.0.1", //TODO: Get the IP address of the user
        },{headers: {
            "Content-Type": "application/json"
        }})
        .then(res => {
                this.state.token = res.data[0]['Token'];
                this.state.isAuthenticated = true;
                this.state.codename = res.data[0]['CodeName'];
                //this.getProfile(res.data[0].Token,res.data[0].CodeName);
                console.log('success');
                let obj = {token: res.data[0]['Token'], codename: res.data[0]['CodeName']};
                const elemx = (
                    <div className='profile'>
                      <h1>Welcome!</h1>
                      <div className='body1'>
                      <br></br>
                      <h2>Your email: {email}</h2>
                      <br></br>
                      <h2>Your username: {obj.codename}</h2>
                      </div>
                    </div>
                  );
                  reactDom.render(elemx, document.getElementById('root'));
                return {token: res.data[0]['Token'], codename: res.data[0]['CodeName']};
            
            }
        ).catch(err => {console.log(err);return(false);})})
    }
}

export default UserManager;