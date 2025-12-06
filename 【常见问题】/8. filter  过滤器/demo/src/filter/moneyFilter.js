export function formatMoney(str = "") {
  return str.toString().replace(/\B(?=(\d{3})+$)/g, ","); // ,263,232,121 ---》 \B是防止开头有逗号
}

// formatMoney(123456789);