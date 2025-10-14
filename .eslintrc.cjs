/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },

    // Detecta la versión de React y habilita el runtime nuevo (sin import React)
    settings: {
        react: { version: "detect" }
    },

    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime", // para el runtime automático de JSX (React 17+)
        "standard-with-typescript"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      // Type-aware rules: apuntamos a un tsconfig especial para ESLint
        project: ["./tsconfig.eslint.json"]
    },

    plugins: ["react"],

    rules: {
      // Con runtime nuevo no hace falta importar React
        "react/react-in-jsx-scope": "off",

        "react/prop-types": "off",

      // Buenas prácticas con enlaces externos
        "react/jsx-no-target-blank": ["error", { allowReferrer: false, enforceDynamicLinks: "always" }],

      // (Opcional) relajá si querés:
      // "@typescript-eslint/explicit-function-return-type": "off",
      // "@typescript-eslint/no-confusing-void-expression": "off"
    },

    overrides: [
      // Vite genera un .d.ts con triple-slash; lo ignoramos
            {
        files: ["**/*.d.ts"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off"
        }
        }
    ]
};