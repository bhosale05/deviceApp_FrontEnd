<template>
    <div class='container' style="width:40%;">
        <h1 style="font-weight: bold;margin:10px;">Sign In</h1>
        <div class="signin">
             <v-text-field label="Enter user name" stype="left:0 !important;" v-model="username"></v-text-field>
        </div>
        <div class="signin">
             <v-text-field type="password" label="Enter password"  stype="left:0 !important;" v-model="password"></v-text-field>
               </div>
        <v-row
            align="center"
        >
            <v-btn style="margin-right: 10px;" depressed  v-on:click="signIn()">
                Sign In
            </v-btn>
            <v-btn depressed  v-on:click="signUp()">
                Sign Up
            </v-btn>
            </v-row>
   </div>
</template>
<script>
import Bus from './bus.js'
import axios from 'axios';

export default {
    name: "signin",
    components: {
        
    },
    data() {
        return {
            username:'',
            password:'',
            title: ''
        }
    },
    methods: {
        async signIn() {
            let path = 'http://localhost:3000/login';
            try {
                let payload = {
                    password: this.password,
                    username: this.username
                }
                let res = await axios.post(path, payload);
                if(res.status === 200) {
                    console.log(res.data);
                    Bus.username = this.username;
                    Bus.$emit('widgetname', {name: 'showdevice'});
                } else {
                    console.log(res)
                }
            } catch(ex) {
                console.log(`Exception in signin ${ex}`);
            }
        },
        signUp() {
            Bus.$emit('widgetname', {name: 'signup'});
        }
    },
    created() {
        this.title = "sign In";
    }
}
</script>
<style>
    .signin .v-input .v-label {
        left: 0 !important;
        right: auto !important;
    }
    .signin input {
        margin-left: 15px !important;
    }
</style>