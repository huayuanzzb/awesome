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
import CodeBlock from 'vue3-code-block';
import VueDiff from 'vue-diff'
import 'vue-diff/dist/index.css';

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App);
app.use(router)
app.use(CodeBlock)
app.use(VueDiff, { componentName: 'VueDiff' })
// app.use(ElementPlus);
app.mount("#app");
