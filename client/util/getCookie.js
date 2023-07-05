function getCookieValue(cookieName) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();

    if (cookie.startsWith(cookieName + '=')) {
      return cookie.substring(cookieName.length + 1);
    }
  }

  return null;
}

// Usage example:
// const cookieValue = getCookieValue('user');
// const cookieObject = JSON.parse(cookieValue);
// console.log(cookieObject.userid);
// console.log(cookieObject.username);

export default getCookieValue