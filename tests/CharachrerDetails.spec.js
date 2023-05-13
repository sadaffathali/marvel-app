import { mount } from "@vue/test-utils";
import CharachterDetails from "@/components/CharachterDetails.vue";

describe("CharachterDetails", () => {
  it("renders description when data is provided", () => {
    const data = {
      description: "Test description",
    };
    const wrapper = mount(CharachterDetails, {
      props: {
        title: "Description",
        data,
      },
    });

    expect(wrapper.text()).toMatch(data.description);
  });

  it("does not render description when data is not provided", () => {
    const wrapper = mount(CharachterDetails, {
      props: {
        title: "Description",
        data: {},
      },
    });

    expect(wrapper.text()).not.toMatch("Test description");
  });
});
