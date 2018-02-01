import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView'
import ResourceView from '../views/ResourceView'
import BookView from '../views/ResourceView/BookView'
import FilmView from '../views/ResourceView/FilmView'
import Top250View from '../views/ResourceView/FilmView/Top250View'
import IntheatersView from '../views/ResourceView/FilmView/IntheatersView'
import ComingsoonView from '../views/ResourceView/FilmView/ComingsoonView'
import MusicView from '../views/ResourceView/MusicView'
import MusiclistView from '../views/ResourceView/MusicView/MusicListView'
import PhotoView from '../views/ResourceView/PhotoView'
import SearchView from '../views/ResourceView/SearchView'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/resource',
      component: ResourceView,
      children: [
        {
          path: 'film',
          component: FilmView,
          children: [
            {
              path: 'top250',
              name: 'top250',
              component: Top250View
            },
            {
              path: 'intheaters',
              name: 'intheaters',
              component: IntheatersView
            },
            {
              path: 'comingsoon',
              name: 'comingsoon',
              component: ComingsoonView
            },
            {
              path: '',
              redirect: '/resource/film/top250',
              name: 'emptyfilm',
              component: Top250View
            }
          ]
        },
        {
          path: 'music',
          name: 'music',
          component: MusicView
        },
        {
          path: 'musiclist/:id',
          name: 'musiclist',
          component: MusiclistView
        },
        {
          path: 'book',
          name: 'book',
          component: BookView
        },
        {
          path: 'photo',
          name: 'photo',
          component: PhotoView
        },
        {
          path: 'search',
          name: 'search',
          component: SearchView
        },
        {
          path: '',
          redirect: '/resource/photo',
          name: 'emptyresource',
          component: PhotoView
        }
      ]
    }
  ]
})
