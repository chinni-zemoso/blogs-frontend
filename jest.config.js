module.exports = {
  collectCoverageFrom: ["**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)quot;": "identity-obj-proxy",
    "src(.*)quot;": "<rootDir>/src$1",
  },
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
      },
    ],
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!lodash-es/.*)"
  ],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "mjs"]
};