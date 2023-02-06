const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

const findLogin = function (allLogins, loginToFind) {
    for (const login of allLogins) {
        if (login === loginToFind) {
            return `Пользователь ${loginToFind} найден.`;
        }
    }

    return `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));
