/* eslint-disable @typescript-eslint/no-unused-vars */
import { http } from 'msw'

http.get('/resource', ({ request }) => {
  const url = new URL(request.url)
  const productId = url.searchParams.get('id')
})
