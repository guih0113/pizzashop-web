import { Utensils } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="inline-flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-semibold text-base">Pedidos (mês)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="font-bold text-2xl tracking-tight">321</span>
        <p className="mt-2 text-muted-foreground text-sm">
          <span className="text-emerald-500 dark:text-emerald-400">+7%</span> em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
