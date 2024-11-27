import React from "react";
import { screen } from "@testing-library/react";
import { renderForTest } from "../helpers/test/TestWrappers";
import { Breadcrumbs } from "./Breadcrumbs";
import EvincedUT from "@evinced/unit-tester";

describe("Breadcrumbs", () => {
  it("is accessible", async () => {
    renderForTest(
      <Breadcrumbs
        source="product_page"
        items={[
          { text: "Lorem", linkProps: { toPage: "searchresults" } },
          { text: "Ipsum", linkProps: { toPage: "searchresults" } },
        ]}
      />
    );
    const element = await screen.findByTestId("breadcrumbs");
    const results = await EvincedUT.analyzeBreadcrumb(element);
    expect(results).toHaveNoFailures();
  });
});
