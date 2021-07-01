<template>
    <v-container class='container' >
        <header1>  </header1>
        <h1 style="font-weight: bold;margin:50px;">Add Device</h1>
        <div align="center" style="margin-left:30%;width:40%;text-align:center;">
        <div class="signin">
             <v-text-field label="Enter Device Name" stype="left:0 !important;" v-model="device"></v-text-field>
        </div>
        <div class="signin">
             <v-text-field label="Enter OS" stype="left:0 !important;" v-model="os"></v-text-field>
        </div>
        <div class="signin" style="margin-bottom: 50px;">
             <v-text-field label="Enter Manufacturer" stype="left:0 !important;" v-model="manufacturer"></v-text-field>
        </div>
        <v-row
            align="center"
        >
            <v-btn depressed  v-on:click="add()">
               Add Device
            </v-btn>
        </v-row>
        </div>
   </v-container>
</template>
<script>
import Vue from "vue";
import header1 from './header'
import axios from 'axios';
import Bus from './bus';
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);
export default {
    name: "adddevice",
    components: {
        header1
    },
    data() {
        return {
            manufacturer: '',
            device: '',
            os: '',
            username: ''
        }
    },
    methods: {
        async add() {
            let path = 'http://localhost:3000/adddevice';
            try {
                let payload = {
                    os: this.os,
                    device: this.device,
                    manufacturer: this.manufacturer,
                    username: Bus.username,
                    ischeckedout: false
                }
                let res = await axios.post(path, payload);
                if(res.status === 200) {
                    this.$alert("Add New Device Successfully");
                    console.log(res.data.result);
                    Bus.$emit('widgetname', {name:"showdevice"});
                }
            } catch(ex) {
                console.log(`Exception in add device ${ex}`);
            }
        }
    },
    created() {

    }
}
</script>
<style scoped>
    
</style>