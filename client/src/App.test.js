import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/parts/Header";
import MetaTags from "./components/parts/MetaTags";

it("renders without crashing", () => {
    shallow(<App />);
});

describe("App", () => {
    const wrapper = mount(<App />);
    it("Case: Verify component elements", () => {
        expect(wrapper.find(HelmetProvider).length).toEqual(1);
        expect(wrapper.find(MetaTags).length).toEqual(1);
        expect(wrapper.find(Header).length).toEqual(1);
    });
});
