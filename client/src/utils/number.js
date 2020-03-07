import { getEnv } from "./env";

export const getFormatedNumber = number =>
    (getEnv("FORMATTED_SEPARATOR")) === "."
        ? new Intl.NumberFormat("de-DE").format(number)
        : new Intl.NumberFormat().format(number);
