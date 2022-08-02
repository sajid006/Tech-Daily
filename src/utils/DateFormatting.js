const DateFormating = (date) => {
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(Date.parse(date)).toLocaleDateString("en-US", options);
};
export default DateFormating;