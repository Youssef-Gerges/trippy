import Hero from "../components/HeroComponent/Hero";
import SectionHeading from '../components/SectionHeading/SectionHeading';
import TripCard from '../components/TripCardComponent/TripCard';
import heroImage from "../assets/img.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/8.jpg";

export default function Service() {
  return (
    <div>
      <Hero
        cName='hero-mid'
        image={heroImage}
        title="Service"
      />

      <SectionHeading
        heading="Recent Trips"
        subHeading="You can discover unique destinations using google maps."
        containerName="cards-container"
      >
        <TripCard
          img={img5}
          heading="Trip in Indonesia"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum, amet vel maiores veniam aliquam. Dolorem iure ex voluptas dolore? Necessitatibus facilis minima deserunt enim doloribus eaque vero laboriosam saepe."
        />
        <TripCard
          img={img6}
          heading="Trip in Malaysia"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum, amet vel maiores veniam aliquam. Dolorem iure ex voluptas dolore? Necessitatibus facilis minima deserunt enim doloribus eaque vero laboriosam saepe."
        />
        <TripCard
          img={img7}
          heading="Trip in France"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum, amet vel maiores veniam aliquam. Dolorem iure ex voluptas dolore? Necessitatibus facilis minima deserunt enim doloribus eaque vero laboriosam saepe."
        />
      </SectionHeading>

    </div>
  )
}
