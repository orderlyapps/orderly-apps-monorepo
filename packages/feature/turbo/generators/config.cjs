/** @param plop {import('@turbo/gen').PlopTypes.NodePlopAPI} */
module.exports = (plop) => {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("pdf", {
    description: "",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the pdf document?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pdf/{{kebabCase name}}/{{pascalCase name}}PDF.tsx",
        templateFile: "templates/pdf-template.hbs",
      },
    ],
  });
};
