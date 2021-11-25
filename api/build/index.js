var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var React3 = __toModule(require("react"));
var import_remix4 = __toModule(require("remix"));

// app/styles/temporary.css
var temporary_default = "/build/_assets/temporary-55DNWN2R.css";

// app/components/Footer.tsx
var import_fa = __toModule(require("react-icons/fa"));
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    style: { display: "flex", justifyContent: "center" }
  }, /* @__PURE__ */ React.createElement("a", {
    title: "Instagram",
    href: "https://github.com/tonykhaov",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_fa.FaGithub, null)), /* @__PURE__ */ React.createElement("a", {
    title: "Twitter",
    href: "https://twitter.com/tonykhaov",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React.createElement(import_fa.FaTwitter, null)));
}
var Footer_default = Footer;

// app/components/Header.tsx
var import_remix2 = __toModule(require("remix"));
function Header() {
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", justifyContent: "space-between" }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    title: "Photo of Tony Khaov"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "3rem",
      height: "3rem",
      borderRadius: "100%",
      backgroundColor: "green"
    }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    title: "Tony Khaov"
  }, "Tony Khaov")), /* @__PURE__ */ React.createElement("p", null, "Front End Developer"))), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation"
  }, /* @__PURE__ */ React.createElement("ul", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/cours"
  }, "Cours")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/about"
  }, "About"))))));
}
var Header_default = Header;

// app/components/Layout.tsx
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, children)), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var Layout_default = Layout;

// app/components/RouteChangeAnnouncement.tsx
var React2 = __toModule(require("react"));
var import_remix3 = __toModule(require("remix"));
var RouteChangeAnnouncement = React2.memo(() => {
  let [hydrated, setHydrated] = React2.useState(false);
  let [innerHtml, setInnerHtml] = React2.useState("");
  let location = (0, import_remix3.useLocation)();
  React2.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React2.useRef(true);
  React2.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ React2.createElement("div", {
    "aria-live": "assertive",
    "aria-atomic": true,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, innerHtml);
});
var RouteChangeAnnouncement_default = RouteChangeAnnouncement;

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: temporary_default }];
};
function App() {
  return /* @__PURE__ */ React3.createElement(Document, null, /* @__PURE__ */ React3.createElement(Layout_default, null, /* @__PURE__ */ React3.createElement(import_remix4.Outlet, null)));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React3.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React3.createElement("head", null, /* @__PURE__ */ React3.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React3.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React3.createElement("title", null, title) : null, /* @__PURE__ */ React3.createElement(import_remix4.Meta, null), /* @__PURE__ */ React3.createElement(import_remix4.Links, null)), /* @__PURE__ */ React3.createElement("body", null, children, /* @__PURE__ */ React3.createElement(RouteChangeAnnouncement_default, null), /* @__PURE__ */ React3.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React3.createElement(import_remix4.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React3.createElement(import_remix4.LiveReload, null)));
}
function CatchBoundary() {
  let caught = (0, import_remix4.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React3.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React3.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React3.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React3.createElement(Layout_default, null, /* @__PURE__ */ React3.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React3.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React3.createElement(Layout_default, null, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("h1", null, "There was an error"), /* @__PURE__ */ React3.createElement("p", null, error.message), /* @__PURE__ */ React3.createElement("hr", null), /* @__PURE__ */ React3.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}

// mdx:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/posts/first-post.md
var first_post_exports = {};
__export(first_post_exports, {
  default: () => first_post_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  meta: () => meta
});
var import_react = __toModule(require("react"));
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h1, null, "This is my very first post"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, "Hello this is my very first post. I just want to give it a try."));
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var first_post_default = MDXContent;
var filename = "first-post.md";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var links2 = void 0;

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/cours/index.tsx
var cours_exports = {};
__export(cours_exports, {
  default: () => cours_default
});
function CoursIndex() {
  return /* @__PURE__ */ React.createElement("h1", null, "Good");
}
var cours_default = CoursIndex;

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
function About() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "About me \u{1F468}"), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab itaque deleniti similique omnis, blanditiis porro minus? Officia molestiae nihil earum aperiam doloremque exercitationem nobis? Dolorem magni ex alias atque quas, nesciunt officia laboriosam voluptate repellat modi quia placeat maxime ab voluptates, repellendus minus dicta veniam magnam, vitae voluptatibus doloremque asperiores sapiente dolorum dignissimos? Beatae, saepe harum. Ipsa, facere vel?"));
}
var about_default = About;

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta2
});
var import_remix5 = __toModule(require("remix"));

// app/post.ts
var import_path = __toModule(require("path"));
var import_promises = __toModule(require("fs/promises"));
async function getPosts() {
  const postPath = import_path.default.join(__dirname, "..", "..", "app", "routes", "posts");
  const posts = await import_promises.default.readdir(postPath);
  const slugs = posts.map((post) => {
    const [slug] = post.split(".");
    return slug;
  });
  return slugs;
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/index.tsx
var loader = () => {
  return getPosts();
};
var meta2 = () => {
  return {
    title: "Homepage",
    description: "Welcome to my homepage!"
  };
};
function Index() {
  const posts = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Recent blog posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post
  }, /* @__PURE__ */ React.createElement("h2", null, post), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis quo accusamus unde. Fugit, aspernatur? Iste repellendus laborum nesciunt voluptatibus!"), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `posts/${post}`
  }, "Read more \u2192")))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/posts/first-post": {
    id: "routes/posts/first-post",
    parentId: "root",
    path: "posts/first-post",
    index: void 0,
    caseSensitive: void 0,
    module: first_post_exports
  },
  "routes/cours/index": {
    id: "routes/cours/index",
    parentId: "root",
    path: "cours",
    index: true,
    caseSensitive: void 0,
    module: cours_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
