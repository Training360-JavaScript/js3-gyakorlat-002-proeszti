
setCookie('viewed', 5);
setCookie('uid', 354774631237);
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');


const cookieHandler = {
    getAll: () => {
        let cookieObject = {};
        document.cookie
            .split(' ;')
            .forEach(item =>
                cookieObject[item.split('=')[0]] = item.split('=')[1]);
        return cookieObject;
    },
    toSessionStorage: () => {
        document.cookie.split(';')
            .forEach(item => sessionStorage.setItem(item.split('=')[0], item.split('=')[1]))
    },
    flush: () => {
        const deletCookie = document.cookie.split(';');
        for (let i = 0; i < deletCookie.length; i++) {
            document.cookie = `${deletCookie[i]} =; expires = Thu, 01 Jan 1970 00:00:00 UTC`;

        }
    }
}

export { cookieHandler };