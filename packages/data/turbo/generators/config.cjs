/** @param plop {import('@turbo/gen').PlopTypes.NodePlopAPI} */
module.exports = (plop) => {
  plop.setGenerator("react-query-hook", {
    description: "",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the react query hook?",
      },
      {
        type: "input",
        name: "feature",
        message: "What feature should this go in? (Leave empty for root)",
      },
      {
        type: "list",
        name: "folder",
        message: "What folder should this go in?",
        choices: ["views", "tables", "mutations"],
      },
    ],
    actions: (data) => {
      const templateFile =
        data?.folder === "views"
          ? "templates/query.hbs"
          : data?.folder === "tables"
            ? "templates/query.hbs"
            : "templates/mutation.hbs";

      return [
        {
          type: "add",
          path: "src/react-query/{{#if feature}}{{kebabCase feature}}/{{/if}}{{#if folder}}{{folder}}/{{/if}}{{kebabCase name}}.ts",
          templateFile: templateFile,
        },
      ];
    },
  });
};
