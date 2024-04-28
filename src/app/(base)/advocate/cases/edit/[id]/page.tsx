'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { useAuthStore } from '@/store/auth'
import { createClient } from '@/utils/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.string(),
  registered_by_user: z.string(),
  registered_against_user: z.string(),
})

export default function EditCaseDetails() {
  const [caseDetails, setCaseDetails] = useState<{
    created_at: string
    description: string
    id: string
    registered_advocate: string
    registered_against_user: string
    registered_by_user: string
    status: string
    title: string
    type: string | null
  }>()

  const [file, setFile] = useState<File | null>(null)

  const router = useRouter()

  const { id } = useParams<{ id: string }>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      type: '',
      registered_by_user: '',
      registered_against_user: '',
    },
  })

  useEffect(() => {
    const fetchCaseDetails = async () => {
      const supabase = createClient()

      const userEmail = (await supabase.auth.getUser()).data.user

      const { data, error } = await supabase
        .from('case_details')
        .select('*')
        .eq('id', id)
        .eq('registered_advocate', userEmail?.email!)
        .single()

      if (error) {
        throw new Error(error.message)
      }

      if (!data || data.status === 'approved') {
        router.push('/advocate/cases')
      }

      setCaseDetails(data)

      form.reset({
        title: data.title || '',
        description: data.description || '',
        type: data.type || '',
        registered_by_user: data.registered_by_user || '',
        registered_against_user: data.registered_against_user || '',
      })
    }

    fetchCaseDetails()
  }, [])

  const { user } = useAuthStore()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient()

    const { data, error } = await supabase
      .from('case_details')
      .update({
        description: values.description,
        title: values.title,
        type: values.type,
        registered_by_user: values.registered_by_user,
        registered_against_user: values.registered_against_user,
        registered_advocate: user?.email!,
        status: 'pending',
      })
      .eq('id', id)
      .select('*')

    if (error) {
      console.error(error)
      form.setError('root', { type: 'manual', message: error.message })
      return
    }
    router.push('/advocate/cases')
  }

  return (
    <Card className="mx-auto mb-20 mt-5 max-w-4xl">
      <CardHeader>
        <CardTitle>Edit case details for {caseDetails?.title}</CardTitle>
        <CardDescription>
          Please fill out the form below to edit the case details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title of the case</FormLabel>
                  <FormControl>
                    <Input placeholder="Murder Case" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the case" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Input placeholder="Type of case" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registered_by_user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registered by</FormLabel>
                  <FormControl>
                    <Input placeholder="Registered by user" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registered_against_user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registered against</FormLabel>
                  <FormControl>
                    <Input placeholder="Registered against user" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <div className="mt-5 flex justify-end space-x-4">
          <Button variant="ghost">Cancel</Button>
          <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
        </div>

        <Separator className="my-10" />

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input
            id="picture"
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                setFile(file)
              }
            }}
          />

          <div className="flex justify-end space-x-4">
            <Button
              onClick={async () => {
                const supabase = createClient()

                const { data, error } = await supabase.storage
                  .from('evidence')
                  .upload(`case-${caseDetails?.id}`, file!)

                if (error) {
                  console.error(error)
                  return
                }

                console.log(data)
              }}
            >
              Upload
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
