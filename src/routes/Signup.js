import Hero from "../components/HeroComponent/Hero";
import heroImage from "../assets/1.jpg"
import SignupForm from "../components/SignUpForm/SignupForm";

export default function Signup() {
    return (
        <div>
            <Hero
                cName='hero-mid'
                image={heroImage}
                title="Sign Up"
            />

            <SignupForm />
        </div>
    )
}
