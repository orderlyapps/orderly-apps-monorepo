/** @param plop {import('@turbo/gen').PlopTypes.NodePlopAPI} */
module.exports = (plop) => {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("ui component", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
      {
        type: "list",
        name: "folder_location",
        message: "Where should this component be placed?",
        choices: [
          { name: "ionic", value: "src/ionic" },
          { name: "elements", value: "src/elements" },
          { name: "layouts", value: "src/layouts" },
          { name: "pages", value: "src/pages" },
          { name: "features", value: "src/features" }
        ]
      }
    ],
    actions: [
      {
        type: "add",
        path: "{{folder_location}}/{{kebabCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
    ],
  });
}
