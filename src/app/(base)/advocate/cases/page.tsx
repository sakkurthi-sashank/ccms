import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatDate } from '@/utils/format-date'
import { createClient } from '@/utils/supabase/server'
import { ExternalLinkIcon } from 'lucide-react'
import { headers } from 'next/headers'
import Link from 'next/link'

export default async function AdvocateCases() {
  const fetchAdvocateCases = async () => {
    'use server'

    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    const email = user?.email

    const { data: cases, error } = await supabase
      .from('case_details')
      .select('*')
      .eq('registered_advocate', email!)

    if (error) {
      throw new Error(error.message)
    }

    return cases
  }

  const cases = await fetchAdvocateCases()

  const headersList = headers()
  const domain = headersList.get('x-forwarded-host')

  const url =
    process.env.NODE_ENV === 'development'
      ? `http://${domain}/`
      : `https://${domain}/`

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3">
        {cases?.map((caseItem) => (
          <div
            className="flex w-full max-w-lg flex-col space-y-6 rounded-md border border-gray-300 bg-white  p-6 shadow-sm"
            key={caseItem.id}
          >
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="flex w-full items-center justify-between">
                <h4 className="text-xl font-semibold">{caseItem.title}</h4>
                <Badge variant="outline">
                  {caseItem.status.toString().toUpperCase()}
                </Badge>
              </div>
              <Separator />
              <span className={`rounded-full pb-1 text-gray-700`}>
                {caseItem.description}
              </span>

              <div className="flex items-center justify-center text-sm text-gray-600">
                {formatDate(new Date(caseItem.created_at))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="flex w-full flex-col truncate">
                <span className="text-sm text-gray-400">Registered By:</span>{' '}
                {caseItem.registered_by_user}
              </span>
              <span className="flex w-full flex-col truncate">
                <span className="text-sm text-gray-400">
                  Registered Against:
                </span>{' '}
                {caseItem.registered_against_user}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Button type="submit" variant="outline" asChild size="sm">
                <Link href={`/cases/${caseItem.id}`}>
                  <span className="sr-only">Link</span>
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  Full Details
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
