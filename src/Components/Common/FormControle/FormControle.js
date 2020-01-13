import React from 'react';
import styles from './FormControle.module.css'

export const FormControle = ({ input, meta, child, ...restProps }) => {
    const errorConditions = meta.touched && meta.error
    return (
        <div className={styles.formControle + ' ' + (errorConditions ? styles.error : '')} >
            <div>
                {restProps.children}
            </div>
            {errorConditions && <span>{meta.error}</span>}
        </div>
        )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControle {...props} ><input {...input} {...restProps} /></FormControle>
}

export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControle {...props} ><textarea {...input} {...restProps} /></FormControle>
}
