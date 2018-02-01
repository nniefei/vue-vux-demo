/**
 * Created by nnie on 2018/1/23.
 **/
import router from './router'
import totast from './util/totast'

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    if (localStorage.ifLogined) {
      next()
    } else {
      totast.$vux.toast.text('请您去登录', 'middle')
      next({path: 'login'})
    }
  }
})
