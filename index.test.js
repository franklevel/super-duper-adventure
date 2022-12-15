import { compress } from "./index";
describe("#compress", () => {
  it("should return correct values", () => {
    expect(compress("aaaaca")).toBe("ax4ca");
    expect(compress("aaaaaabbbcaaa")).toBe("ax6bx3cax3");
    expect(compress("mississippi")).toBe("misx2isx2ipx2i");
    expect(compress("hhhhaakkkkyaaa")).toBe("hx4ax2kx4yax3");
  });

  it("should return the same string", () => {
    expect(compress("thisisastring")).toBe("thisisastring");
  });

  it("should return a unique char compressed", () => {
    expect(compress("aaaaaaaaaaaaaaaaaaaaaaa")).toBe("ax23");
  });

  it("should return a correct value for numbers", () => {
    expect(compress(11111)).toBe("1x5");
  });
  it("should return null without none argument sent", () => {
    expect(compress()).toBeNull();
  });
});
