import FooterBar from "../components/footerBar/footerBar";
import HeaderSignUp from "../components/signUpComponent/headerSignUp/headerSignUp";
import SignUpBar from "../components/signUpComponent/signUpBar/signUpBar";

export default function SignUp() {
    return (
        <div id="signUpBody">
            <HeaderSignUp/>
            <SignUpBar/>
            <FooterBar/>
        </div>
    )
}
