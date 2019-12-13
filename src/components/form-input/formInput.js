import React from 'react';

const FormInput = ({handleChange,label, ...otherProps}) => (
    <>
    <input class="appearance-none bg-trasparent border-none w-full h-12 ml-2 text-black mr-3 py-1 px-2 leading-looseS focus:outline-none" 
                            onChange={handleChange}
                            {...otherProps}
                            />
            {
                label?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} appearance-none-label`}>
                    </label>)
                    : null
            }
    </>        
)
export default FormInput