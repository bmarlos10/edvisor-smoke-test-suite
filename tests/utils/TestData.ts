import { faker } from '@faker-js/faker';

export const testData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    position: faker.person.jobTitle(),
    regionCode: '+1',
    phone: faker.string.numeric(10),
    email: faker.internet.email(),
    password: '123Test@Edvisor',
    companyName: faker.person.jobTitle(),
    numberOfices: '10',
    primaryOfficeAddress: '1808 St Clair',
    city: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    cardName: faker.person.firstName(),
    cardNumber: faker.finance.creditCardNumber(),
    cardCvc: faker.finance.creditCardCVV(),
    expiryMonth: faker.date.future().getMonth() + 1,
    expiryYear: faker.date.future().getFullYear().toString().slice(-2),
    expiryDate: '11/28'
};
