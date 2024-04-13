'use client'

import { useRouter } from 'next/navigation'
import { UserDropdown } from './user-dropdown'

export function Header() {
  const router = useRouter()

  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex h-14 w-full items-center justify-center border-b border-gray-200 bg-white">
      <div className="flex h-full w-full items-center justify-between px-3 md:px-6">
        <div className="flex w-full items-center justify-start">
          <h4
            className="cursor-pointer text-2xl font-light"
            onClick={() => {
              router.push('/')
            }}
          >
            CCMS
          </h4>
        </div>
        <div className="flex w-full items-center justify-end">
          <UserDropdown />
        </div>
      </div>
    </div>
  )
}
