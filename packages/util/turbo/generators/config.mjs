// @ts-check

/** @param {import('@turbo/gen').PlopTypes.NodePlopAPI} plop */
export default function generator(plop) {
  // A simple generator to add a new TypeScript utility file
  plop.setGenerator("typescript-util", {
    description: "Adds a new TypeScript utility file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the utility?",
      },
      {
        type: "list",
        name: "folder_location",
        message: "Where should this utility be placed?",
        choices: [
          { name: "helpers", value: "src/helpers" },
          { name: "formatters", value: "src/formatters" },
          { name: "validators", value: "src/validators" },
          { name: "types", value: "src/types" },
          { name: "constants", value: "src/constants" },
        ],
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{folder_location}}/{{kebabCase name}}/{{camelCase name}}.ts",
        templateFile: "templates/utility.hbs",
      },
    ],
  });
}
