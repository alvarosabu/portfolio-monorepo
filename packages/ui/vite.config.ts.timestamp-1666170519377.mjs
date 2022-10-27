// vite.config.ts
import { defineConfig } from "vite";
import Unocss from "unocss/vite";
import SvgLoader from "vite-svg-loader";
import banner from "vite-plugin-banner";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";
import { resolve } from "pathe";

// package.json
var package_default = {
  name: "@alvarosabu/ui",
  version: "2.17.0",
  type: "module",
  description: "UI Library for AS development",
  author: "Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)",
  files: [
    "dist"
  ],
  license: "MIT",
  main: "./dist/as-ui.umd.cjs",
  module: "./dist/as-ui.js",
  types: "./dist/index.d.ts",
  exports: {
    ".": {
      import: "./dist/as-ui.js",
      require: "./dist/as-ui.umd.cjs"
    },
    "./styles": "./dist/style.css",
    "./*": "./dist/as-ui.js"
  },
  publishConfig: {
    access: "public"
  },
  scripts: {
    dev: "vite",
    build: "vue-tsc --noEmit && vite build",
    preview: "vite preview",
    "story:dev": "histoire dev",
    "story:build": "histoire build",
    "story:preview": "histoire preview",
    test: "vitest",
    coverage: "vitest run --coverage",
    cy: "cypress open"
  },
  dependencies: {
    "@vueuse/core": "^9.3.0",
    vue: "^3.2.39"
  },
  devDependencies: {
    "@cypress/vite-dev-server": "^3.1.1",
    "@cypress/vue": "^4.2.0",
    "@histoire/plugin-vue": "^0.11.0",
    "@iconify-json/ant-design": "^1.1.3",
    "@iconify-json/carbon": "^1.1.8",
    "@iconify-json/gg": "^1.1.2",
    "@iconify-json/logos": "^1.1.16",
    "@iconify-json/octicon": "^1.1.17",
    "@iconify-json/teenyicons": "^1.1.3",
    "@iconify/json": "^2.1.109",
    "@types/node": "^18.7.18",
    "@unocss/preset-attributify": "^0.45.21",
    "@unocss/preset-icons": "^0.45.21",
    "@unocss/preset-typography": "^0.45.21",
    "@unocss/preset-uno": "^0.45.21",
    "@unocss/preset-web-fonts": "^0.45.21",
    "@unocss/reset": "^0.45.21",
    "@vitejs/plugin-vue": "^3.1.0",
    "@vue/test-utils": "^2.0.2",
    c8: "^7.12.0",
    cypress: "^10.8.0",
    histoire: "^0.11.0",
    jsdom: "^20.0.0",
    pathe: "^0.3.7",
    "rollup-plugin-analyzer": "^4.0.0",
    "rollup-plugin-copy": "^3.4.0",
    "rollup-plugin-visualizer": "^5.8.1",
    sass: "^1.54.9",
    shikey: "^0.0.2",
    shiki: "^0.11.1",
    "shiki-es": "^0.1.2",
    tslib: "^2.4.0",
    typescript: "^4.8.3",
    unocss: "^0.45.21",
    vite: "^3.1.2",
    "vite-plugin-banner": "^0.5.0",
    "vite-plugin-dts": "^1.5.0",
    "vite-svg-loader": "^3.6.0",
    vitest: "^0.23.4",
    "vue-tsc": "^0.40.13"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/x400048/Projects/github/portfolio/packages/ui";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "/@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  test: {
    globals: true,
    environment: "jsdom"
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    }),
    Unocss(),
    SvgLoader(),
    banner({
      content: `/**
 * name: ${package_default.name}
 * version: v${package_default.version}
 * (c) ${new Date().getFullYear()}
 * description: ${package_default.description}
 * author: ${package_default.author}
 */`
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "AsUI",
      fileName: "as-ui"
    },
    watch: {
      include: [resolve(__vite_injected_original_dirname, "src")]
    },
    rollupOptions: {
      external: ["vue", "@vueuse/shared", "@vueuse/core"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "@vueuse/shared": "VueUseShared",
          "@vueuse/core": "VueUseCore"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveDQwMDA0OC9Qcm9qZWN0cy9naXRodWIvcG9ydGZvbGlvL3BhY2thZ2VzL3VpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveDQwMDA0OC9Qcm9qZWN0cy9naXRodWIvcG9ydGZvbGlvL3BhY2thZ2VzL3VpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy94NDAwMDQ4L1Byb2plY3RzL2dpdGh1Yi9wb3J0Zm9saW8vcGFja2FnZXMvdWkvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBTdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJ1xuaW1wb3J0IGJhbm5lciBmcm9tICd2aXRlLXBsdWdpbi1iYW5uZXInXG5cbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGhlJ1xuXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnL0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBkdHMoe1xuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICB9KSxcbiAgICBVbm9jc3MoKSxcbiAgICBTdmdMb2FkZXIoKSxcbiAgICBiYW5uZXIoe1xuICAgICAgY29udGVudDogYC8qKlxcbiAqIG5hbWU6ICR7cGtnLm5hbWV9XFxuICogdmVyc2lvbjogdiR7XG4gICAgICAgIHBrZy52ZXJzaW9uXG4gICAgICB9XFxuICogKGMpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxcbiAqIGRlc2NyaXB0aW9uOiAke3BrZy5kZXNjcmlwdGlvbn1cXG4gKiBhdXRob3I6ICR7cGtnLmF1dGhvcn1cXG4gKi9gLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnQXNVSScsXG4gICAgICBmaWxlTmFtZTogJ2FzLXVpJyxcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBpbmNsdWRlOiBbcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKV0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvKiAgcGx1Z2luczogW1xuICAgICAgICBhbmFseXplKCksXG4gICAgICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgICAgIGJyb3RsaVNpemU6IHRydWUsXG4gICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICBdLCAqL1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZFxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZScsICdAdnVldXNlL3NoYXJlZCcsICdAdnVldXNlL2NvcmUnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGRcbiAgICAgICAgLy8gZm9yIGV4dGVybmFsaXplZCBkZXBzXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICAgICdAdnVldXNlL3NoYXJlZCc6ICdWdWVVc2VTaGFyZWQnLFxuICAgICAgICAgICdAdnVldXNlL2NvcmUnOiAnVnVlVXNlQ29yZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxZQUFZO0FBRW5CLE9BQU8sU0FBUztBQUVoQixPQUFPLFNBQVM7QUFFaEIsU0FBUyxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWeEIsSUFBTSxtQ0FBbUM7QUFlekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsV0FBaUIsZ0JBQUk7QUFBQSxlQUM1QixnQkFBSTtBQUFBLFNBQ00sSUFBSSxLQUFLLEVBQUUsWUFBWTtBQUFBLGtCQUFzQixnQkFBSTtBQUFBLGFBQTJCLGdCQUFJO0FBQUE7QUFBQSxJQUM5RixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsU0FBUyxDQUFDLFFBQVEsa0NBQVcsS0FBSyxDQUFDO0FBQUEsSUFDckM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQVdiLFVBQVUsQ0FBQyxPQUFPLGtCQUFrQixjQUFjO0FBQUEsTUFDbEQsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBR1QsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsa0JBQWtCO0FBQUEsVUFDbEIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
