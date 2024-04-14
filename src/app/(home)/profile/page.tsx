'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { getGithubUser } from '@/services/github'
import { useQuery } from '@tanstack/react-query'

import {
  CalendarIcon,
  CheckSquareIcon,
  CreditCardIcon,
  FileIcon,
  FilePlusIcon,
  MailIcon,
  MessageSquareIcon,
} from 'lucide-react'

export default function Profile() {
  const { data: user } = useQuery({
    queryKey: ['githubUser'],
    queryFn: getGithubUser,
  })

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Account</h1>
        <Button size="sm">Upgrade</Button>
      </div>
      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:gap-4 lg:gap-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-12 w-12 border">
              <AvatarImage
                alt="User avatar"
                src={user?.avatar_url}
                className="cursor-pointer"
              />
            </Avatar>
            <div className="flex flex-col items-start">
              <CardTitle className="text-base">{user?.name}</CardTitle>
              <CardDescription className="text-sm">
                {user?.email}
              </CardDescription>
            </div>
          </div>
          <Button className="md:ml-auto" size="sm">
            Edit Profile
          </Button>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold">Plan</h2>
              <Button variant="outline">Change</Button>
            </div>
            <div className="grid gap-1 text-sm">
              <div className="flex items-center gap-2">
                <CheckSquareIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">Unlimited Storage</div>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquareIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">10 Team Members</div>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquareIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">Advanced Reporting</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold">Billing</h2>
              <Button variant="outline">Manage</Button>
            </div>
            <div className="grid gap-1 text-sm">
              <div className="flex items-center gap-2">
                <CreditCardIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">**** **** **** 1234</div>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">Expires 12/24</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border">
        <CardHeader className="items-start">
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y">
            <li className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">Q4 Roadmap.pdf</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                2 days ago
              </div>
            </li>
            <li className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">Q4 Roadmap.pdf</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                2 days ago
              </div>
            </li>
            <li className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">Q4 Roadmap.pdf</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                2 days ago
              </div>
            </li>
            <li className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">Q4 Roadmap.pdf</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                2 days ago
              </div>
            </li>
            <li className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div className="font-medium">Q4 Roadmap.pdf</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                2 days ago
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="gap-4 p-4 text-left md:gap-6 md:p-8">
        <CardHeader>
          <CardTitle>Additional features</CardTitle>
          <CardDescription>
            Unlock premium features to supercharge your productivity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full items-center justify-between text-left">
            <div className="items-center gap-4">
              <div className="my-8 flex items-center gap-4">
                <CalendarIcon className="h-10 w-10" />
                <div>
                  <div className="font-semibold">Calendar</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Schedule meetings and manage your time
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FilePlusIcon className="h-10 w-10" />
                <div>
                  <div className="font-semibold">File plus</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Create and edit documents with ease
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="my-8 flex items-center gap-4">
                <MailIcon className="h-10 w-10" />
                <div>
                  <div className="font-semibold">Mail</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Access your email from within the app
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageSquareIcon className="h-10 w-10" />
                <div>
                  <div className="font-semibold">Chat</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Collaborate with your team using built-in chat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
