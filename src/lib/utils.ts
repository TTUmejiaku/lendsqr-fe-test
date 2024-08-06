import { UserInfo } from "@/types";
import { faker } from "@faker-js/faker";

function parseStringToNumber(str: string) {
  return parseFloat(str.replace(/,/g, ""));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}

export const fetchUsers = async () => {
  try {
    const response = await fetch("/src/mock-data/USER_DATA.json");

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};

export function getActiveUsers(userData: UserInfo[], activeMonths: number) {
  const now = new Date();

  // Calculate the cutoff date
  const cutoffDate = new Date();
  cutoffDate.setMonth(now.getMonth() - activeMonths);

  const activeUsers = userData.filter((user) => {
    const lastActiveDate = new Date(user.lastActiveDate);

    return lastActiveDate >= cutoffDate;
  });

  return activeUsers.length;
}

export function getUsersWithLoan(userData: UserInfo[]) {
  const usersWithLoan = userData.filter(
    (user) => parseStringToNumber(user.educationAndEmployment.loanRepayment) > 0
  );

  return usersWithLoan.length;
}

export function getUsersWithSavings(userData: UserInfo[]) {
  const usersWithSavings = userData.filter((user) => user.accountBalance > 0);

  return usersWithSavings.length;
}

export function generateUserData() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);

  return {
    id: faker.string.uuid(),
    createdAt: faker.date.past().toISOString(),
    orgName: faker.company.name(),
    userName: faker.internet.userName(),
    lastActiveDate: faker.date.recent().toISOString(),
    profile: {
      firstName,
      lastName: faker.person.lastName(),
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      bvn: parseInt(faker.finance.accountNumber(11)),
      gender: sex,
      avatar: faker.image.avatar(),
      maritalStatus: faker.helpers.arrayElement([
        "Single",
        "Married",
        "Divorced",
        "Widowed",
      ]),
      children: faker.number.int({ min: 0, max: 5 }),
      address: faker.location.streetAddress(),
      typeOfResidence: faker.helpers.arrayElement([
        "Apartment",
        "House",
        "Condo",
        "Studio",
      ]),
      currency: faker.finance.currencyCode(),
    },
    accountNumber: faker.finance.accountNumber(10),
    accountBalance: parseFloat(faker.finance.amount()),
    educationAndEmployment: {
      level: faker.helpers.arrayElement([
        "High School",
        "Bachelor",
        "Master",
        "PhD",
      ]),
      employmentStatus: faker.helpers.arrayElement([
        "Employed",
        "Unemployed",
        "Self-employed",
      ]),
      sector: faker.company.buzzNoun(),
      duration: `${faker.number.int({ min: 1, max: 20 })} years`,
      officeEmail: faker.internet.email(),
      monthlyIncome: [
        faker.finance.amount({
          min: 1000,
          max: 5000,
          dec: 2,
          symbol: "",
          autoFormat: true,
        }),
        faker.finance.amount({
          min: 5000,
          max: 20000,
          dec: 2,
          symbol: "",
          autoFormat: true,
        }),
      ],
      loanRepayment: faker.finance.amount({
        min: 1000,
        max: 20000,
        dec: 2,
        symbol: "",
        autoFormat: true,
      }),
    },
    socials: {
      facebook: faker.internet.userName(),
      instagram: faker.internet.userName(),
      twitter: faker.internet.userName(),
    },
    guarantor: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phoneNumber: parseInt(faker.phone.number().replace(/\D/g, "")),
      email: faker.internet.email(),
      relationship: faker.helpers.arrayElement([
        "Parent",
        "Sibling",
        "Friend",
        "Spouse",
      ]),
      gender: faker.person.sex(),
    },
  };
}

// const userData = Array.from({ length: 500 }, generateUserData);

// const jsonData = JSON.stringify(userData, null, 2);

// console.log(jsonData);
