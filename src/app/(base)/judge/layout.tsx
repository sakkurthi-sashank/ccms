import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function JudgeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const userId = (await supabase.auth.getUser()).data.user

  if (!userId) {
    redirect('/login')
  }

  const { data } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId.id)
    .single()

  if (!data || data.role !== 'judge') {
    redirect('/')
  }

  return <>{children}</>
}
