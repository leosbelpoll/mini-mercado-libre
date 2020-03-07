export const getFormatedNumber = number =>
    (process.env.REACT_APP_NUMBER_FORMATTED_SEPARATOR || ".") === "."
        ? new Intl.NumberFormat("de-DE").format(number)
        : new Intl.NumberFormat().format(number);
