export const FeatureSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Enhance Judicial Efficiency
            </h2>

            <p className="mt-4 text-gray-600">
              Streamline your court&apos;s operations with our advanced Case
              Management System (CMS). Designed to handle the complexities of
              modern judicial processes, our CMS ensures accurate case tracking,
              automated document management, and improved access to case
              information.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              {
                title: 'E-Filing',
                description:
                  'Submit and manage court documents electronically with ease.',
              },
              {
                title: 'Case Scheduling',
                description:
                  'Automate scheduling to optimize courtroom and resource utilization.',
              },
              {
                title: 'Public Access',
                description:
                  'Provide secure, real-time access to case information for the public.',
              },
              {
                title: 'Reporting and Analytics',
                description:
                  'Generate insightful reports and analytics for informed decision-making.',
              },
              {
                title: 'Document Management',
                description:
                  'Efficiently manage and retrieve case files and documents.',
              },
              {
                title: 'Security and Compliance',
                description:
                  'Ensure the highest standards of data security and regulatory compliance.',
              },
            ].map((feature) => (
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
                key={feature.title}
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold">{feature.title}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  {feature.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
