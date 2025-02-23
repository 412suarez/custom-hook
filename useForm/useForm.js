import React, { useState } from 'react'

export const useForm = (inicialForm = {} ) => {

    const [ formState, setFormstate ] = useState(inicialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormstate({
            ...formState,
            [ name ]:value,
        });
    }

    const onResetForm = () => {
        setFormstate ( inicialForm );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
