import { renderToString as render } from "vue/server-renderer";
export const renderToString = (...args) => {
  return render(...args).then((result) => `<div id="__nuxt">${result}</div>`);
};
