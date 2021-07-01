<template>
    <div class='container' style="">
        <div style=" color : black; margin-bottom: 25px;">
            <h1>Device App</h1>
        </div>
        <v-row
            align="center"
            justify="space-around"
            style="background: gray; height: 50px;"
        >
            <v-btn style="margin-left: 5px;margin-right: 10px;margin-top:6px;" depressed  v-on:click="getDevice()">
                Show Device
            </v-btn>
            <v-btn depressed style="margin-right: 10px;margin-top:6px;"  v-on:click="addDevice()">
                Add Device
            </v-btn>
            <label style="margin-left:50px;width: 59%;line-height:2; margin-top:6px; color:#fff;">Welcome, {{username}}</label>
            <v-btn style="margin-top:6px;margin-right: 5px;" depressed  v-on:click="signOut()">
                sign Out
            </v-btn>
        </v-row>
   </div>
</template>
<script>
import Bus from './bus.js'
export default {
    name: "header",
    data() {
        return {
            username:''
        }
    },
    methods: {
        getDevice() {
            Bus.$emit('widgetname', {name: "showdevice"});
        },
        addDevice() {
            Bus.$emit('widgetname', {name: "adddevice"});
        },
        signOut() {
            Bus.$emit('widgetname', {name:"signin"});
        }
    },
    created(){
        this.username = Bus.username;
    }
}
</script>
<style scoped>
    
</style>