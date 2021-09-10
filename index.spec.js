import {
  fetchNames,
  validateCompanyName,
  validateVisaCreditCard,
  validateFranName,
  fetchPhoneNumbersFromArgentina,
  countLastNameVowels,
  validateFavorite,
  validateUpperCase,
  updateYear,
  replaceAllMatches,
} from "./";

describe("RegEx", () => {
  describe("validateVisaCreditCard", () => {
    describe("should return true with VISA", () => {
      const str = "Signature Visa";

      it("should return true", () => {
        expect(validateVisaCreditCard(str)).toBe(true);
      });
    });

    describe("should return true with MasterCard", () => {
      const str = "MasterCard Gold";

      it("should return false", () => {
        expect(validateVisaCreditCard(str)).toBe(false);
      });
    });
  });

  describe("validateCompanyName", () => {
    describe("when the company name is DevGurus", () => {
      const str = "DevGurus";

      it("should return true", () => {
        expect(validateCompanyName(str)).toBe(true);
      });
    });

    describe("when the company name is Devgurus", () => {
      const str = "Devgurus";

      it("should return true", () => {
        expect(validateCompanyName(str)).toBe(true);
      });
    });

    describe("when the company name is DMI", () => {
      const str = "DMI";

      it("should return true", () => {
        expect(validateCompanyName(str)).toBe(true);
      });
    });

    describe("when the company name is dmi", () => {
      const str = "dmi";

      it("should return true", () => {
        expect(validateCompanyName(str)).toBe(true);
      });
    });

    describe("when the company name is Fake", () => {
      const str = "Fake";

      it("should return false", () => {
        expect(validateCompanyName(str)).toBe(false);
      });
    });
  });

  describe("validateFranName", () => {
    describe("should return true with Fran", () => {
      const str = "Fran";

      it("should return true", () => {
        expect(validateFranName(str)).toBe(true);
      });
    });

    describe("should return true with Fr4n", () => {
      const str = "fr4n";

      it("should return true", () => {
        expect(validateFranName(str)).toBe(true);
      });
    });

    describe("should return false with Fr", () => {
      const str = "Fr";

      it("should return false", () => {
        expect(validateFranName(str)).toBe(false);
      });
    });

    describe("should return false with Francisco", () => {
      const str = "Francisco";

      it("should return false", () => {
        expect(validateFranName(str)).toBe(false);
      });
    });

    describe("should return false with afran", () => {
      const str = "afran";

      it("should return false", () => {
        expect(validateFranName(str)).toBe(false);
      });
    });
  });

  describe("validateFavorite", () => {
    describe("when is british english", () => {
      const str = "favourite";

      it("should return true", () => {
        expect(validateFavorite(str)).toEqual(true);
      });
    });

    describe("when is american english", () => {
      const str = "favorite";

      it("should return true", () => {
        expect(validateFavorite(str)).toEqual(true);
      });
    });

    describe("when is spanish", () => {
      const str = "favorito";

      it("should return false", () => {
        expect(validateFavorite(str)).toEqual(false);
      });
    });
  });

  describe("countLastNameVowels", () => {
    const str = "Strzelecki";

    it("should return the number of vowels in the lastname", () => {
      expect(countLastNameVowels(str)).toEqual(3);
    });
  });

  describe("updateYear", () => {
    const str = "Current year: 2020";

    it("should return updated with the current year", () => {
      expect(updateYear(str)).toEqual("Current year: 2021");
    });
  });

  describe("replaceAllMatches", () => {
    const str =
      "The book Harry Potter and the Sorcerer's Stone is my favorite book.";

    it("should return the same sentence, but replacing book by movie", () => {
      expect(replaceAllMatches(str)).toEqual(
        "The movie Harry Potter and the Sorcerer's Stone is my favorite movie."
      );
    });
  });

  describe("fetchNames", () => {
    const str =
      "Matias, Ruben, Marce, Manu and Francisco are working together in the same project.";
    const expectedResult = ["Matias", "Ruben", "Marce", "Manu", "Francisco"];

    it("should return an array with the names", () => {
      expect(fetchNames(str)).toEqual(expectedResult);
    });
  });

  describe("validateUpperCase", () => {
    describe("when the word is in uppercase", () => {
      const str = "HELLO WORLD";

      it("should return true", () => {
        expect(validateUpperCase(str)).toEqual(true);
      });
    });

    describe("when the word is not in uppercase", () => {
      const str = "Hello World";

      it("should return false", () => {
        expect(validateUpperCase(str)).toEqual(false);
      });
    });
  });

  describe("fetchPhoneNumbersFromArgentina", () => {
    const str = "+543512616031, +541126548120, +54112654812, +34635451145";
    const expectedResult = ["+543512616031", "+541126548120"];

    it("should return an array with the phone numbers from Argentina", () => {
      expect(fetchPhoneNumbersFromArgentina(str)).toEqual(expectedResult);
    });
  });
});
