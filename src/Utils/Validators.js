// import urlRegex from 'url-regex'

export const required = value => {
    return value && value.length !== 0 ? undefined : 'Field is required'
}

export const maxLength = maxLength => value => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}

export const isEmail = value => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address'
    } else return ''
}

// ---> не отображает ошибку валидации поля
// export const isURL = value => {
//     if (urlRegex().test(value) || value === '' || value === null) {
//         return undefined
//     } else return 'Invalid URL address'
// }