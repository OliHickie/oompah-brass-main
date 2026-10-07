function londonParts(date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(date).map((part) => [part.type, part.value])
  )
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
  }
}

function onOrBetween(month, day, startMonth, startDay, endMonth, endDay) {
  const value = month * 100 + day
  return value >= startMonth * 100 + startDay && value <= endMonth * 100 + endDay
}

export function bannerOffer(date = new Date()) {
  const { year, month, day } = londonParts(date)
  const summer = onOrBetween(month, day, 1, 1, 4, 30)
  const oktoberfest = onOrBetween(month, day, 5, 1, 10, 15)
  const christmas = onOrBetween(month, day, 10, 16, 12, 31)

  if (summer) {
    return {
      text: `Summer ${year} party bookings are open`,
      cta: 'Enquire →',
      to: '/contact',
    }
  }
  if (oktoberfest) {
    return {
      text: `Oktoberfest ${year} bookings are open`,
      cta: 'Enquire →',
      to: '/contact',
    }
  }
  if (christmas) {
    return {
      text: `Christmas ${year} bookings are open`,
      cta: 'See the set →',
      to: '/christmas',
    }
  }
  return null
}
