import { DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="inline-flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-semibold text-base">Receita total (mês)</CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="font-bold text-2xl tracking-tight">R$ 1498,20</span>
        <p className="mt-2 text-muted-foreground text-sm">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span> em relação ao mês
          passado
        </p>
      </CardContent>
    </Card>
  )
}
