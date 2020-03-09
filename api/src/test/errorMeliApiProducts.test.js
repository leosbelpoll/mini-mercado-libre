import request from "supertest";
import app from "../index";
import axios from "axios";
import { responseFormat } from "./structureUtil";

jest.mock("axios");
const api = request(app);

const query = "zapato";
const item = "MLA838624544";

const error = {
    error: "ENOTFOUND",
    code: "ENOTFOUND",
    syscall: "getaddrinfo",
    hostname: "api.mercadolibre1.com",
    config: {
        url: " https://api.mercadolibre1.com/sites/MLA/search",
        method: "get",
        params: { q: "phone", limit: "4" },
        headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": "axios/0.19.2",
        },
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        data: undefined,
    },
    request: {
        response: undefined,
        isAxiosError: true,
        toJSON: null,
    },
};

it("Case: Error getting products", async done => {
    axios.get.mockImplementationOnce(() => Promise.reject(error));
    const response = await api.get(`/api/items/?q=${query}`);
    expect(response.statusCode).toBe(500);
    const object = response.body;

    expect(object).toMatchObject(responseFormat);
    expect(object.error).toEqual("api_not_available");
    expect(object.status).toEqual(500);
    done();
});

test("Case: Error getting a product", async done => {
    axios.get.mockImplementationOnce(() => Promise.reject(error));
    const response = await api.get(`/api/items/${item}`);
    const object = response.body;
    expect(response.statusCode).toBe(500);

    expect(object).toMatchObject(responseFormat);
    expect(object.error).toEqual("api_not_available");
    expect(object.status).toEqual(500);
    done();
});
