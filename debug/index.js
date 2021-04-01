const axios = require('../index').default

const baseUrl = 'http://127.0.0.1:3210/'

axios
  .get(baseUrl)
  .then((res) => {
    console.log('res', res)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(() => {
    console.log('finally')
  })
