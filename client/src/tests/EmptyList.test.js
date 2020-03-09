import React from "react";
import { shallow, mount } from "enzyme";
import { create } from "react-test-renderer";
import EmptyList from "../components/parts/EmptyList";

describe("EmptyList", () => {
    it("Case: Mount component", () => {
        const wrapper = mount(<EmptyList />);
        expect(wrapper).toMatchSnapshot();
    });

    it("Case: Verify component elements", () => {
        const wrapper = shallow(<EmptyList />);
        expect(wrapper.exists("section.EmptyList__section")).toBeTruthy();
        expect(wrapper.find("img").prop("src")).toEqual("/images/glass.svg");
        expect(wrapper.find("img").prop("alt")).toEqual("Search icon");
        expect(wrapper.find("h3.header__title").text()).toEqual(
            "No hay elementos que coincidan con tu búsqueda."
        );
    });
});
