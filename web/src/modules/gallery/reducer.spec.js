import reducer, { addPhotos, setViewingPhoto } from "./reducer";

describe("Gallery reducer", () => {
  it("should add photos", () => {
    const initialState = { otherProp: "value", photos: [0, 1, 2] };
    const payload = [3, 4];
    const expectedState = { otherProp: "value", photos: [0, 1, 2, 3, 4] };

    expect(reducer(initialState, addPhotos(payload))).toEqual(expectedState);
  });

  it("should set viewing photo", () => {
    const initialState = { photos: [0, 1, 2], viewing: undefined };
    const expectedState = { photos: [0, 1, 2], viewing: 1 };
    expect(reducer(initialState, setViewingPhoto(1))).toEqual(expectedState);
  });
});
