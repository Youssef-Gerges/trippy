import Hero from "../components/HeroComponent/Hero";
import heroImage from "../assets/night.jpg";
import AboutComponent from "../components/AboutComponent/AboutComponent";

export default function About() {
  return (
    <div>
      <Hero
        cName='hero-mid'
        image={heroImage}
        title="About"
      />
      <AboutComponent
        heading="Our History"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis culpa unde ad soluta veritatis omnis quo nesciunt voluptate repellendus vel, id cupiditate sed dolorem magni non maiores vitae repudiandae fugiat."
      />
      <AboutComponent
        heading="Our Mission"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis culpa unde ad soluta veritatis omnis quo nesciunt voluptate repellendus vel, id cupiditate sed dolorem magni non maiores vitae repudiandae fugiat."
      />
      <AboutComponent
        heading="Our Vision"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis culpa unde ad soluta veritatis omnis quo nesciunt voluptate repellendus vel, id cupiditate sed dolorem magni non maiores vitae repudiandae fugiat."
      />
    </div>
  )
}
