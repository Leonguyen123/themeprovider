export async function GET(request: Request) {
  const x = 10
  console.log('x')
  return new Response('Hello, from API!')
}
