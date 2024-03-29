import axios from "axios";
import Mock from "./mock.js";

import { createApp } from "vue";
import App from "./App.vue";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";
import router from './router'

import VueDiff from 'vue-diff'
import 'vue-diff/dist/index.css';
import CKEditor from '@ckeditor/ckeditor5-vue';


// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);

const axiosClient = axios.create({});
// axiosClient.defaults.withCredentials = true;
// axiosClient.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
Mock.mocked(axiosClient);

app.use(router)

app.use(VueDiff, { componentName: 'VueDiff' })
app.use(CKEditor)
// app.use(ElementPlus);

app.provide("$client", axiosClient);

app.mount("#app");
