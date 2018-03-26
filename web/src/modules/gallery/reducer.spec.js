import reducer, { addPhotos } from "./reducer";

describe("Gallery reducer", () => {
  it("should add photos", () => {
    const initialState = { otherProp: "value", photos: [0, 1, 2] };
    const payload = [3, 4];
    const expectedState = { otherProp: "value", photos: [0, 1, 2, 3, 4] };

    expect(reducer(initialState, addPhotos(payload))).toEqual(expectedState);
  });
});
