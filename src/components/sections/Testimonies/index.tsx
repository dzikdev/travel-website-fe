import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

function Testimonies() {
  return (
    <div className="grid grid-cols-2 pt-[5rem]">
      <div>
        <div className="text-sm font-bold text-[#5E6282] pb-3">
          TESTIMONIALS
        </div>
        <div className="text-6xl font-bold font-serif pb-3">
          What people say
          about Us.
        </div>
      </div>
      <div>
        <Card className="w-[350px] relative">
          <CardContent>
            <Avatar className="absolute top-[-32px] left-[-32px]">
              <AvatarImage src="https://images.unsplash.com/photo-1640951613773-54706e06851d" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
            <div className="text-justify pt-5">
              “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
            </div>
            <div className="font-bold pt-4">
              Mike taylor
            </div>
            <div className="text-sm">
              Lahore, Pakistan
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Testimonies
