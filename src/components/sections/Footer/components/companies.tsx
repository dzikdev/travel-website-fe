import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import alitalia from '../../../../assets/img/companies/alitalia.png'
import axon from '../../../../assets/img/companies/axon.png'
import expedia from '../../../../assets/img/companies/expedia.png'
import jetstar from '../../../../assets/img/companies/jetstar.png'
import qantas from '../../../../assets/img/companies/qantas.png'

const Companies = () => {
  const logos = [
    { alt: 'alitalia logo', image: alitalia },
    { alt: 'axon logo', image: axon },
    { alt: 'expedia logo', image: expedia },
    { alt: 'jetstar logo', image: jetstar },
    { alt: 'qantas logo', image: qantas },
    { alt: 'alitalia logo', image: alitalia },
    { alt: 'axon logo', image: axon },
    { alt: 'expedia logo', image: expedia },
    { alt: 'jetstar logo', image: jetstar },
    { alt: 'qantas logo', image: qantas },
  ];
  
  return (
    <div className="w-full px-[186px]">
      <Carousel className="w-full" 
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-full py-20">
          {logos.map((item, index) => (
            <CarouselItem key={index} className="basis-1/5">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="overflow-visible filter grayscale hover:grayscale-0 hover:shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)] rounded-[10px] transition-all duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Companies;
