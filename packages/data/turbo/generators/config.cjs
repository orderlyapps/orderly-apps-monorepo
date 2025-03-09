/** @param plop {import('@turbo/gen').PlopTypes.NodePlopAPI} */
module.exports = (plop) => {
  // Add a helper to concatenate strings
  plop.setHelper('concat', function (str1, str2) {
    return `${str1}${str2}`;
  });
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

  // Generator for React Query queries
  plop.setGenerator("react-query", {
    description: "Adds a new React Query hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the query?",
      },
      {
        type: "list",
        name: "query_type",
        message: "What type of React Query hook do you want to create?",
        choices: [
          { name: "Query", value: "query" },
          { name: "Mutation", value: "mutation" },
          { name: "Both", value: "both" }
        ]
      }
    ],
    actions: function(data) {
      const actions = [];
      
      if (data?.query_type === "query" || data?.query_type === "both") {
        actions.push({
          type: "add",
          path: "src/hooks/{{kebabCase name}}/{{pascalCase name}}.ts",
          templateFile: "templates/query.hbs",
        });
      }
      
      if (data?.query_type === "mutation" || data?.query_type === "both") {
        actions.push({
          type: "add",
          path: "src/hooks/{{kebabCase (concat name '-mutation')}}/{{pascalCase (concat name 'Mutation')}}.ts",
          templateFile: "templates/mutation.hbs",
        });
      }
      
      return actions;
    },
  });
}
