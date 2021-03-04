export const USER = 'USER';


export function getUser() {
    const user = localStorage.getItem(USER);


    if (user) return JSON.parse(user);


    return '';

}

export function storeUser(user) {
    localStorage.setItem(user, JSON.stringify(user));
}