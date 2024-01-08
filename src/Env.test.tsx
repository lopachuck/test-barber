import { BARBERSHOP_LAT, BARBERSHOP_LNG } from './config/config'

test('google maps coordinats are correct', () => {
    expect(BARBERSHOP_LAT).not.toEqual(0)
    expect(BARBERSHOP_LAT).toEqual(59.436553)
    expect(BARBERSHOP_LNG).not.toEqual(0)
    expect(BARBERSHOP_LNG).toEqual(24.769528)
})
