import { Star } from "lucide-react";
import { UserInfo } from "@/types";
import { personIcon } from "@/assets/svgs";

export default function UserInfoHeader({ userData }: { userData: UserInfo }) {
  const {
    profile: { firstName, lastName, avatar },
    accountNumber,
    accountBalance,
  } = userData;

  return (
    <section className='userInfoHeader box-shadow mt-46'>
      <div className='userInfoHeader__nameAndAvatarWrapper '>
        <div className={`userInfoHeader__avatar ${avatar ? "" : "bg-color"}`}>
          <img src={avatar ? avatar : personIcon} alt='' />
        </div>
        <div className='userInfoHeader__name'>
          <h3> {`${firstName} ${lastName}`}</h3>
          <p>LSQFf587g90</p>
        </div>
      </div>

      <div className='userInfoHeader__ratingAndAccountWrapper '>
        <div className='userInfoHeader__rating '>
          <p>User&apos;s Tier</p>
          <div className='userInfoHeader__stars'>
            <Star fill='#E9B200' />
            <Star />
            <Star />
          </div>
        </div>

        <div className='userInfoHeader__account'>
          <h3>{`₦${accountBalance}`}</h3>
          <p>{`${accountNumber}/Providus Bank`}</p>
        </div>
      </div>
    </section>
  );
}
