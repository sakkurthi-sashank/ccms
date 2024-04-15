import { formatDate } from '@/utils/format-date'
import { createClient } from '@/utils/supabase/server'

export default async function CaseFullDetailsById({
  params,
}: {
  params: { id: string }
}) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('case_details')
    .select('*')
    .eq('id', params.id)
    .single()

  //   const data: {
  //     created_at: string;
  //     description: string;
  //     id: string;
  //     registered_advocate: string;
  //     registered_against_user: string;
  //     registered_by_user: string;
  //     status: string;
  //     title: string;
  //     type: string;
  // } | null

  return (
    <div className="flex justify-center p-3">
      <div className="w-full max-w-7xl rounded-md border border-gray-200 bg-white p-6 shadow-md sm:p-8">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          {data?.title}
        </h1>

        <div className="mt-6">
          <div className="mt-4 space-y-4 text-lg text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">Type:</span>{' '}
              {data?.type.toString().toUpperCase()}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Description:</span>{' '}
              {data?.description}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Status:</span>{' '}
              {data?.status.toString().toUpperCase()}
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Registered by:
              </span>{' '}
              {data?.registered_by_user}
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Registered against:
              </span>{' '}
              {data?.registered_against_user}
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Registered advocate:
              </span>{' '}
              {data?.registered_advocate}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Created at:</span>{' '}
              {formatDate(new Date(data?.created_at!))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
