import useFetch from "./useFetch";

const useApi = (url, method = "GET", body = null, header = []) => {
    const fecthApi = useFetch(
        `${process.env.REACT_APP_API_URL ||
            "http://localhost:3001"}/api/${url}`,
        method,
        body,
        header
    );
    const { value } = fecthApi;
    if (
        value !== null &&
        (value.author.name !==
            (process.env.REACT_APP_AUTHOR_NAME || "Leosbel") ||
            value.author.lastname !==
                (process.env.REACT_APP_AUTHOR_LASTNAME || "Poll"))
    ) {
        throw new Error("Unauthorized sign");
    }
    return fecthApi;
};

export default useApi;
