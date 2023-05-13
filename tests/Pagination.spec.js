import { mount } from "@vue/test-utils";
import Pagination from "@/components/Pagination.vue";

describe("Pagination", () => {
  it("renders the correct number of pages", () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
      },
    });

    expect(wrapper.findAll("li")).toHaveLength(6);
  });

  it("sets the current page correctly", async () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 100,
      },
    });

    const page2 = wrapper.find("li:nth-child(2)");

    await page2.trigger("click");

    expect(wrapper.emitted("update")).toEqual([[2]]);
  });
});
