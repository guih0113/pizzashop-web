import { HttpResponse, http } from 'msw'
import type { GetOrderDetailsParams, GetOrderDetailsResponse } from '../get-order-details'

export const getOrderDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>(
  '/orders/:orderId',
  ({ params }) => {
    return HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'Test Name',
        email: 'teste@example.com',
        phone: '233423435'
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      totalInCents: 5000,
      orderItems: [
        {
          id: 'order-item-1',
          priceInCents: 1000,
          product: { name: 'Pizza Teste' },
          quantity: 1
        },
        {
          id: 'order-item-2',
          priceInCents: 2000,
          product: { name: 'Pizza de Teste' },
          quantity: 2
        }
      ]
    })
  }
)
