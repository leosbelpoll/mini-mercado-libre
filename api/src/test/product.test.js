import request from "supertest";
import app from "../index";
import {
    author,
    authorFormat,
    responseFormat,
    baseItemFormat,
} from "./structureUtil";

const api = request(app);
const item = "MLA838624544";
const item_not = "ssss";

it("Case: Get a product", async done => {
    const response = await api.get(`/api/items/${item}`);
    const product = response.body;
    expect(response.statusCode).toBe(200);
    expect(product.author).toEqual(author);
    expect(product.item.id).toEqual(item);

    const fullProduct = {
        author: authorFormat,
        item: baseItemFormat,
    };

    fullProduct.item.description = expect.any(String);
    fullProduct.item.sold_quantity = expect.any(Number);
    fullProduct.item.id = item;
    expect(product).toMatchObject(fullProduct);
    const { picture, price } = product.item;
    expect(picture).toMatch(/http/);
    expect(!isNaN(price.amount)).toEqual(true);
    expect(!isNaN(price.decimals)).toEqual(true);
    done();
});

it("Case: Not found product", async done => {
    const response = await api.get(`/api/items/${item_not}`);
    const objecto = response.body;
    expect(response.statusCode).toBe(404);
    const estructura = responseFormat;
    expect(objecto).toMatchObject(estructura);
    expect(objecto.error).toEqual("not_found");
    expect(objecto.status).toEqual(404);
    done();
});
