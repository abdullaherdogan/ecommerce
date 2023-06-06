export const auth = {
    getToken: () => {
        return JSON.parse(localStorage.getItem('auth'))?.token;
    }
}