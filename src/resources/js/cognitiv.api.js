
import { loginUser } from "../../actions";
import store from '../../store';
import $ from 'jquery';
import axios from 'axios';

export const api = {
    login: function(data){
        return axios({
            method: 'post', 
            url: `${process.env.COGNITIV_HOST}/authentication/login`,
            data: JSON.stringify({
                login: data.username,
                password: data.password
            }),
            headers: {
                contentType: "application/json",
                dataType: "json"
            }
        }).then((res) => {
            $('#cogn-loading-wrapper').hide();
            let response = {
                public_key: res.data.publicKey ? res.data.publicKey : false,
                private_key: res.data.privateKey ? res.data.privateKey : false,
                auth_token: res.data.authtoken ? res.data.authtoken : false,
                user_id: res.data.userId ? res.data.userId : false,
                user_type: res.data.userId ? res.data.userId : false,
                remember_me: JSON.parse(data.remember),
                expiration_date: global.cognitiv.core.addAuthExpiration(new Date(), 7)
            }
            store.dispatch(loginUser(response));
        })
        .catch((err) => {
            $('#cogn-loading-wrapper').hide();
            let response = {
                public_key: false,
                private_key: false,
                auth_token: false,
                user_id: false,
                user_type: false,
                remember_me: false,
                expiration_date: false
            }
            store.dispatch(loginUser(response));
        });
    },
    loginWithAuthToken: function(data){
        return axios({
            method: 'post', 
            url: `${process.env.COGNITIV_HOST}/authentication/loginwithauthtoken`,
            data: JSON.stringify({
                authtoken: localStorage.getItem('auth_token')
            }),
            headers: {
                contentType: "application/json",
                dataType: "json"
            }
        }).then((res) => {
            $('#cogn-loading-wrapper').hide();
            let response = {
                public_key: res.data.publicKey ? res.data.publicKey : false,
                private_key: res.data.privateKey ? res.data.privateKey : false,
                auth_token: res.data.authtoken ? res.data.authtoken : false,
                user_id: res.data.userId ? res.data.userId : false,
                user_type: res.data.userId ? res.data.userId : false,
                remember_me: JSON.parse(data.remember),
                expiration_date: global.cognitiv.core.addAuthExpiration(new Date(), 7)
            }
            store.dispatch(loginUser(response));
        })
        .catch((err) => {
            $('#cogn-loading-wrapper').hide();
            let response = {
                public_key: false,
                private_key: false,
                auth_token: false,
                user_id: false,
                user_type: false,
                remember_me: false,
                expiration_date: false
            }
            store.dispatch(loginUser(response));
        });
    },
};