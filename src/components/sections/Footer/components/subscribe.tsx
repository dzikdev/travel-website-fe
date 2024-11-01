import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import SendIcon  from "../../../../assets/img/subscribe/send-icon.png"
import SubscribeBgLowerRight from '../../../../assets/img/subscribe/bg-absolute-lower-right.png'


const Subscribe = () => {
  return (
    <div className="py-20">
      <div className="relative w-full px-[186px]">
        <div className="absolute bottom-[-80px] right-[64px]">
            <img src={SubscribeBgLowerRight} alt="" />
          </div>
        <div
          className="relative bg-[#DFD7F9] rounded-[129px_20px_20px_20px] h-[400px] bg-no-repeat px-[154px] flex flex-col items-center justify-center space-y-16"
          style={{
            backgroundImage: `url('/img/bg-lower-left.png'), url('/img/bg-upper-right.png')`,
            backgroundPosition: 'left bottom, right top',
            backgroundSize: '278px 375px, 204px 276px',
          }}
        >
          <div className="absolute top-[-35px] right-[-35px]">
            <div className="relative w-[70px] h-[70px] rounded-full" style={{
              background: 'linear-gradient(201.65deg, #747DEF 10.27%, #5E3BE1 100%)'
            }}>
              <div className="w-full h-full flex items-center justify-center">
                <img src={SendIcon} alt="" />
              </div>
            </div>
          </div>
          <h3 className='text-[#5E6282] text-4xl not-italic font-semibold leading-[54px] text-center'>Subscribe to get information, latest news and other interesting offers about Jadoo</h3>
          <div className="flex w-full items-center justify-center space-x-2">
            <Input type="email" placeholder="Your email" className="w-[421px] h-[68px] rounded-[10px] bg-white"/>
            <Button type="submit" className="w-[180px] h-[68px] rounded-[10px]" style={{
              background: 'linear-gradient(180deg, #ff946d 0%, #ff7d68 100%)'
            }}>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe