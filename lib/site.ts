export const SITE = {
  name: "HelloWorld",

  description:
    "探索无限可能，用现代科技连接世界。",

  author: "Jack Huang",

  github: "https://github.com/glenman",

  repository: "hello-world-landing",

  basePath:
    process.env.NODE_ENV === "production"
      ? "/hello-world-landing"
      : "",
};

export const BASE_PATH = SITE.basePath;