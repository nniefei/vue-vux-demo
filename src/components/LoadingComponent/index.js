import LoadingComponent from './loading.vue'

const loading = {
  install: function (Vue) {
    Vue.component('CustomLoading', LoadingComponent)
  }
}

export default loading
