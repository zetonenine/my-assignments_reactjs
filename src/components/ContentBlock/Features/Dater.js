
const Dater = (item) => {

    const date = new Date(item)
    let currentDate = Date.parse(new Date());

    const diff_days = Math.round((currentDate - Date.parse(date))/86400000)
    const diff_hours = Math.round((currentDate - Date.parse(date))/3600000)
    const diff_min = Math.round((currentDate - Date.parse(date))/600000)
    const diff_sec = Math.round((currentDate - Date.parse(date))/1000)

    if (diff_days > 7) {
        return (
            `Последнее изменение: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
        )
    } else if (1 < diff_days < 7) {
        return (
            `Последнее изменение: ${diff_days} дней назад`
        )
    } else if (1 < diff_hours < 24) { 
        return (
            `Последнее изменение: ${diff_hours} часов назад`
        )  
    } else if (1 < diff_min < 60) {
        return (
            `Последнее изменение: ${diff_min} минут назад`
        )
    } else if (diff_sec < 60) {
        return (
            `Последнее изменение: ${diff_sec} секунд назад`
        )      
    }
}

export default Dater;