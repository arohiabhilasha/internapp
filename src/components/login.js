import axios from 'axios';
import React from 'react';

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
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/loginuser/', {
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
                else {return res.data[0];}
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
    login = () => {
        /**
         * Login the user using username and password
         */
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/loginuser/', {
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
                console.log(res);
                return(res)}
            }
        ).catch(err => {console.log(err);})
    }
}

export default UserManager;