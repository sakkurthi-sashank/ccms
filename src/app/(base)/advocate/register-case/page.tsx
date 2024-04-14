'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Textarea } from '@/components/ui/textarea'
import { useAuthStore } from '@/store/auth'
import { createClient } from '@/utils/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.string(),
  registered_by_user: z.string(),
  registered_against_user: z.string(),
})

export default function AdvocateRegisterPage() {
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

  const { user } = useAuthStore()

  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient()

    const { data, error } = await supabase
      .from('case_details')
      .insert({
        description: values.description,
        title: values.title,
        type: values.type,
        registered_by_user: values.registered_by_user,
        registered_against_user: values.registered_against_user,
        registered_advocate: user?.email!,
        status: 'pending',
      })
      .select('*')

    if (error) {
      form.setError('root', { type: 'manual', message: error.message })
      return
    }
    router.push('/advocate/cases')
  }

  return (
    <Card className="mx-auto mt-5 max-w-4xl">
      <CardHeader>
        <CardTitle>Register a new case</CardTitle>
        <CardDescription>
          Please fill out the form below to register a new case.
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
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
      </CardFooter>
    </Card>
  )
}
