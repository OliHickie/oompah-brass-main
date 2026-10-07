const NAMESPACE = 'oompahbrass-site'
const COUNTER = 'https://abacus.jasoncameron.dev'
const REPORT_TO = 'olihickie@hotmail.com'

const PAGE_KEYS = ['home', 'hire', 'live', 'contact', 'listen', 'gallery', 'videos', 'christmas', 'media', 'other']

function londonDate() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(new Date()).map((part) => [part.type, part.value])
  )
  return new Date(Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day)))
}

function isoWeekParts(date) {
  const value = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()))
  const day = value.getUTCDay() || 7
  value.setUTCDate(value.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(value.getUTCFullYear(), 0, 1))
  const week = Math.ceil((((value - yearStart) / 86400000) + 1) / 7)
  return { year: value.getUTCFullYear(), week }
}

function weekId(date) {
  const { year, week } = isoWeekParts(date)
  return `${year}-W${String(week).padStart(2, '0')}`
}

function shiftDays(date, days) {
  const next = new Date(date)
  next.setUTCDate(date.getUTCDate() + days)
  return next
}

function mondayOf(date) {
  const day = date.getUTCDay() || 7
  return shiftDays(date, 1 - day)
}

function rangeLabel(monday) {
  const sunday = shiftDays(monday, 6)
  const start = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(monday)
  const end = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(sunday)
  return `${start} – ${end}`
}

function pageKey(name) {
  return PAGE_KEYS.includes(name) ? name : 'other'
}

async function hit(key) {
  const response = await fetch(`${COUNTER}/hit/${NAMESPACE}/${key}`)
  if (!response.ok) return null
  const data = await response.json()
  return typeof data.value === 'number' ? data.value : null
}

async function read(key) {
  const response = await fetch(`${COUNTER}/get/${NAMESPACE}/${key}`)
  if (!response.ok) return null
  const data = await response.json()
  return typeof data.value === 'number' ? data.value : null
}

async function sendDigest(label, lines) {
  await fetch(`https://formsubmit.co/ajax/${REPORT_TO}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: `Oompah Brass weekly update, ${label}`,
      _template: 'box',
      _captcha: 'false',
      message: lines.join('\n'),
    }),
  })
}

export function trackVisit(route) {
  if (import.meta.env.SSR || typeof window === 'undefined') return
  const host = window.location.hostname
  if (host === 'localhost' || host === '127.0.0.1') return
  if (navigator.webdriver) return
  if (/bot|crawl|spider|headless/i.test(navigator.userAgent || '')) return

  const key = pageKey(route.name)
  try {
    if (window.sessionStorage.getItem(`ob-seen:${key}`)) return
    window.sessionStorage.setItem(`ob-seen:${key}`, '1')
  } catch {
    return
  }

  report(key).catch(() => {})
}

async function report(key) {
  const today = londonDate()
  const thisWeek = weekId(today)

  await hit('total')
  await hit(key)
  await hit(`${thisWeek}-total`)
  await hit(`${thisWeek}-${key}`)

  let tryDigest = false
  try {
    if (!window.sessionStorage.getItem('ob-digest')) {
      window.sessionStorage.setItem('ob-digest', '1')
      tryDigest = true
    }
  } catch {
    tryDigest = false
  }
  if (!tryDigest) return

  const digestCount = await hit(`digest-${thisWeek}`)
  if (digestCount !== 1) return

  const previous = shiftDays(today, -7)
  const previousId = weekId(previous)
  const label = rangeLabel(mondayOf(previous))
  const weekTotal = await read(`${previousId}-total`)
  const allTime = await read('total')
  const lines = [
    'Weekly activity for oompahbrass.com',
    label,
    '',
  ]

  if (weekTotal == null) {
    lines.push('No page opens were recorded that week.')
  } else {
    lines.push(`Pages opened: ${weekTotal}`)
    for (const page of PAGE_KEYS) {
      const value = await read(`${previousId}-${page}`)
      if (value != null) lines.push(`${page}: ${value}`)
    }
  }

  lines.push('', `All-time total: ${allTime ?? 0}`)
  lines.push('A page is counted once per browser session. The count started when this counter was added.')
  await sendDigest(label, lines)
}
