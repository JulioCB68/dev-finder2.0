export default function Loading() {
  return (
    <div className="flex h-56 w-96 cursor-pointer flex-col justify-between rounded-lg border bg-[#f6f8fa] bg-card p-6 text-card-foreground shadow-sm">
      <div className="flex flex-row items-center justify-between">
        <div className="flex w-full items-center">
          <div className="mr-3 h-8 w-9 animate-pulse rounded-full bg-gray-300 ease-linear" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-300 ease-linear" />
        </div>
      </div>
      <div>
        <div className="line-clamp-4 w-full">
          <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-300 ease-linear" />
          <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-300 ease-linear" />
        </div>
      </div>
      <div>
        <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-gray-300 ease-linear" />
      </div>
    </div>
  )
}
