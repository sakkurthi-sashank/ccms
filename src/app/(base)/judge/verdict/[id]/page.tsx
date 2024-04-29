'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { formatDate } from '@/utils/format-date'
import { createClient } from '@/utils/supabase/client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function JudgeVerdict() {
  const [cases, setCases] = useState<{
    created_at: string
    description: string
    id: string
    registered_advocate: string
    registered_against_user: string
    registered_by_user: string
    status: string
    title: string
    type: string
  }>()

  const [caseVerdict, setCaseVerdict] = useState<string | null>(null)

  const supabase = createClient()

  const [verdict, setVerdict] = useState('')

  const { id } = useParams<{ id: string }>()

  const updateCaseVerdict = async () => {
    await supabase.from('judge_verdicts').insert([
      {
        case_id: cases?.id!,
        verdict: verdict as string,
        judge_id: (await supabase.auth.getUser()).data.user?.email!,
      },
    ])
  }

  const fetchCaseVerdict = async () => {
    const { data, error } = await supabase
      .from('judge_verdicts')
      .select('*')
      .eq('case_id', id)
      .single()

    if (error) {
      console.error(error)
      return
    }

    setCaseVerdict(data?.verdict)
  }

  useEffect(() => {
    fetchCaseVerdict()
  }, [])

  const fetchAdvocateCases = async () => {
    const { data, error } = await supabase
      .from('case_details')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error(error)
      return
    }

    setCases(data)

    return data
  }

  useEffect(() => {
    fetchAdvocateCases()
  }, [])

  return (
    <div className="flex justify-center p-3">
      <div className="w-full max-w-7xl rounded-md border border-gray-200 bg-white p-6 shadow-md sm:p-8">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          {cases?.title}
        </h1>

        <div className="mt-6">
          <div className="mt-4 space-y-4 text-lg text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">Type:</span>{' '}
              {cases?.type.toString().toUpperCase()}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Description:</span>{' '}
              {cases?.description}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Status:</span>{' '}
              {cases?.status.toString().toUpperCase()}
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Registered by:
              </span>{' '}
              {cases?.registered_by_user}
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Registered against:
              </span>{' '}
              {cases?.registered_against_user}
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Registered advocate:
              </span>{' '}
              {cases?.registered_advocate}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Created at:</span>{' '}
              {formatDate(new Date(cases?.created_at!))}
            </p>

            {caseVerdict && (
              <p className="mt-5">
                <span className="font-semibold text-gray-900">Verdict:</span>{' '}
                {caseVerdict}
              </p>
            )}
          </div>
        </div>

        {!caseVerdict ? (
          <div className="mt-5 space-y-1">
            <h2 className="text-lg font-medium">Verdict</h2>
            <Textarea
              placeholder="Enter the verdict here"
              value={verdict}
              onChange={(e) => setVerdict(e.target.value)}
            />

            <div className="flex justify-end pt-10" onClick={updateCaseVerdict}>
              <Button>Submit</Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
