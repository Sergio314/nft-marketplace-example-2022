export const getDomain = () => {
  const domainArr = window.location.hostname.match(/[^\.]*\.[^.]*$/);
  return domainArr?.length > 0 ? `.${domainArr[0]}` : window.location.hostname;
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; Domain=${getDomain()}; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;  SameSite=Lax`;
};
