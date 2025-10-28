export const getCookie = (name: string) => {
  const cookie = document.cookie.split("; ").find(row => row.startsWith(name))
  if (cookie) {
    return cookie.split("=")[1]
  }
  return null
}

export const setCookie = (name: string, value: string, days?: number) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `COOKIE_EXPIRATION=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value}; path=/`;
  document.cookie = `${expires}; path=/`;
}

export const getCookieExpiration = (): Date | null => {
  const cookie = getCookie("COOKIE_EXPIRATION");
  if (!cookie) return null;

  return cookie ? new Date(cookie) : null;
};
