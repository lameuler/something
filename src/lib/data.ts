import { faker } from '@faker-js/faker';

export const data = generateRandom(6131, 50)

export function generateRandom(seed: number, length: number) {
    faker.seed(seed)

    return Array(length).fill(0).map(() => {
        const sex = faker.number.binary() === '0' ? 'male' : 'female'
        const firstName = faker.person.firstName(sex)
        const lastName = faker.person.lastName(sex)
        const email = faker.internet.email({ firstName, lastName })
        const date = faker.date.past({ years: 5, refDate: Date.UTC(2024) })
        const message = faker.hacker.phrase()
        return { sex, name: firstName+' '+lastName, email, date, message }
    })
}