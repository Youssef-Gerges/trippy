import Hero from "../components/HeroComponent/Hero";
import heroImage from "../assets/2.jpg";
import ContactForm from "../components/ContactFormComponent/ContactForm";

export default function Contact() {
  return (
    <div>
      <Hero
        cName='hero-mid'
        image={heroImage}
        title="Contact"
      />

      <ContactForm />
    </div>
  )
}
