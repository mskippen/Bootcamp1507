const Letter = require("../lib/Letter");

describe("Letter class", () => {
  it("Characters that aren't digits or letters are instantly visible", () => {
    expect(new Letter("?").visible).toBe(true);
  });

  it("toString returns _ for letters", () => {
    expect(new Letter("a").toString()).toBe("_");
  });

  describe("guess", () => {
    it("Correct guess returns true", () => {
      expect(new Letter("j").guess("j")).toBe(true);
    });

    it("Incorrect guess returns false", () => {
      expect(new Letter("j").guess("l")).toBe(false);
    });
  });

  describe("visible", () => {
    it("Characters that are digits or letters should not be visible", () => {
      expect(new Letter("j").visible).toBe(false);
    });
    
    it("Correct guess makes character visible", () => {
      const letter = new Letter("j");
      const visible = letter.visible;
      
      letter.guess("j");

      expect(visible).toBe(false);       // letter was not originally visible
      expect(letter.visible).toBe(true); // after correct guess letter should be visible
    });

    it("Incorrect guess does not make character visible", () => {
      const letter = new Letter("j");
      const visible = letter.visible;
      
      letter.guess("l");

      expect(visible).toBe(false);        // letter was not originally visible
      expect(letter.visible).toBe(false); // after incorrect guess letter should still not be visible
    });

    it("toString returns character when character is visible", () => {
      const letter = new Letter("j");
      
      letter.guess("j");

      expect(letter.toString()).toBe("j");
    });
  });

  describe("getSolution", () => {
    it("returns character", () => {
      expect(new Letter("l").getSolution()).toBe("l");
    });
  });
});
