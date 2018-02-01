/**
 * Created by nnie on 2018/1/23.
 **/
const getters = {
  loadingFlag: state => state.common.ifShowLoading,
  loginFlag: state => state.login.ifLogined,
  top250List: state => state.film.top250List,
  inTheatersList: state => state.film.inTheatersList,
  comingsoonList: state => state.film.comingsoonList,
  musicTypeList: state => state.music.musicTypeList,
  musicList: state => state.music.musicList,
  bookList: state => state.book.bookList,
  photoList: state => state.photo.photoList,
  searchList: state => state.search.searchList
}

export default getters
