'use client'

import { useRouter } from 'next/navigation'
import { destroyCookie } from 'nookies'

import { Button } from '@/components/ui/button'

import { useMediaQuery } from '@/hooks/use-media-query'
import {
  Book,
  Bug,
  CheckCircle,
  File,
  GitBranch,
  GitPullRequest,
  Github,
  Home,
  LogOut,
  Reply,
  User,
} from 'lucide-react'

export default function AsideNav() {
  const route = useRouter()

  const isWideScreen = useMediaQuery('(min-width: 1536px)')

  function logOut() {
    destroyCookie(null, 'next-auth_github-code')
    route.replace('/login')
  }

  return (
    <aside
      className={`${isWideScreen ? 'flex' : 'hidden'} w-72 rounded-s-lg border-r bg-white p-6 lg:flex`}
    >
      <div className="flex w-60 flex-col">
        <div className="flex h-14 items-center">
          <div className="flex items-center gap-2 font-semibold">
            <Github className="h-6 w-6" />
            <span className="">DevFinder</span>
          </div>
        </div>
        <div className="grid flex-1 gap-4 py-4">
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-4 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('/')}
          >
            <Home className="h-4 w-4 opacity-50" />
            Home
          </div>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('/profile')}
          >
            <User className="h-4 w-4 opacity-50" />
            Profile
          </div>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium dark:bg-gray-800 [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('/repositories')}
          >
            <Book className="h-4 w-4 opacity-50" />
            Repositories
          </div>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('building/projects')}
          >
            <GitBranch className="h-4 w-4 opacity-50" />
            Projects
          </div>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('building/packages')}
          >
            <File className="h-4 w-4 opacity-50" />
            Packages
          </div>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('building/issues')}
          >
            <Bug className="h-4 w-4 opacity-50" />
            Issues
          </div>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('building/pull-requests')}
          >
            <GitPullRequest className="h-4 w-4 opacity-50" />
            Pull requests
          </div>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('building/discussions')}
          >
            <Reply className="h-4 w-4 opacity-50" />
            Discussions
          </div>
          <div
            className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800"
            onClick={() => route.push('building/actions')}
          >
            <CheckCircle className="h-4 w-4 opacity-50" />
            Actions
          </div>
          <Button
            className="mt-auto flex items-center"
            variant="outline"
            onClick={logOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  )
}
