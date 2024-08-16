import { FileRoute } from "@/constants";
import { NavigateBack } from "@/components";

export default function UserDetailsTopNav() {
  return (
    <section className='userDetailsTopNav '>
      <NavigateBack href={FileRoute.Users} label='Back to users' />
      <div className='userDetailsTopNav__content '>
        <h2>User Details</h2>
        <div className='userDetailsTopNav__btns '>
          <button className='userDetailsTopNav__btns--blacklist'>
            BLACKLIST USER
          </button>
          <button className='userDetailsTopNav__btns--activate'>
            ACTIVATE USER
          </button>
        </div>
      </div>
    </section>
  );
}
