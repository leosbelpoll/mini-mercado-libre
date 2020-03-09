import React from "react";
import { shallow } from "enzyme";
import BreadCrumbs from "../components/parts/BreadCrumbs";
import { Link } from "react-router-dom";

const mockEmptyList = [];
const mockList = ["Zapato", "Calzado de hombre"];

const breadEmptyCrumbs = <BreadCrumbs breadCrumbs={mockEmptyList} />;

const breadCrumbs = <BreadCrumbs breadCrumbs={mockList} />;

describe("Empty BreadCrumbs", () => {
    const wrapper = shallow(breadEmptyCrumbs);
    it("Case: Verify component elements", () => {
        expect(wrapper.exists(".BreadCrumbs__section")).toBe(false);
    });
});

describe("BreadCrumbs", () => {
    it("Case: Verify component elements", () => {
        const wrapper = shallow(breadCrumbs);
        expect(wrapper.exists(".BreadCrumbs__section")).toBe(true);
        expect(wrapper.find(Link).length).toEqual(mockList.length);
    });
});
