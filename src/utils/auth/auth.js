import { router } from '@/router'

export function toLogin() {
  const href = window.location.href
  const newHref = href.includes('https') ? href : href.replace('http', 'https')
  window.location.href = import.meta.env.VITE_APP_ISSO_LOGOUT_URL + encodeURIComponent(newHref)
}

export function toFourZeroFour() {
  router.replace({
    path: '/404',
  })
}
