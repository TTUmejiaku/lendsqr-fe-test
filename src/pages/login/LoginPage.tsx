import { lendSqrLogo } from "@/assets/svgs";
import { pabloSignIn } from "@/assets/pngs";
import { LoginForm } from "./components";
import { Container } from "@/components";

export default function LoginPage() {
  return (
    <div className='login '>
      <Container containerClasses=''>
        <img src={lendSqrLogo} alt='Lendsqr logo' />
        <div className='login__content '>
          <aside className='login__image-panel'>
            <img src={pabloSignIn} alt='Sign in to lendsqr' className='' />
          </aside>
          <aside className='login__form-panel '>
            <h2 className='header-text'>Welcome!</h2>
            <p>Enter details to login.</p>
            <LoginForm />
          </aside>
        </div>
      </Container>
    </div>
  );
}
