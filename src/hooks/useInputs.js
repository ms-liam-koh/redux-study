import { useState, useCallback, useEffect } from 'react';

const useInputs = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        console.log('custom hooks');
    },[form]);
}

export default useInputs