/** @type {import('jest').Config} */
module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: [
        "<rootDir>/setup-jest.ts"
    ],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/cypress/"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!.*\\.mjs$)"
    ],
    transform: {
        "^.+\\.(ts|js|mjs|html|svg)$": [
            "jest-preset-angular",
            {
                tsconfig: "<rootDir>/tsconfig.spec.json",
                stringifyContentPathRegex: "\\.(html|svg)$"
            }
        ]
    },
    moduleNameMapper: {
        "^@angular/core/testing$": "<rootDir>/node_modules/@angular/core/fesm2022/testing.mjs",
        "^@angular/platform-browser/animations$": "<rootDir>/node_modules/@angular/platform-browser/fesm2022/animations.mjs",
        "^@angular/common/http$": "<rootDir>/node_modules/@angular/common/fesm2022/http.mjs",
        "^@angular/common/http/testing$": "<rootDir>/node_modules/@angular/common/fesm2022/http/testing.mjs"
    }
};
