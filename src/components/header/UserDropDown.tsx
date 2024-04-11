'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
// import { useAuth } from '@/hooks/useAuth'
import { LogOut } from 'lucide-react'
import Image from 'next/image'

export const UserDropdown = () => {
  // const { user, logout } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex w-full items-center justify-center md:justify-start">
          <Image
            height={36}
            width={36}
            src={'https://avatars.githubusercontent.com/u/126908332?v=4'}
            alt="SRM AP Logo"
            className="rounded-full"
          />
          <div className="ml-2 hidden flex-col items-start md:flex">
            <p className="text-xs font-medium text-gray-700 group-hover:text-gray-900">
              {/* {user?.displayName} */} Sakkurthi Sashank
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
              {/* {user?.emailAddress} */} sakkurthisashank@gmail.com
            </p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            // logout()
            console.log('Logout')
          }
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
