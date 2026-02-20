const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature", 
    async setupNodeEvents(on, config) {
      // Esta linha permite que o plugin do Cucumber interaja com o Cypress
      await addCucumberPreprocessorPlugin(on, config);

      // Esta parte configura o "esbuild", que é o que lê os arquivos .feature rapidamente
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
