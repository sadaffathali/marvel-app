import { mount } from "@vue/test-utils";
import CharachterDetail from "@/components/CharachterDetail.vue";

describe("CharachterDetail", () => {
  it("renders the title and slot content", () => {
    const wrapper = mount(CharachterDetail, {
      props: {
        title: "Test Title",
      },
      slots: {
        default: "<span>Test Content</span>",
      },
    });

    const titleElement = wrapper.find(".font-bold");
    expect(titleElement.text()).toBe("Test Title:");

    const contentElement = wrapper.find("span");
    expect(contentElement.text()).toBe("Test Content");
  });
});
