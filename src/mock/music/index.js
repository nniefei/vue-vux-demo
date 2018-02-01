/**
 * Created by nnie on 2018/1/25.
 **/
import Mock from 'mockjs'

const musicTypeList = Mock.mock({
  'code': '000000',
  'msg': '音乐类型列表获取成功！',
  // 'data': {
  //   musicTypeList: [{
  //     name: '飙升榜',
  //     id: 19723756,
  //     bg: './static/img/music/soar_music.jpg'
  //   },
  //   {
  //     name: '新歌榜',
  //     id: 3779629,
  //     bg: './static/img/music/new_music.jpg'
  //   },
  //   {
  //     name: '原创榜',
  //     id: 2884035,
  //     bg: './static/img/music/original_music.jpg'
  //   },
  //   {
  //     name: '热歌榜',
  //     id: 3778678,
  //     bg: './static/img/music/hot_music.jpg'
  //   },
  //   {
  //     name: '古典榜',
  //     id: 71384707,
  //     bg: './static/img/music/classic_music.jpg'
  //   },
  //   {
  //     name: 'KTV榜',
  //     id: 21845217,
  //     bg: './static/img/music/ktv_music.jpg'
  //   },
  //   {
  //     name: 'ACG榜',
  //     id: 71385702,
  //     bg: './static/img/music/acg_music.jpg'
  //   }
  //   ]
  // }
  'data': {
    musicTypeList: [{
      name: '飙升榜',
      id: 19723756,
      bg: '/src/assets/music/soar_music.jpg'
    },
    {
      name: '新歌榜',
      id: 3779629,
      bg: '/src/assets/music/new_music.jpg'
    },
    {
      name: '原创榜',
      id: 2884035,
      bg: '/src/assets/music/original_music.jpg'
    },
    {
      name: '热歌榜',
      id: 3778678,
      bg: '/src/assets/music/hot_music.jpg'
    },
    {
      name: '古典榜',
      id: 71384707,
      bg: '/src/assets/music/classic_music.jpg'
    },
    {
      name: 'KTV榜',
      id: 21845217,
      bg: '/src/assets/music/ktv_music.jpg'
    },
    {
      name: 'ACG榜',
      id: 71385702,
      bg: '/src/assets/music/acg_music.jpg'
    }
    ]
  }
})

export {
  musicTypeList
}
