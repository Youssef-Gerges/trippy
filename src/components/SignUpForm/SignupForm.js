import "./Signup.scss";

export default function SignupForm() {
    return (
        <div className="form-signup">
            <h1>Sign Up Now!</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Re-type Password" />
                <button>Create Account</button>
            </form>
        </div>
    )
}
