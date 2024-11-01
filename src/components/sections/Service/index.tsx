import  CalculatedImage from '../../../assets/calculated.svg';
import  CustomizationImage from '../../../assets/customization.svg';
import  EventImage from '../../../assets/event.svg';
import  FlightImage from '../../../assets/flight.svg';

export default function Services() {
  return (
    <section className="px-4 py-12 mx-auto max-w-5xl relative">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2 text-center">
          CATEGORY
        </p>
        <h2 className="text-3xl font-bold text-center">
          We Offer Best Services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 content-center">
            <div className="max-w-sm rounded overflow-hidden h-52">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img className='w-40 h-32' src={CalculatedImage} alt="" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center w-full">Calculated Weather</h3>
                    <p className="text-sm text-center">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden h-52">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img className='w-40 h-32' src={FlightImage} alt="" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center w-full">Best Flights</h3>
                    <p className="text-sm text-center">Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden h-52">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img className='w-40 h-32' src={EventImage} alt="" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center w-full">Local Events</h3>
                    <p className="text-sm text-center">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden h-52">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img className='w-40 h-32' src={CustomizationImage} alt="" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center w-full">Customization</h3>
                    <p className="text-sm text-center">We deliver outsourced aviation services for military customers</p>
                </div>
            </div>
      </div>
    </section>
  )
}