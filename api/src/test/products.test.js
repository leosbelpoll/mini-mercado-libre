import request from "supertest";
import app from "../index";
import {
    author,
    authorFormat,
    baseItemFormat,
} from "./structureUtil";

const api = request(app);
const query = "zapato";

const query_notfound = "";

it("Case: Get products", async done => {
    const response = await api.get(`/api/items/?q=${query}`);
    const products = response.body;
    expect(response.statusCode).toBe(200);

    const fullProducts = {
        author: authorFormat,
        items: expect.arrayContaining([
            expect.objectContaining(baseItemFormat),
        ]),
    };
    expect(products).toMatchObject(fullProducts);
    expect(products.author).toEqual(author);
    expect(products.items.length).toBe(4);
    done();
});

it("Case: Not found any product", async done => {
    const response = await api.get(`/api/items/?q=${query_notfound}`);
    expect(response.statusCode).toBe(200);
    const products = response.body;
    const fullProducts = {
        author: authorFormat,
        items: expect.any(Array),
    };
    expect(products).toMatchObject(fullProducts);
    expect(products.author).toEqual(author);
    expect(products.items.length).toBe(0);
    done();
});
