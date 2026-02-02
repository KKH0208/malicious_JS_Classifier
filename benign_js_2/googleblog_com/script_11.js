/* 元のURL: https://googleblog.com */

  const baseScripts = JSON.parse(document.querySelector("#base-scripts")?.getAttribute("data-scripts") || "[]");
  
  const userbar = typeof userbarScripts !== "undefined" && userbarScripts ? userbarScripts : [];

  const extraScripts = Array.from(document.querySelectorAll(".extra-scripts div[data-src]")).map(el => {
    const attrs = {};
    Array.from(el.attributes).forEach(attr => {
      attrs[attr.name === "data-src" ? "src" : attr.name] = attr.value;
    });
    return {
      url: attrs.src,
      options: {},
      attributes: Object.fromEntries(Object.entries(attrs).filter(([k]) => k !== "src"))
    };
  });

  [...baseScripts, ...userbar, ...extraScripts].forEach(({ url, options = {}, attributes = {} }) => {
    const script = Object.assign(document.createElement("script"), {
      async: options.async,
      defer: options.defer,
      src: url,
    });

    Object.entries(attributes).forEach(([k, v]) => script.setAttribute(k, v));
    document.head.appendChild(script);
  });


