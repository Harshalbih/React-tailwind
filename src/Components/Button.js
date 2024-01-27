import React from 'react';
import className from 'classnames';


function Button({
    children,
    success,
    error,
    primary,
    secondary,
    outline,
    rounded,
    ...rest
    }){

        const classes = className('flex items-center w-32 px-3 py-1.5 border m-4', {
            'border-blue-500 bg-blue-500 text-white' : primary,
            'border-gray-500 bg-gray-500' : secondary,
            'border-green-500 bg-green-500 text-white' : success,
            'border-red-500 bg-red-500 text-white' : error,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline & secondary
        })

    return <button {...rest} className={classes}>
        {children}
        </button>
}


export default Button;