import { HttpResponse, http } from 'msw'
import type { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Nome de Teste',
      email: 'emailteste@example.com',
      phone: '28345679235',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null
    })
  }
)
