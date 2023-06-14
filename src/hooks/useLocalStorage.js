import { useState } from 'react';

// type Props = {
//     key: string;
//     initialValue: any;
// };

const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log('Error setting localStorage item:', error);
            return initialValue;
        }
    });

    const setLocalStorageValue = (newValue) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
            setValue(newValue);
        } catch (error) {
            console.log('Error setting localStorage item:', error);
        }
    };

    const removeLocalStorage = () => {
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

    return [value, setValue, setLocalStorageValue, removeLocalStorage, clearLocalStorage];
}

export default useLocalStorage;
