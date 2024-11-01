import gambar from '@/assets/img-guidance.png';
import icon1 from '@/assets/icon-guidance-1.png';
import icon2 from '@/assets/icon-guidance-2.png';
import icon3 from '@/assets/icon-guidance-3.png';

function Guides() {
  return (
    <div className='grid grid-cols-2 items-center'>
      <div>
        <div className='text-sm font-bold text-[#5E6282] pb-3'>
          Easy and Fast
        </div>
        <div className='text-6xl font-bold font-serif pb-3'>
          Book your next trip in 3 easy steps
        </div>

        <div className='grid grid-cols-8 items-center py-4'>
          <img src={icon1} alt="destination" />
          <div className='col-span-5'>
            <div className='font-bold text-[#5E6282] pb-1'>
              Choose Destination
            </div>
            <div className='font-light leading-tight'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Urna, tortor tempus. 
            </div>
          </div>
        </div>

        <div className='grid grid-cols-8 items-center py-4'>
          <img src={icon2} alt="payment" />
          <div className='col-span-5'>
            <div className='font-bold text-[#5E6282] pb-1'>
              Make Payment
            </div>
            <div className='font-light leading-tight'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Urna, tortor tempus. 
            </div>
          </div>
        </div>

        <div className='grid grid-cols-8 items-center py-4'>
          <img src={icon3} alt="transportation" />
          <div className='col-span-5'>
            <div className='font-bold text-[#5E6282] pb-1'>
              Reach Airport on Selected Date
            </div>
            <div className='font-light leading-tight'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Urna, tortor tempus. 
            </div>
          </div>
        </div>

      </div>
      <div>
        <img src={gambar} className='object-cover' alt="guidance" />
      </div>
    </div>
  )
}

export default Guides
