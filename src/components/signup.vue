<template>
     <div class='container' style="width:40%;">
        <h1 style="font-weight: bold;margin:10px;">{{title}}</h1>
        <div class="signin">
             <v-text-field label="Enter user name" stype="left:0 !important;" v-model="username"></v-text-field>
        </div>
        <div class="signin">
            <v-text-field label="Enter Emailid"  type="email" stype="left:0 !important;" v-model="emailid"></v-text-field>
        </div>
        <div class="signin">
            <v-text-field label="Enter Mobile Number" type="number" stype="left:0 !important;" v-model="mobileno"></v-text-field>
        </div>
        <div class="signin">
             <v-text-field label="Enter password" type="password" stype="left:0 !important;" v-model="password"></v-text-field>
               </div>
        <v-row
            align="center"
        >
            <v-btn style="margin-right: 10px;" depressed  v-on:click="signUp()">
                Submit
            </v-btn>
            <v-btn depressed  v-on:click="signIn()">
                Sign In
            </v-btn>
            </v-row>
   </div>
</template>
<script>
import axios from 'axios';
import Bus from './bus.js'

export default {
    name: "signup",
     components: {
        
    },
    data() {
        return {
            username:'',
            password:'',
            emailid:'',
            mobileno:'',
            title: ''
        }
    },
    methods: {
        async signUp() {
            let path = 'http://localhost:3000/adduser';
            try {
                let payload = {
                    username: this.username,
                    password: this.password,
                    email: this.emailid,
                    mobile: this.mobileno
                }
                let res = await axios.post(path, payload);
                if(res.status === 200) {
                    console.log(res.data);
                    Bus.$emit('widgetname', {name: 'signin'});
                } else {
                    console.log(res)
                }
            } catch(ex) {
                console.log(`Exception in add user ${ex}`);
            }
        },
        signIn() {
            Bus.$emit('widgetname', {name: 'signin'});
        }
    },
    created() {
        this.title = "sign Up";
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