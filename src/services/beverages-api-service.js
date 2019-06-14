import TokenService from './token-service'
import config from '../config'

const BeveragesApiService = {
    getBeverages() {
      return fetch(`${config.API_ENDPOINT}/beverages`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getBeverage(beverageId) {
      return fetch(`${config.API_ENDPOINT}/beverages/${beverageId}`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getBeverageReviews(beverageId) {
      return fetch(`${config.API_ENDPOINT}/reviews`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    postReview(beverageId, review) {
      return fetch(`${config.API_ENDPOINT}/reviews`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({
          bev_id: beverageId,
          review,
        }),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
  }

  export default BeveragesApiService;