'use client'

import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createClient } from '@/utils/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
const formSchema = z.object({
  email: z.string().email(),
  displayName: z.string().min(3).max(20),
  message: z.string().min(10).max(500),
})

export default function HomePage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      displayName: '',
      message: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('contact_us')
      .insert({
        display_name: values.displayName,
        email: values.email,
        message: values.message,
      })
      .select('*')

    if (error) {
      console.error(error)
      return
    }

    console.log(data)
    form.reset()
  }

  return (
    <>
      <div
        style={{ textAlign: 'center' }}
        className="background flex flex-col items-center justify-between space-y-12 pt-10"
      >
        <div className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Court Case Management System
        </div>
        <div className="w-1/2">
          <Image
            src="https://www.icj-cij.org/sites/default/files/homebanner.jpg"
            alt=""
            className="h-[500px] w-full overflow-hidden rounded-md object-cover"
            width={500}
            height={500}
          />
        </div>

        <section className="space-y-10 bg-gray-100 p-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose Our System?</h2>
          <p className="mb-4">
            Our system provides a comprehensive suite of tools designed to
            streamline the management of court cases, enhance communication, and
            improve overall judicial efficiency.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-semibold">Real-Time Updates</h3>
              <p>
                Stay updated with real-time case progress and notifications.
              </p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-semibold">Secure Access</h3>
              <p>
                All data is securely stored and accessible only to authorized
                personnel.
              </p>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <h3 className="font-semibold">Efficient Case Handling</h3>
              <p>Automate routine tasks and focus more on case resolutions.</p>
            </div>
          </div>
        </section>

        <section className="space-y-10 bg-white p-6 text-center">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded p-4 shadow">
              <p>
                This system has revolutionized how we manage our court cases.
                The real-time updates and secure access are game changers!
              </p>
              <cite>— Judge Smith</cite>
            </div>
            <div className="rounded p-4 shadow">
              <p>
                Efficient, reliable, and user-friendly. Highly recommended for
                any judicial system looking to improve their case management.
              </p>
              <cite>— Attorney Johnson</cite>
            </div>
            <div className="rounded p-4 shadow">
              <p>
                A robust system that handles all our needs seamlessly. The
                support team is also very helpful and responsive.
              </p>
              <cite>— Clerk Emily</cite>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-semibold">How secure is the system?</h3>
              <p>
                The system uses advanced encryption and multi-factor
                authentication to ensure that all data is protected.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Can I access the system remotely?
              </h3>
              <p>
                Yes, our system is cloud-based and can be accessed from anywhere
                with an internet connection.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Is there a mobile app?</h3>
              <p>
                Yes, we offer a mobile app that allows you to manage cases and
                receive updates on the go.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="mx-auto my-10 max-w-xl rounded-lg border bg-white p-6 shadow-md">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mb-8 text-gray-600">
          Feel free to drop us a message and we&apos;ll get back to you as soon
          as possible!
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    We&apos;ll never share your email with anyone else.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </>
  )
}
