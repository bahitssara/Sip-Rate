import TokenService from './token-service'
import config from '../config'

const BeveragesApiService = {
    postReview(review) {
      return fetch(`${config.API_ENDPOINT}/reviews`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `basic ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify(review),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            .then(window.location = `/`)
        )
    }
  } 

  export default BeveragesApiService;
