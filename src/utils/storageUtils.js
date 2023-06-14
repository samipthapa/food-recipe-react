const setLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log('Error setting localStorage item:', error);
    }
};

const getLocalStorage = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : "";
    } catch (error) {
        console.log('Error getting localStorage item:', error);
        return null;
    }
};

const removeLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log('Error removing localStorage item:', error);
    }
};

const clearLocalStorage = () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.log('Error clearing localStorage:', error);
    }
};

export { setLocalStorage, getLocalStorage, removeLocalStorage, clearLocalStorage };