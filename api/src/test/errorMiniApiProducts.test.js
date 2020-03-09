import request from "supertest";
import app from "../index";
import axios from "axios";
import { responseFormat } from "./structureUtil";

const api = request(app);
jest.mock("axios");

const item = "MLA838624544";

test("Case: Item not found", async done => {
    axios.get.mockImplementationOnce(() =>
        Promise.reject({
            response: {
                data: {
                    message: "Item with id MLA8386245441 not found",
                    error: "not_found",
                    status: 404,
                    cause: [],
                },
            },
        }),
    );
    const response = await api.get(`/api/items/${item}`);

    expect(response.statusCode).toBe(404);
    const objecto = response.body;

    expect(objecto).toMatchObject(responseFormat);
    expect(objecto.error).toEqual("not_found");
    expect(objecto.status).toEqual(404);
    expect(objecto.message).toEqual(
        `Product with id ${item} not found`,
    );
    done();
});
