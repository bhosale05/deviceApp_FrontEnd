<template>
  <div class="main">
    <slot>
      <header1 v-if="widgetname=='header'"> Header </header1>
      <signin v-if="widgetname=='signin'"> sign IN </signin>
      <signup v-if="widgetname=='signup'"> sign UP </signup>
      <adddevice v-if="widgetname=='adddevice'"> Add Device </adddevice>
      <showdevice v-if="widgetname=='showdevice'"> Show Device </showdevice>
    </slot>
  </div>
</template>

<script>
import Bus from './bus.js';
import header1 from './header'
import signin from './signin';
import signup from './signup';
import adddevice from './adddevice'
import showdevice from './showdevice'
export default {
  name: 'Main',
  components: {
    header1,
    signin,
    signup,
    adddevice,
    showdevice
  },
  props: {
    msg: String
  },
  data() {
    return {
      widgetname: "signin"
    }
  },
  methods: {
    init() {
      Bus.$on('widgetname', (data)  => {
        if(data.name == 'header') {
          this.widgetname = 'header';
        } else if(data.name == 'signin') {
          this.widgetname = 'signin';
        } else if(data.name == 'signup') {
          this.widgetname = 'signup';
        } else if(data.name == 'adddevice') {
          this.widgetname = 'adddevice';
        } else if(data.name == 'showdevice') {
          this.widgetname = 'showdevice';
        }
      })
    }
  },
  created() {
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main{
  height: 100%;
}
</style>
