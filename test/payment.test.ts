import { payment } from '@/src/payment'

test('payment', () => {
  expect(payment(0, [1])).toStrictEqual({ coins: [], over: 0 })
  expect(payment(10, [1])).toStrictEqual({ coins: [[1, 10]], over: 0 })
  expect(payment(10, [2])).toStrictEqual({ coins: [[2, 5]], over: 0 })
  expect(payment(10, [2, 1])).toStrictEqual({ coins: [[2, 5]], over: 0 })
  expect(payment(5, [10, 7])).toStrictEqual({ coins: [[7, 1]], over: 2 })
  expect(payment(15, [50, 12, 8, 7, 2, 1])).toStrictEqual({
    coins: [
      [8, 1],
      [7, 1],
    ],
    over: 0,
  })
})
