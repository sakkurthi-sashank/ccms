export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Streamline Your Court Cases with Ease
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive court case management system is essential for
              efficient legal operations.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <div className="rounded-full bg-gray-200 p-3 dark:bg-gray-700">
                <FolderIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">Case Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Effortlessly manage all aspects of your cases, from client
                  information to court dates, in one centralized location.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <div className="rounded-full bg-gray-200 p-3 dark:bg-gray-700">
                <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">Scheduling</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Efficiently schedule hearings, meetings, and appointments,
                  ensuring no conflicts and timely proceedings.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <div className="rounded-full bg-gray-200 p-3 dark:bg-gray-700">
                <DocumentIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">Document Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily upload, organize, and access case-related documents
                  securely, ensuring data integrity and confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 4H10c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
    </svg>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 4H10L4 14V20H20V4Z" />
      <path d="M15 18H9V20H15V18Z" />
      <path d="M16 14H8V16H16V14Z" />
      <path d="M16 10H8V12H16V10Z" />
    </svg>
  )
}
