import { useState, useEffect } from "react";

const INITIAL_STATE = { value: null, error: null, loading: true };

const useFetch = (url, method = "GET", body = undefined, headers = {}) => {
    const [state, setState] = useState(INITIAL_STATE);
    const stringBody = JSON.stringify(body);
    const stringHeaders = JSON.stringify(headers);
    const secondNumber = new Date().getSeconds();

    useEffect(() => {
        let isSubscribed = true;
        setState(INITIAL_STATE);

        let init = {
            method: method,
            body: body && stringBody,
            headers: new Headers(headers)
        };

        fetch(url, init)
            .then(async res => {
                const value = await res.json();
                if (res.status !== 200) {
                    throw value;
                }

                return isSubscribed
                    ? setState({ value, error: null, loading: false })
                    : null;
            })
            .catch(error => {
                return isSubscribed
                    ? setState({
                          value: null,
                          error: error,
                          loading: false
                      })
                    : null;
            });

        return () => (isSubscribed = false);
    }, [url, method, stringBody, stringHeaders, secondNumber]);

    return state;
};

export default useFetch;
