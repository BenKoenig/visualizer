function CalculateTimeRemaining (): number {
  const today = new Date()
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  const daysInMonth = endOfMonth.getDate()
  const daysRemaining = daysInMonth - today.getDate()

  return Math.min(30, daysRemaining)
}
export default CalculateTimeRemaining
