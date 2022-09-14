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
  version: "2.12.0",
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
    "@vueuse/core": "^9.2.0",
    vue: "^3.2.39"
  },
  devDependencies: {
    "@cypress/vite-dev-server": "^3.1.1",
    "@cypress/vue": "^4.2.0",
    "@histoire/plugin-vue": "^0.10.7",
    "@iconify-json/ant-design": "^1.1.3",
    "@iconify-json/carbon": "^1.1.7",
    "@iconify-json/gg": "^1.1.2",
    "@iconify-json/logos": "^1.1.16",
    "@iconify-json/octicon": "^1.1.17",
    "@iconify-json/teenyicons": "^1.1.3",
    "@iconify/json": "^2.1.107",
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
    histoire: "^0.10.7",
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
    vite: "^3.1.0",
    "vite-plugin-banner": "^0.5.0",
    "vite-plugin-dts": "^1.5.0",
    "vite-svg-loader": "^3.6.0",
    vitest: "^0.23.2",
    "vue-tsc": "^0.40.13"
  }
};

// vite.config.ts
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "/@": resolve("/Users/x400048/Projects/github/portfolio/packages/ui", "./src")
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
      entry: resolve("/Users/x400048/Projects/github/portfolio/packages/ui", "src/index.ts"),
      name: "AsUI",
      fileName: "as-ui"
    },
    watch: {
      include: [resolve("/Users/x400048/Projects/github/portfolio/packages/ui", "src")]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IFN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXG5pbXBvcnQgYmFubmVyIGZyb20gJ3ZpdGUtcGx1Z2luLWJhbm5lcidcblxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aGUnXG5cbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICcvQCc6IHJlc29sdmUoXCIvVXNlcnMveDQwMDA0OC9Qcm9qZWN0cy9naXRodWIvcG9ydGZvbGlvL3BhY2thZ2VzL3VpXCIsICcuL3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgfSksXG4gICAgVW5vY3NzKCksXG4gICAgU3ZnTG9hZGVyKCksXG4gICAgYmFubmVyKHtcbiAgICAgIGNvbnRlbnQ6IGAvKipcXG4gKiBuYW1lOiAke3BrZy5uYW1lfVxcbiAqIHZlcnNpb246IHYke1xuICAgICAgICBwa2cudmVyc2lvblxuICAgICAgfVxcbiAqIChjKSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cXG4gKiBkZXNjcmlwdGlvbjogJHtwa2cuZGVzY3JpcHRpb259XFxuICogYXV0aG9yOiAke3BrZy5hdXRob3J9XFxuICovYCxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKFwiL1VzZXJzL3g0MDAwNDgvUHJvamVjdHMvZ2l0aHViL3BvcnRmb2xpby9wYWNrYWdlcy91aVwiLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnQXNVSScsXG4gICAgICBmaWxlTmFtZTogJ2FzLXVpJyxcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBpbmNsdWRlOiBbcmVzb2x2ZShcIi9Vc2Vycy94NDAwMDQ4L1Byb2plY3RzL2dpdGh1Yi9wb3J0Zm9saW8vcGFja2FnZXMvdWlcIiwgJ3NyYycpXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8qICBwbHVnaW5zOiBbXG4gICAgICAgIGFuYWx5emUoKSxcbiAgICAgICAgdmlzdWFsaXplcih7XG4gICAgICAgICAgZ3ppcFNpemU6IHRydWUsXG4gICAgICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIF0sICovXG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZG4ndCBiZSBidW5kbGVkXG4gICAgICAvLyBpbnRvIHlvdXIgbGlicmFyeVxuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ0B2dWV1c2Uvc2hhcmVkJywgJ0B2dWV1c2UvY29yZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxuICAgICAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgJ0B2dWV1c2Uvc2hhcmVkJzogJ1Z1ZVVzZVNoYXJlZCcsXG4gICAgICAgICAgJ0B2dWV1c2UvY29yZSc6ICdWdWVVc2VDb3JlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sUUFBUSx3REFBd0QsT0FBTztBQUFBLElBQy9FO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxXQUFpQixnQkFBSTtBQUFBLGVBQzVCLGdCQUFJO0FBQUEsU0FDTSxJQUFJLEtBQUssRUFBRSxZQUFZO0FBQUEsa0JBQXNCLGdCQUFJO0FBQUEsYUFBMkIsZ0JBQUk7QUFBQTtBQUFBLElBQzlGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsd0RBQXdELGNBQWM7QUFBQSxNQUNyRixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsU0FBUyxDQUFDLFFBQVEsd0RBQXdELEtBQUssQ0FBQztBQUFBLElBQ2xGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFXYixVQUFVLENBQUMsT0FBTyxrQkFBa0IsY0FBYztBQUFBLE1BQ2xELFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUdULFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLGtCQUFrQjtBQUFBLFVBQ2xCLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
