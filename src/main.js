import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Tab, Tabs, Row, Col, Icon, Cell, CellGroup, Field, Button, List, NavBar, Notify, Search } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Row)
  .use(Col)
  .use(Icon)
  .use(Cell)
  .use(CellGroup)
  .use(Field)
  .use(Button)
  .use(NavBar)
  .use(Notify)
  .use(Search)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
