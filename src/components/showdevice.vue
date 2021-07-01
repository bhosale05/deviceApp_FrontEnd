<template>
    <div class='container'>
        <header1>  </header1>
        <div style="margin-top:25px; margin-bottom:20px; margin-left:20px;"> 
        <h1 style="text-align:center; margin : 5px;">All Devices</h1>
    </div>
    <v-row> 
    <v-card
        class="showdevice"
        v-for="item in this.deviceList" 
        :key="item.key"
        style="margin-bottom: 5px;"
       >
        <v-card-title style="">
           Device :<div>{{item.device}}</div>
        </v-card-title>
        <v-card-title>
            OS :<div>{{item.os}}</div>
        </v-card-title>
         <v-card-title>
            Manufa. : <div>{{item.manufacturer}}</div>
        </v-card-title>
         <v-card-title >
          C.B. <div v-if="item.ischeckedout">-{{item.lastcheckedoutby}}</div>
           <div v-if="!item.ischeckedout">-</div>
        </v-card-title>
         <v-card-title >
          C.D. <div v-if="item.ischeckedout">-{{moment(item.lastcheckedoutdate).format('DD-MM-YYYY:HH:mm:ss')}}</div>
           <div v-if="!item.ischeckedout">-</div>
        </v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
            <div>
                <label class="switch">
                <input type="checkbox" v-model="item.ischeckedout">
                <span class="slider round"></span>
                </label>
            </div>
           
            <v-row>

                <v-btn
                text
                color="teal accent-4"
                @click="updateStatus(item)"
                style="margin-left : 20px;"
                class="button"
            >
                Update
            </v-btn>

            <v-btn
                text
                color="teal accent-4"
                @click="removeDevice(item)"
                style="margin-left : 10px;"
                class="button"
            >
                Remove
            </v-btn>

            </v-row>
        </v-card-actions>
    </v-card>
    </v-row>
   </div>
</template>
<script>
import Bus from './bus.js'
import header1 from './header'
import axios from 'axios';
import moment from 'moment';
export default {
    name: "showdevice",
    components: {
        header1
    },
    data() {
        return {
            deviceList: [],
            moment: moment
        }
    },
    methods: {
        async getDevice() {
            let path = 'http://localhost:3000/getdevice';
            try {
                console.log(path);
                let res = await axios.get(path);
                if(res.status === 200) {
                    console.log(res.data);
                    this.deviceList = [];
                    this.deviceList = res.data;
                }
            } catch(ex) {
                console.log(`Exception in add device ${ex}`);
            }
        },
        async removeDevice(item){
            let path = 'http://localhost:3000/remove/'+item._id;
            try {
                console.log(path);
                let res = await axios.delete(path);
                if(res.status === 200) {
                    console.log(res.data);
                    this.getDevice();
                }
            } catch(ex) {
                console.log(`Exception in add device ${ex}`);
            }
        },
        async updateStatus(item) {
            let now = moment().valueOf();
            let date =  moment().startOf('d').valueOf();
            let startDate = moment(date).add(9, 'hours').valueOf();
            let endDate = moment(date).add(17, 'hours').valueOf();

            if(now > startDate && now < endDate) {
                item.lastcheckedoutdate = new Date(Date.now()).toISOString();
                item.lastcheckedoutby = Bus.username;
                let path = 'http://localhost:3000/update/'+item._id;
                try {
                    console.log(path);
                    let res = await axios.put(path, item);
                    if(res.status === 200) {
                        console.log(res.data);
                        this.getDevice();
                    }
                } catch(ex) {
                    console.log(`Exception in add device ${ex}`);
                }
            } else {
                console.log(`Checkin/Checkout will be done from 09:00:00 to 17:00:00`);
            }
        }
    },
    created() {
        this.getDevice();
    }
}
</script>
<style>

.showdevice {
    margin: 5px !important;
}
</style>
<style scoped>

.showdevice .v-sheet.v-car {
    margin: 5px !important;
}
    .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>