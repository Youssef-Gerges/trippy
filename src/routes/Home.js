import React from 'react'
import Hero from '../components/HeroComponent/Hero';
import Destination from '../components/DestinationComponent/Destination';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import TripCard from '../components/TripCardComponent/TripCard';
import heroImage from '../assets/12.jpg';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/8.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        cName='hero'
        image={heroImage}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        url="/"
        btnText="Travel Plan"
      />
      <SectionHeading
        heading="Popular Destinations"
        subHeading="Tours give you the opportunity to see alot, within a time frame"
      >
        <Destination
          heading="Taal Volcano, Batangas"
          details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur itaque praesentium pariatur earum odit quaerat deserunt, eaque dicta, dolorum numquam assumenda, cumque alias quibusdam atque aut sed reprehenderit sint deleniti?"
          img1={img1}
          img2={img2}
        />

        <Destination
          heading="Mt. Daguldul, Batangas"
          details="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur itaque praesentium pariatur earum odit quaerat deserunt, eaque dicta, dolorum numquam assumenda, cumque alias quibusdam atque aut sed reprehenderit sint deleniti?"
          img1={img3}
          img2={img4}
          reverse={true}
        />
      </SectionHeading>


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
