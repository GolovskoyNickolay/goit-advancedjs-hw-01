export const save = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

export const load = key => {
    try {
        const dataFromLS = localStorage.getItem(key);
        return dataFromLS === null ? undefined : JSON.parse(dataFromLS);
    } catch (error) {
        console.log(error);
    }
}
