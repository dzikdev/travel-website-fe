const Footer = () => {
  return (
    <>
      <div className="px-[186px] py-20">
        <div className="flex justify-between">
            <div className="flex flex-col space-y-4 w-[250px]">
              <h3 className="h-[66px]font-normal text-[44px] leading-[66px] text-[#181E4B]">Jadoo.</h3>
              <p>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className="flex space-x-20">
              <div className="flex flex-col space-y-4">
                <h4 className="h-[66px] font-bold text-[21px] leading-[124.5%] text-[#080809]">Company</h4>
                <div>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">About</p>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">Careers</p>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">Mobile</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="h-[66px] font-bold text-[21px] leading-[124.5%] text-[#080809]">Contact</h4>
                <div>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">Help/FAQ</p>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">Press</p>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">Affilates</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="h-[66px] font-bold text-[21px] leading-[124.5%] text-[#080809]">More</h4>
                <div>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">Airlinefees</p>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">Airline</p>
                  <p className="font-medium text-lg leading-[124.5%] text-[#5E6282]">Low fare tips</p>
                </div>
              </div>
            </div>
            <div >
                <div className="flex space-x-6">
                  <div className="w-[45px] h-[45px] rounded-full shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
                    
                  </div>
                  <div className="w-[45px] h-[45px] rounded-full shadow-[0px_2px_10px_rgba(0,0,0,0.1)]" style={{
                    background: 'conic-gradient(from 180deg at 50% 50%, #B8D2F1 0deg, #F289AA 60deg, #C68BF0 106.09deg, #D164DA 153.75deg, #C963E8 221.25deg, #BFC2E8 258.75deg, #FFC999 288.75deg, #D0D8C9 315deg, #BAD0F1 334.13deg, #CED8CB 358.97deg, rgba(255, 255, 255, 0) 360deg)'
                  }}>

                  </div>
                  <div className="w-[45px] h-[45px] rounded-full shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">

                  </div>
                </div>
                <h3 className="mt-6 font-normal text-xl leading-[124.5%] tracking-[0.005em] text-[#5E6282]">Discover our app</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer