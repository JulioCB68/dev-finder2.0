import { Construction } from 'lucide-react'

export default function Building({ params }: { params: { name: string } }) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 py-10 text-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          We Are Building This Page({params.name})
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
          This page is currently under construction and will be available soon.
        </p>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Construction className="h-6 w-6" />
        <Construction className="h-6 w-6" />
        <Construction className="h-6 w-6 animate-ping" />
      </div>
    </div>
  )
}
