import { DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="inline-flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-semibold text-base">Cancelamentos (mês)</CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="font-bold text-2xl tracking-tight">13</span>
        <p className="mt-2 text-muted-foreground text-sm">
          <span className="text-emerald-500 dark:text-emerald-400">-7%</span> em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
