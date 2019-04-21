export async function handler () {
  return {
    headers: {
      'content-type': 'text'
    },
    body: 'responseText',
    statusCode: 200
  }
}
