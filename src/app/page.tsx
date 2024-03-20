'use client'

import BarChart from '@/components/BarChart'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Book,
  Bug,
  CheckCircle,
  File,
  GitBranch,
  GitPullRequest,
  Github,
  Home as HomeIcon,
  Pin,
  Reply,
  SettingsIcon,
  SignalIcon,
  User,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-gradient-to-br from-green-400 to-blue-500 to-pink-500 to-purple-600 p-8 text-center text-gray-900 dark:text-gray-100">
      <div className="flex rounded-lg bg-gray-100/90 backdrop-blur-lg dark:bg-gray-800/50">
        <aside className="w-72 rounded-s-lg border-r bg-white p-6 lg:flex">
          <div className="flex w-60 flex-col">
            <div className="flex h-14 items-center">
              <div className="flex items-center gap-2 font-semibold">
                <Github className="h-6 w-6" />
                <span className="">DevFinder</span>
              </div>
            </div>
            <div className="grid flex-1 gap-4 py-4">
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-4 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <HomeIcon className="h-4 w-4 opacity-50" />
                Home
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <User className="h-4 w-4 opacity-50" />
                Profile
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium dark:bg-gray-800 [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <Book className="h-4 w-4 opacity-50" />
                Repositories
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <GitBranch className="h-4 w-4 opacity-50" />
                Projects
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <File className="h-4 w-4 opacity-50" />
                Packages
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <Bug className="h-4 w-4 opacity-50" />
                Issues
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <GitPullRequest className="h-4 w-4 opacity-50" />
                Pull requests
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <Reply className="h-4 w-4 opacity-50" />
                Discussions
              </div>
              <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-5 text-sm font-medium [&:hover]:bg-gray-100 dark:[&:hover]:bg-gray-800">
                <CheckCircle className="h-4 w-4 opacity-50" />
                Actions
              </div>
              <Button className="mt-auto" variant="outline">
                Logout
              </Button>
            </div>
          </div>
        </aside>
        <div className="h-[55rem] flex-1 overflow-y-scroll px-8">
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
                  alt="User"
                  src="/placeholder.svg?height=32&width=32"
                  className="cursor-pointer"
                />
              </Avatar>
            </div>
          </header>
          <Separator />
          <div className="mt-14">
            <h2 className="mb-4 flex items-center text-left text-lg font-bold">
              <Pin className="mr-3 rotate-45" />
              Pinned Repository
            </h2>
            <div className="flex flex-wrap gap-4 pt-4">
              <Card className="flex h-56 w-96 cursor-pointer flex-col justify-between bg-[#f6f8fa]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <Book className="mr-3" />
                    <CardTitle>golang/go</CardTitle>
                  </div>
                  <Badge variant="secondary">public</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-5">
                    Go is an open source programming language that makes it easy
                    to build simple, reliable, and efficient software.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="secondary">74.5K</Badge>
                  <Badge variant="secondary">212</Badge>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="mb-4 flex items-center text-left text-lg font-bold">
              <Pin className="mr-3 rotate-45" />
              Pinned Repository
            </h2>
            <div className="flex flex-wrap gap-4 pt-4">
              <Card className="flex h-56 w-96 cursor-pointer flex-col justify-between bg-[#f6f8fa]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <Book className="mr-3" />
                    <CardTitle>golang/go</CardTitle>
                  </div>
                  <Badge variant="secondary">public</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-5">
                    Go is an open source programming language that makes it easy
                    to build simple, reliable, and efficient software.
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge variant="secondary">74.5K</Badge>
                  <Badge variant="secondary">212</Badge>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="mb-4 text-lg font-bold">Activity</h2>
            <BarChart className="h-[20rem] w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
