export function bookConcert(aCustomer, isPremium) {
  if (isPremium) {
    return 'Premium'
  } else {
    return 'Not Premium'
  }
}
