<template>
  <div class="hello">
    <div class="inner-div">
      <h1>{{ msg }}</h1>
      <weather
        api-key="746b0ff807fa8f38c95b653de9eff6e1"
        title="Weather"
        :latitude="lat"
        :longitude="lng"
        language="en"
        units="uk"
      ></weather>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import VueWeatherWidget from "vue-weather-widget";
export default {
  name: "HelloWorld",
  components: {
    weather: VueWeatherWidget
  },
  data() {
    return {
      msg: "Welcome to Weather App",
      lat: "",
      lng: ""
    };
  },
  created() {
    this.$watchLocation({
      enableHighAccuracy: true, //defaults to false
      timeout: Infinity //defaults to Infinity
    }).then(coordinates => {
      console.log(coordinates);

      (this.lat = JSON.stringify(coordinates.lat)),
        (this.lng = JSON.stringify(coordinates.lng));
    });
    console.log("component created ! ");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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

.inner-div {
  background: #5adafa;
  width: 70%;
  margin: auto;
  padding: 10%;
}
</style>
