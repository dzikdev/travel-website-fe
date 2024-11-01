import lady from '@/assets/lady.svg'
import play from '@/assets/play.svg'
import { Button } from '@/components/ui/button'

export const JumboTron = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col justify-center w-1/2 p-4">
        <h4 className="text-md text-red-500 p-2">Best Destinations around the world</h4>
        <h1 className="text-6xl text-extrabold text-gray-800 p-3">Travel, enjoy and live a new and full life</h1>
        <p className="text-sm text-gray-500 p-3">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
        <div className='flex flex-row items-center space-x-3 p-3'> 
          <Button className='bg-orange-400 shadow-xl hover:bg-orange-300 hover:text-white hover:border-orange-300'>Find Out More</Button> 
          <Button className='rounded-full bg-red-500 shadow-xl w-10 h-10 hover:bg-red-400 hover:border-red-400'><img className='w-12' src={play} /></Button>
          <div className='text-center text-gray-500 shadow-xl'>Play Demo</div>
        </div>
      </div>
      <div className="w-1/2 p-4 justify-center">
        <img className='object-fit' src={lady} />
      </div>
    </div>
  )
}