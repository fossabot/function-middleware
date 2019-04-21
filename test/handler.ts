export { handler as hello } from '../examples/helloWorld'

export async function status () {
  return {
    body: '',
    statusCode: 200
  }
}
