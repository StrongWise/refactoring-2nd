export function bookConcert(aCustomer, isPremium) {
  if (isPremium) {
    return 'Premium'
  } else {
    return 'Not Premium'
  }
}

export function deliveryDate(anOrder, isRush) {
	if (isRush) {
		let deliveryTime;
		if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
		else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
		else deliveryTime = 3;
    return anOrder.placedOn.plus({days: 1 + deliveryTime});
	} else {
		let deliveryTime;
		if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
		else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
		else deliveryTime = 4;
		return anOrder.placedOn.plus({days: 2 + deliveryTime});
	}
}

export function deliveryDate(anOrder, isRush) {
  let result;
  let deliveryTime;
  if (anOrder.deliveryState === "MA" || anOrder.deliveryState === "CT") {
    deliveryTime = isRush ? 1 : 2;
  } else if (anOrder.deliveryState === "NY" || anOrder.deliveryState === "NH") {
    deliveryTime = 2;
    if (anOrder.deliveryState === "NH" && !isRush) {
      deliveryTime = 3;
    }
  } else if (isRush) {
    deliveryTime = 3;
  } else if (anOrder.deliveryState === "ME") {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  result = anOrder.placedOn.plus({days: 2 + deliveryTime});
  if (isRush) result = result.minus({days: 1});
  return result;
}
