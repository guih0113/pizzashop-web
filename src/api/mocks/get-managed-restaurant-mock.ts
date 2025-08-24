import { HttpResponse, http } from 'msw'
import type { GetManageRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<never, never, GetManageRestaurantResponse>(
  '/managed-restaurant',
  () => {
    return HttpResponse.json({
      id: 'custom-restaurant-id',
      name: 'Pizza Shop',
      createdAt: new Date(),
      updatedAt: null,
      description: 'Custom restaurant description',
      managerId: '8923745982739'
    })
  }
)
