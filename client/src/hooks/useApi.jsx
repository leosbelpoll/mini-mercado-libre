import useFetch from "./useFetch";

const useApi = (url, method = "GET", body = null, header = []) => {
    return useFetch(
        `${process.env.REACT_APP_API_URL ||
            "http://localhost:3001"}/api/${url}`,
        method,
        body,
        header
    );
};

export default useApi;
