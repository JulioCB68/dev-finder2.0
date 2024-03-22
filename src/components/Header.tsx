import { parseCookies } from 'nookies'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { SettingsIcon, SignalIcon } from 'lucide-react'

export default function Header() {
  const user: GithubUser = JSON.parse(parseCookies().user)
  return (
    <header className="flex w-full items-center justify-between py-4">
      <div className="flex w-full flex-col items-start px-4">
        <p className="text-2xl">Search GitHub Profile</p>
        <p className="text-gray-500 dark:text-gray-400">
          Enter a GitHub username to see their profile and repositories
        </p>
      </div>
      <div className="w-[45rem]">
        <div className="flex gap-4">
          <Input id="username" placeholder="Enter a username" />
          <Button className="w-28">Search</Button>
        </div>
      </div>
      <div className="flex items-center gap-4 pl-20">
        <SignalIcon className="cursor-pointer text-gray-600" />
        <SettingsIcon className="cursor-pointer text-gray-600" />
        <Avatar>
          <AvatarImage
            alt="User avatar"
            src={user.avatar_url}
            className="cursor-pointer"
          />
        </Avatar>
      </div>
    </header>
  )
}
