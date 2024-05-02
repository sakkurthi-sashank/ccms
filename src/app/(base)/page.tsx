'use client'

import ContactForm from '@/components/contact-form'
import { FeatureSection } from '@/components/feature-section'
import { GlobeDemo } from '@/components/globe'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <div
        style={{ textAlign: 'center' }}
        className="flex flex-col items-center justify-between space-y-12 pt-10"
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

        <FeatureSection />

        <GlobeDemo />

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
              Testimonials
            </h2>

            <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
              <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                <div className="text-center text-gray-600">
                  “The court case management system streamlined our processes
                  and greatly improved efficiency.”
                </div>

                <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                    <Image
                      src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                      loading="lazy"
                      alt="Photo by Radu Florin"
                      className="h-full w-full object-cover object-center"
                      width={56}
                      height={56}
                    />
                  </div>

                  <div>
                    <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                      John Doe
                    </div>
                    <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                      Attorney-at-law
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                <div className="text-center text-gray-600">
                  “Our firm saw a significant improvement in case management
                  efficiency after implementing this system.”
                </div>

                <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                    <Image
                      src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                      loading="lazy"
                      alt="Photo by christian ferrer"
                      className="h-full w-full object-cover object-center"
                      width={56}
                      height={56}
                    />
                  </div>

                  <div>
                    <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                      Kate Smith
                    </div>
                    <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                      Legal Assistant
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                <div className="text-center text-gray-600">
                  “The court case management system revolutionized the way we
                  handle documents and scheduling.”
                </div>

                <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                    <Image
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                      loading="lazy"
                      alt="Photo by Ayo Ogunseinde"
                      className="h-full w-full object-cover object-center"
                      width={56}
                      height={56}
                    />
                  </div>

                  <div>
                    <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                      Greg Johnson
                    </div>
                    <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                      Paralegal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen items-center justify-center bg-white px-6 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Explore some common questions related to court cases and
              proceedings.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-700 md:text-xl">
                What are the steps involved in a court case?
              </h3>
              <p className="text-gray-500">
                Understand the sequential process of a court proceeding from
                filing to judgment.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-700 md:text-xl">
                What evidence is admissible in court?
              </h3>
              <p className="text-gray-500">
                Learn about the types of evidence that can be presented and
                considered in court.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-700 md:text-xl">
                How does cross-examination work?
              </h3>
              <p className="text-gray-500">
                Discover the process of questioning witnesses from the opposing
                party in court.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-700 md:text-xl">
                What are the possible outcomes of a court case?
              </h3>
              <p className="text-gray-500">
                Explore the different verdicts and judgments that can result
                from a court proceeding.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-700 md:text-xl">
                How does one appeal a court decision?
              </h3>
              <p className="text-gray-500">
                Learn about the process of challenging a court&apos;s decision
                through the appellate courts.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-700 md:text-xl">
                What are the legal fees associated with a court case?
              </h3>
              <p className="text-gray-500">
                Understand the costs involved in hiring legal representation and
                pursuing a court case.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  )
}
