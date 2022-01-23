module.exports = {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
        "<rootDir>/setup-jest.ts"
    ],
    // "transformIgnorePatterns": [
    //     "node_modules/(?!@ngrx|ngx-socket-io)" // List any packages here that error
    // ],
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
    ]
};
