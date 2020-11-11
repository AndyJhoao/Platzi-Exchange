const url = 'https://api.coincap.io/v2'

function getAssets() {
  return getRequest('assets?limit=20')
}

function getRequest(method) {
  return fetch(`${url}/${method}`)
    .then(response => response.json())
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('Error', error)
    })
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then(response => response.json())
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('Error', error)
    })
}

function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data)
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(response => response.json())
    .then(response => {
      return response.data
    })
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then(response => response.json())
    .then(response => {
      return response.data
    })
}
export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
}
// const url = "https://api.coincap.io/v2";

// function getAssets() {
//   return getRequest("assets?limit=20");
// }

// function getRequest(method) {
//   return fetch(`${url}/${method}`, {
//     mode: "cors",
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log("request failed", error);
//     }); // Syntax error: unexpected end of input
// }

// export default { getAssets };
