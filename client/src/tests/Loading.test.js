import React from "react";
import { mount } from "enzyme";
import Loading from "../components/parts/Loading";

const load = <Loading />;
describe("Loading", () => {
    const wrapper = mount(load);
    it("Case: Verify component elements", () => {
        expect(wrapper.exists(".Loading__section")).toBeTruthy();
        expect(wrapper.find(".loading-dot").length).toEqual(6);
    });
});
