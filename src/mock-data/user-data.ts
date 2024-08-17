import { UserInfo, CategoryList } from "@/types";

export const userInfo = (userData: UserInfo) => {
  const {
    profile: {
      firstName,
      lastName,
      phoneNumber,
      email,
      bvn,
      gender,
      maritalStatus,
      children,
      typeOfResidence,
    },
    educationAndEmployment: {
      level,
      employmentStatus,
      sector,
      duration,
      officeEmail,
      monthlyIncome,
      loanRepayment,
    },
    socials: { facebook, instagram, twitter },
    guarantor: {
      email: guarantorEmail,
      firstName: guarantorFirstName,
      lastName: guarantorLastName,
      phoneNumber: guarantorPhoneNumber,
      relationship: guarantorRelationship,
    },
  } = userData;

  const PERSONAL_INFO_DATA: CategoryList[] = [
    {
      id: crypto.randomUUID(),
      label: "FULL NAME",
      text: `${firstName} ${lastName}`,
    },
    {
      id: crypto.randomUUID(),
      label: "PHONE NUMBER",
      text: phoneNumber,
    },
    {
      id: crypto.randomUUID(),
      label: "EMAIL ADDRESS",
      text: email,
    },
    {
      id: crypto.randomUUID(),
      label: "BVN",
      text: bvn,
    },
    {
      id: crypto.randomUUID(),
      label: "GENDER",
      text: gender,
    },
    {
      id: crypto.randomUUID(),
      label: "MARITAL STATUS",
      text: maritalStatus,
    },
    {
      id: crypto.randomUUID(),
      label: "CHILDREN",
      text: children,
    },
    {
      id: crypto.randomUUID(),
      label: "TYPE OF RESIDENCE",
      text: typeOfResidence,
    },
  ];

  const EDUCATION_AND_EMPLOYMENT_DATA: CategoryList[] = [
    {
      id: crypto.randomUUID(),
      label: "LEVEL OF EDUCATION",
      text: level,
    },
    {
      id: crypto.randomUUID(),
      label: "EMPLOYMENT STATUS",
      text: employmentStatus,
    },
    {
      id: crypto.randomUUID(),
      label: "SECTOR OF EMPLOYMENT",
      text: sector,
    },
    {
      id: crypto.randomUUID(),
      label: "DURATION OF EMPLOYMENT",
      text: duration,
    },
    {
      id: crypto.randomUUID(),
      label: "OFFICE EMAIL",
      text: officeEmail,
    },
    {
      id: crypto.randomUUID(),
      label: "MONTHLY INCOME",
      text: `₦${monthlyIncome![1]} - ₦${monthlyIncome![0]}`,
    },
    {
      id: crypto.randomUUID(),
      label: "LOAN REPAYMENT",
      text: loanRepayment,
    },
  ];

  const SOCIALS_DATA: CategoryList[] = [
    {
      id: crypto.randomUUID(),
      label: "TWITTER",
      text: twitter,
    },
    {
      id: crypto.randomUUID(),
      label: "FACEBOOK",
      text: facebook,
    },
    {
      id: crypto.randomUUID(),
      label: "INSTAGRAM",
      text: instagram,
    },
  ];

  const GUARANTOR_1_DATA: CategoryList[] = [
    {
      id: crypto.randomUUID(),
      label: "FULL NAME",
      text: `${guarantorFirstName} ${guarantorLastName}`,
    },
    {
      id: crypto.randomUUID(),
      label: "PHONE NUMBER",
      text: guarantorPhoneNumber,
    },
    {
      id: crypto.randomUUID(),
      label: "EMAIL ADDRESS",
      text: guarantorEmail || "debby@gmail.com",
    },
    {
      id: crypto.randomUUID(),
      label: "RELATIONSHIP",
      text: guarantorRelationship,
    },
  ];

  return {
    PERSONAL_INFO_DATA,
    EDUCATION_AND_EMPLOYMENT_DATA,
    SOCIALS_DATA,
    GUARANTOR_1_DATA,
  };
};
