import { HttpResponse, http } from 'msw'
import type { SignInBody } from '../sign-in'

export const signInMock = http.post<never, SignInBody>('/authenticate', async ({ request }) => {
  const { email } = await request.json()

  if (email === 'emailteste@example.com') {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Set-Cookie': 'auth=sample-jwt'
      }
    })
  }

  return new HttpResponse(null, { status: 401 })
})
