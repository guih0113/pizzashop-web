import { RouterProvider } from 'react-router-dom'
import './index.css'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export default function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Toaster richColors />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
