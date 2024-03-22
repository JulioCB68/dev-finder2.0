import { Badge } from '@/components/ui/badge'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as CardUIComponent,
} from '@/components/ui/card'
import { Book } from 'lucide-react'

interface ICardProps {
  id: number
  name: string
  visibility: string
  description: string
  forksCount: number
  watchersCount: number
}

export default function CardRepo({
  id,
  name,
  visibility,
  description,
  forksCount,
  watchersCount,
}: ICardProps) {
  return (
    <CardUIComponent
      key={id}
      className="flex h-56 w-96 cursor-pointer flex-col justify-between bg-[#f6f8fa]"
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Book className="mr-3" />
          <CardTitle>{name}</CardTitle>
        </div>
        <Badge variant="secondary">{visibility}</Badge>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-4">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="secondary">{forksCount}</Badge>
        <Badge variant="secondary">{watchersCount}</Badge>
      </CardFooter>
    </CardUIComponent>
  )
}
