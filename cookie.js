const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(cookie => cookie.includes(name));
    if (findCookie) {
        const cookieValue = findCookie.split('=');
        return console.log(cookieValue[1]);
    }
}