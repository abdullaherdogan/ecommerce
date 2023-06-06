export const auth = {
    getUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    }
}