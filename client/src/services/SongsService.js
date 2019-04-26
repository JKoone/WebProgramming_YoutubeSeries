import Api from '@/services/Api'

export default {
  index() {
    return Api().get('songs')
  },
  create(data) {
    return Api().post('songs', data)
  }
}

// AuthenticationService.register({
//  email: 'testing@gmail.com',
//  password: 'test'
// })