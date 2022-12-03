const getDate = () => {
    const date = new Date(Date.now())
    let day = date.getUTCDay() < 10 ? "0" + date.getUTCDay() : date.getUTCDay()
    let month = date.getUTCMonth() < 10 ? "0" + date.getUTCMonth() : date.getUTCMonth()
    return `${date.getUTCFullYear()}-${day}-${month}`
}

const getDateAndTime = () => {
    const date = new Date(Date.now())
    let day = date.getUTCDay() < 10 ? "0" + date.getUTCDay() : date.getUTCDay()
    let month = date.getUTCMonth() < 10 ? "0" + date.getUTCMonth() : date.getUTCMonth()
    return `${date.getUTCFullYear()}-${day}-${month} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

export {getDate, getDateAndTime}