import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
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
          { name: "constants", value: "src/constants" }
        ]
      }
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
