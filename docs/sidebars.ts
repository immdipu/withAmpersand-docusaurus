import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    "index",
    "quick-start",

    {
      type: "category",
      label: "Defining-integrations",
      link: {
        type: "doc",
        id: "defining-integrations/index",
      },
      collapsed: true,

      items: [
        "defining-integrations/read-actions",
        "defining-integrations/write-actions",
        "defining-integrations/proxy-actions",
        "defining-integrations/subscribe-actions",
        "defining-integrations/destinations",
      ],
    },
    "deploy-integrations",
    "embed-ui-components",
    "supported-apis",
    "glossary",
  ],
};

export default sidebars;
