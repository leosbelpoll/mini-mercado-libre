import React from "react";
import { mount } from "enzyme";
import Home from "../components/parts/Home";

const home = <Home />;
describe("Home", () => {
    const wrapper = mount(home);

    it("Case: Mount component", () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.exists("section.Home__section")).toBeTruthy();
    });
});
