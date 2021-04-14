interface paymentResult {
  coins: number[][]
  over: number
}

function cmp(a: paymentResult, b: paymentResult): paymentResult {
  if (a.over < b.over) {
    return a
  }
  if (a.over > b.over) {
    return b
  }
  const an = a.coins.reduce((acc, cur) => acc + cur[1], 0)
  const bn = b.coins.reduce((acc, cur) => acc + cur[1], 0)
  if (an < bn) {
    return a
  }
  return b
}

function payment(cost: number, coins: number[]): paymentResult {
  if (cost <= 0) {
    return {
      coins: [],
      over: 0,
    }
  }

  // 最大の硬貨で払い切る場合
  const vk = coins[0]
  const nk = Math.ceil(cost / vk)

  // もしあまりが0だったらそれが最適
  if (cost % vk === 0) {
    return {
      coins: [[vk, nk]],
      over: 0,
    }
  }

  // これ以下の硬貨がない場合
  if (coins.length === 1) {
    return {
      coins: [[vk, nk]],
      over: vk * nk - cost,
    }
  }

  // あまりが0にならないなら最大必要個数から0まで調べる
  // まずは最大必要個数を最適とする
  let best = {
    coins: [[vk, nk]],
    over: vk * nk - cost,
  }
  for (let n = nk - 1; n >= 0; n--) {
    const cur = payment(cost - vk * n, coins.slice(1))
    if (n > 0) {
      cur.coins.unshift([vk, n])
    }
    best = cmp(best, cur)
  }

  return best
}

export { payment }
