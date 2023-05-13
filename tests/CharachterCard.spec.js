import { mount } from "@vue/test-utils";
import CharachterCard from "@/components/CharachterCard.vue";

describe("CharachterCard", () => {
  test("renders correctly", () => {
    const props = {
      charachter: {
        name: "Spider-Man",
        id: 123,
        thumbnail: {
          path: "http://example.com/image",
          extension: "jpg",
        },
      },
    };
    const wrapper = mount(CharachterCard, {
      props,
    });
    expect(wrapper.find("h2").text()).toBe("Spider-Man");
    expect(wrapper.find("img").attributes("src")).toBe(
      "http://example.com/image.jpg"
    );
    expect(wrapper.find("a").attributes("href")).toBe("/charachter/123");
  });
});
