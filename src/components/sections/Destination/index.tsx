import { Card, CardContent } from "@/components/ui/card"
import  EuropeImg from '../../../assets/europe.svg';
import  LondonImg from '../../../assets/london.svg';
import  RomaImg from '../../../assets/roma.svg';
import  NavigationImg from '../../../assets/navigation.svg';

export default function Destinations() {
  const destinations = [
    {
      image: RomaImg,
      city: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip"
    },
    {
      image: LondonImg,
      city: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip"
    },
    {
      image: EuropeImg,
      city: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip"
    }
  ]

  return (
    <div className="px-4 py-12 mx-auto">
      <div className="text-center">
        <p className="text-sm">
          Top Selling
        </p>
        <h2 className="text-3xl font-bold">
          Top Destinations
        </h2>
      </div>
      
      <div className="flex flex-row mt-[60px] justify-center items-center">
        {destinations.map((destination, index) => (
            <Card
            key={index}
            className="hover:shadow-lg transition-shadow w-[315px] h-[420px] mx-3 rounded-lg"
            >
            <CardContent className="p-0">
                <img
                src={destination.image}
                alt={destination.city}
                className="w-full h-[300px] object-none rounded-t-lg" // Round the top of the image to match the card
                />
                <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg text-[#5E6282]">{destination.city}</h3>
                    <span className="text-lg text-primary text-[#5E6282]">
                    {destination.price}
                    </span>
                </div>
                <div className="flex items-center">
                    <span><img src={NavigationImg} alt="" /></span>
                    <span className="text-sm ml-2 text-[#5E6282]">{destination.duration}</span>
                </div>
                </div>
            </CardContent>
            </Card>
        ))}
        </div>

    </div>
  )
}