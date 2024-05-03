import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { createClient } from '@/utils/supabase/server'

export default async function Component() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error) {
    console.error(error)
    return <div>Error loading user profile</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="flex items-center gap-6 p-6 md:p-8 lg:p-10">
        <Avatar className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
          <AvatarImage
            alt="@shadcn"
            src="https://t4.ftcdn.net/jpg/02/95/96/79/240_F_295967926_T2nUnmhQc00dwwp3KsvJSPHMP2xhekry.jpg"
            className="h-full w-full rounded-full object-cover"
          />
          <AvatarFallback>
            {data?.user.email?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="text-2xl font-bold">
            {data?.user.email?.split('@')[0]}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {data?.user.email}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container grid gap-4 py-6 md:py-8 lg:py-10">
          <div className="grid gap-1">
            <h3 className="text-lg font-medium">About</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Seasoned attorney with a decade of legal expertise in civil
              litigation and corporate law. Known for meticulous attention to
              detail and a strategic approach to case management. Specializes in
              contract negotiation, dispute resolution, and regulatory
              compliance. Successfully represented clients in complex legal
              matters, achieving favorable outcomes in high-stakes litigation.
              Adept at navigating intricate legal landscapes to protect client
              interests.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-medium">Worked Courts</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                United States District Court for the District of Columbia
              </Badge>
              <Badge variant="secondary">
                United States District Court for the District of Maryland
              </Badge>
              <Badge variant="secondary">
                United States District Court for the District of Virginia
              </Badge>
              <Badge variant="secondary">
                United States District Court for the District of West Virginia
              </Badge>
            </div>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-medium">Achievements</h3>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <TrophyIcon className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="font-medium">
                    Top 40 Under 40 Lawyers in Washington, D.C.
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Recognized by the National Trial Lawyers Association for
                    excellence in the legal profession.
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="font-medium">Win Johnny depp</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Successfully defended Johnny Depp in a high-profile libel
                    case against a major British tabloid.
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="font-medium">Win Elon Musk</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Successfully defended Elon Musk in a high-profile libel case
                    against a major British tabloid.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
