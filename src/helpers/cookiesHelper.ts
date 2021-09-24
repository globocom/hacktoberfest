export const getCookie = (name: string) => {
  const cookie = document.cookie.split("; ").find(row => row.startsWith(name))
  if (cookie) {
    return cookie.split("=")[1]
  }
  return null
}

export const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/`
}
