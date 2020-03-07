import useFetch from "./useFetch";
import { getEnv } from "../utils/env";

const useApi = (url, method = "GET", body = null, header = []) => {
    const fecthApi = useFetch(
        `${getEnv("API_URL")}/api/${url}`,
        method,
        body,
        header
    );
    const { value } = fecthApi;
    if (
        value !== null &&
        (value.author.name !== getEnv("AUTHOR_NAME") ||
            value.author.lastname !== getEnv("AUTHOR_LASTNAME"))
    ) {
        throw new Error("Unauthorized sign");
    }
    return fecthApi;
};

export default useApi;
