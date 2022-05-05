import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from "axios";

Vue.config.productionTip = false

Vue.filter("toLowercase", value => {
    return value.toLowerCase();
})

Vue.mixin({
    created() {
        console.log("Global Mixin - create()!")
    }
})

axios.defaults.baseURL = "http://localhost:9090";
axios.defaults.headers.common["Authorization"] = "Bearer jfjslsljfljfgkdslf54248fsdfsdfsdc54f.sfsl"
axios.defaults.headers.get["Accepts"] = "application/json"


new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')

