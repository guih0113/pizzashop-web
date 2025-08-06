import { RouterProvider } from 'react-router-dom'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { router } from './routes'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
