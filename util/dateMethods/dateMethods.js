const getDate = () => {
    const date = new Date(Date.now())
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    let month = date.getMonth()+1 < 10 ? "0" + date.getMonth()+1 : date.getMonth()+1
    return `${date.getUTCFullYear()}-${month}-${day}`
}

const getDateAndTime = () => {
    const date = new Date(Date.now())
    let day = date.getDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate()
    let month = date.getMonth()+1 < 10 ? "0" + date.getMonth()+1 : date.getMonth()+1
    return `${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}


export {getDate, getDateAndTime}