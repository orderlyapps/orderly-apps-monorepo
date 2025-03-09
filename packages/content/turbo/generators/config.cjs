/** @param plop {import('@turbo/gen').PlopTypes.NodePlopAPI} */
module.exports = (plop) => {
  plop.setGenerator("ionic-page", {
    description: "",
    prompts: [
      {
        type: "list",
        name: "app",
        message: "Which app would you like to add the page to?",
        choices: ["orderly", "orderly-alpha", "proclaimer"],
      },
      {
        type: "list",
        name: "section",
        message: "Which section would you like to add the page to?",
        choices: ["home", "publishers", "ministry", "schedules", "settings"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the page?",
      },
      {
        type: "input",
        name: "folder",
        message: "What folder should this go in? (Leave empty for root)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/shells/{{kebabCase app}}/pages/{{ section }}/{{#if folder}}{{folder}}/{{/if}}{{kebabCase name}}/{{pascalCase name}}Page.tsx",
        templateFile: "templates/page.hbs",
      },
      {
        type: "add",
        path: "src/content/{{kebabCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: `src/shells/{{kebabCase app}}/routes.ts`,
        pattern: /= \{(?<insertion>)/g,
        template:
          "  {{ snakeCase name }}:{\n" +
          "    path: '/{{ section }}/{{ kebabCase name}}',\n" +
          "    Component: lazy(\n" +
          "      () => import('./pages/{{ section }}/{{#if folder}}{{folder}}/{{/if}}{{kebabCase name}}/{{pascalCase name}}Page.js')\n" +
          "    ),\n" +
          "  },",
      },
    ],
  });
};
