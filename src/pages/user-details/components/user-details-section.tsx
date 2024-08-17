import { userInfo } from "@/mock-data";
import { CategoryList, UserInfo } from "@/types";

type UserDetailsCategoryProps = {
  title: string;
  categoryList: CategoryList[];
};

export default function UserDetailsSection({
  userData,
}: {
  userData: UserInfo;
}) {
  const {
    EDUCATION_AND_EMPLOYMENT_DATA,
    GUARANTOR_1_DATA,
    PERSONAL_INFO_DATA,
    SOCIALS_DATA,
  } = userInfo(userData);

  return (
    <div className='userDetailsSection mt-30 box-shadow'>
      <UserDetailsCategory
        categoryList={PERSONAL_INFO_DATA}
        title='Personal Information'
      />
      <UserDetailsCategory
        categoryList={EDUCATION_AND_EMPLOYMENT_DATA}
        title='Education and Employment'
      />
      <UserDetailsCategory categoryList={SOCIALS_DATA} title='Socials' />
      <UserDetailsCategory
        categoryList={GUARANTOR_1_DATA}
        title='Guarantor 1'
      />
      <UserDetailsCategory
        categoryList={GUARANTOR_1_DATA}
        title='Guarantor 2'
      />
    </div>
  );
}

const UserDetailsCategory = ({
  title,
  categoryList,
}: UserDetailsCategoryProps) => {
  return (
    <article className='userDetailsCategory '>
      <h3 className='userDetailsCategory__title'>{title}</h3>
      <section className='userDetailsCategory__wrapper'>
        {categoryList.map(({ id, label, text }) => (
          <div key={id} className='userDetailsCategory__item '>
            <small className='userDetailsCategory__label'>{label}</small>
            <p className='userDetailsCategory__text'>{text}</p>
          </div>
        ))}
      </section>
    </article>
  );
};
