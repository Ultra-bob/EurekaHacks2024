import NavBar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import { signIn, signOut, useSession } from "next-auth/react";
import HomeIcon from "@/components/HomeIcon/HomeIcon";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm"

export default function Register() {
    // <button onClick={() => signOut()}>Logout</button>
    const { data, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn("google", { callbackUrl: "/register" });
        },
    });
    return (
        <>
            <NavBar />
            <HomeIcon />
            <hr />
            <RegistrationForm />
            <Footer />
        </>
    )
}
