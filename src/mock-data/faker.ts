import { faker } from "@faker-js/faker";

export function generateUserData() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);

  return {
    id: faker.string.uuid(),
    createdAt: faker.date.past().toISOString(),
    orgName: faker.helpers.arrayElement([
      "Lendsqr",
      "Lendstar",
      "Irorun",
      "Apple",
      "Amazon",
      "Sterling",
    ]),
    status: faker.helpers.arrayElement([
      "Inactive",
      "Pending",
      "Blacklisted",
      "Active",
    ]),
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
        min: 0,
        max: 200000,
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
      phoneNumber: faker.phone.number(),
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

const userData = Array.from({ length: 500 }, generateUserData);

const jsonData = JSON.stringify(userData, null, 2);

console.log(jsonData);
