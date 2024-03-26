import { FrownIcon } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-black p-4 text-center">
      <div className="space-y-2">
        <div className="flex items-center justify-center">
          <FrownIcon className="h-16 w-16 pr-4 text-red-500" />
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">
            Oops! Page Not Found
          </h1>
        </div>
        <p className="mx-auto max-w-[600px] text-gray-100 dark:text-gray-400 md:text-xl/relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
      <Link
        className="inline-flex h-10 items-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        href="/"
      >
        Go Back Home
      </Link>
    </div>
  )
}
