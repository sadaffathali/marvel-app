import { mount } from "@vue/test-utils";
import EmptyMsg from "@/components/EmptyMsg.vue";

describe("EmptyMsg", () => {
  test("displays correct text", () => {
    const wrapper = mount(EmptyMsg);
    expect(wrapper.find("h2").text()).toBe("No data found");
  });
});
