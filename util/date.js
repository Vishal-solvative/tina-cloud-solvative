import {useEffect, useState} from 'react'

const formatDate = (dateString, locale = 'en-US') => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(dateString).toLocaleDateString(locale, options)
}

export const FormatDate = ({dateString}) => {
    const [formattedDate, setFormattedDate] = useState('')

    useEffect(() => {
        if (dateString) {
            setFormattedDate(formatDate(dateString))
        }
    }, [dateString])

    return <>{formattedDate}</>
}
