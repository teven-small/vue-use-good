// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './components/global.js'

import { checkPermission } from './common/permissions.js'

Vue.config.productionTip = false

Vue.directive('display-key', {
   inserted(el, binding) {
      let displayKey = binding.value;
      if (displayKey) {
         let hasPermission = checkPermission(displayKey);

         if (!hasPermission) {
            el.parentNode && el.parentNode.removeChild(el);
         }
      } else {
         throw new Error("没有权限")
      }
   }
})

/* eslint-disable no-new */
new Vue({
   el: '#app',
   router,
   components: { App },
   template: '<App/>'
})
