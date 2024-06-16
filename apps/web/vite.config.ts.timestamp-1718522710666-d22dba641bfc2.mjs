// vite.config.ts
import { defineConfig } from "file:///F:/web%20dev/projects/acme-vite-turbo/node_modules/vite/dist/node/index.js";
import { TanStackRouterVite } from "file:///F:/web%20dev/projects/acme-vite-turbo/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
import tsconfigPaths from "file:///F:/web%20dev/projects/acme-vite-turbo/node_modules/vite-tsconfig-paths/dist/index.mjs";
import react from "file:///F:/web%20dev/projects/acme-vite-turbo/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslint from "file:///F:/web%20dev/projects/acme-vite-turbo/node_modules/vite-plugin-eslint/dist/index.mjs";
var vite_config_default = defineConfig(() => {
  return {
    optimizeDeps: {
      include: ["@acme/ui", "@acme/db", "@acme/emails", "@acme/api"]
    },
    plugins: [eslint(), react(), TanStackRouterVite(), tsconfigPaths()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx3ZWIgZGV2XFxcXHByb2plY3RzXFxcXGFjbWUtdml0ZS10dXJib1xcXFxhcHBzXFxcXHdlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcd2ViIGRldlxcXFxwcm9qZWN0c1xcXFxhY21lLXZpdGUtdHVyYm9cXFxcYXBwc1xcXFx3ZWJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L3dlYiUyMGRldi9wcm9qZWN0cy9hY21lLXZpdGUtdHVyYm8vYXBwcy93ZWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JvdXRlci12aXRlLXBsdWdpblwiXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcbmltcG9ydCBlc2xpbnQgZnJvbSBcInZpdGUtcGx1Z2luLWVzbGludFwiXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuICAgcmV0dXJuIHtcbiAgICAgIG9wdGltaXplRGVwczoge1xuICAgICAgICAgaW5jbHVkZTogW1wiQGFjbWUvdWlcIiwgXCJAYWNtZS9kYlwiLCBcIkBhY21lL2VtYWlsc1wiLCBcIkBhY21lL2FwaVwiXSxcbiAgICAgIH0sXG4gICAgICBwbHVnaW5zOiBbZXNsaW50KCksIHJlYWN0KCksIFRhblN0YWNrUm91dGVyVml0ZSgpLCB0c2NvbmZpZ1BhdGhzKCldLFxuICAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1UsU0FBUyxvQkFBb0I7QUFDalcsU0FBUywwQkFBMEI7QUFDbkMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUduQixJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUMvQixTQUFPO0FBQUEsSUFDSixjQUFjO0FBQUEsTUFDWCxTQUFTLENBQUMsWUFBWSxZQUFZLGdCQUFnQixXQUFXO0FBQUEsSUFDaEU7QUFBQSxJQUNBLFNBQVMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLG1CQUFtQixHQUFHLGNBQWMsQ0FBQztBQUFBLEVBQ3JFO0FBQ0gsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
