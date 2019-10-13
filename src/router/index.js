import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routerList = []

function importAll(route) {
   route.keys().forEach(
      key => routerList.push(route(key).default)
   )
}

importAll(require.context('.', true, /router\.js$/))

export default new Router({
   routes: [
      ...routerList,
      {
         path: '/',
         name: 'HelloWorld',
         component: HelloWorld
      }
   ]
})
