export const responseFormat = {
    message: expect.any(String),
    error: expect.any(String),
    status: expect.any(Number)
};

export const baseItemFormat = {
    id: expect.any(String),
    title: expect.any(String),
    price: expect.objectContaining({
        currency: expect.any(String),
        amount: expect.any(String),
        decimals: expect.any(String),
    }),
    category: expect.any(String),
    picture: expect.any(String)
};

export const authorFormat = {
    name: expect.any(String),
    lastname: expect.any(String),
};

export const author = {
    name: "Leosbel",
    lastname: "Poll",
};
