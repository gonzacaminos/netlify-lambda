exports.handler = async function (event, context) {
  const fetch = require("node-fetch")

  // Unused, just for the starter
  const key = process.env.KEY

  return fetch(
    `https://dummyjson.com/products`,
    {
      method: "GET"
    }
  )
    .then(response => response.json())
    .then(response => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      }
    })
}
