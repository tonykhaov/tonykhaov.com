var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta
});
var import_react = __toModule(require("react"));
var import_remix5 = __toModule(require("remix"));
function meta() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix5.json)("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return (0, import_remix5.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix5.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix5.useActionData)();
  let answerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ React.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", null, "Answer:"), /* @__PURE__ */ React.createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ React.createElement("code", null, "useActionData"))))));
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta2
});
var import_remix6 = __toModule(require("remix"));
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
function Boundaries2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/params/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader,
  meta: () => meta3
});
var import_remix7 = __toModule(require("remix"));
var loader = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix7.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = (0, import_remix7.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta3 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/cours/index.tsx
var cours_exports = {};
__export(cours_exports, {
  default: () => cours_default
});
function CoursIndex() {
  return /* @__PURE__ */ React.createElement("h1", null, "Good");
}
var cours_default = CoursIndex;

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta4
});
var import_remix8 = __toModule(require("remix"));

// app/styles/demos/about.css
var about_default = "/build/_assets/about-GGM5BPB3.css";

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/about.tsx
var meta4 = () => {
  return {
    title: "About Remix"
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null)));
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
var import_remix9 = __toModule(require("remix"));
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
var import_remix10 = __toModule(require("remix"));
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " index."))));
}

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/about.tsx
var about_exports3 = {};
__export(about_exports3, {
  default: () => about_default2
});
function About() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "About me \u{1F468}"), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab itaque deleniti similique omnis, blanditiis porro minus? Officia molestiae nihil earum aperiam doloremque exercitationem nobis? Dolorem magni ex alias atque quas, nesciunt officia laboriosam voluptate repellat modi quia placeat maxime ab voluptates, repellendus minus dicta veniam magnam, vitae voluptatibus doloremque asperiores sapiente dolorum dignissimos? Beatae, saepe harum. Ipsa, facere vel?"));
}
var about_default2 = About;

// route-module:/Users/tonykhaov/Downloads/tonykhaov.com/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader2,
  meta: () => meta5
});
var loader2 = () => {
  return null;
};
var meta5 = () => {
  return {
    title: "Homepage",
    description: "Welcome to my homepage!"
  };
};
function Index2() {
  return /* @__PURE__ */ React.createElement("h1", null, "Hello");
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
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/cours/index": {
    id: "routes/cours/index",
    parentId: "root",
    path: "cours",
    index: true,
    caseSensitive: void 0,
    module: cours_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports3
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
