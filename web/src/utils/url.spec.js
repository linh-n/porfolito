import { extractLocaleFromPathname } from "./url";

describe("href utils", () => {
  it("should extract locale from pathname", () => {
    expect(extractLocaleFromPathname("/fr/gallery/le-test")).toEqual("fr");
    expect(extractLocaleFromPathname("/fr/")).toEqual("fr");
    expect(extractLocaleFromPathname("/fr")).toEqual("fr");
    expect(extractLocaleFromPathname("/ch")).toEqual("en");
    expect(extractLocaleFromPathname("/")).toEqual("en");
    expect(extractLocaleFromPathname("")).toEqual("en");
  });
});
