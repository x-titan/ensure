import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/**/*"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  minify: false,
  legacyOutput: false,
  bundle: false,
  skipNodeModulesBundle: true,
})
