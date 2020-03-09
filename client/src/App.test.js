import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("Case: Verify component elements", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.exists("HelmetProvider")).toBeTruthy();
    expect(wrapper.exists("MetaTags")).toBeTruthy();
    expect(wrapper.exists("Header")).toBeTruthy();
    expect(wrapper.find("Route").length).toEqual(4);
  });
});