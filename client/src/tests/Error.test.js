import React from "react";
import { shallow, mount } from "enzyme";
import Error from "../components/parts/Error";
import { Link } from "react-router-dom";
import MetaTags from "../components/parts/MetaTags";

describe("Error", () => {
    const wrapper = shallow(<Error status={404} message="Algo salio mal" />);
    it("Case: Verify component elements", () => {
        const meta = wrapper.find(MetaTags);
        expect(meta.length).toEqual(1);
        expect(wrapper.find(Link).length).toEqual(1);
        expect(wrapper.exists(".Error__section")).toBeTruthy();
        expect(wrapper.text()).toMatch(/Ir a la Página Principal/);
        expect(wrapper.text()).toMatch(/Parece que este recurso no existe/);
    });
});
