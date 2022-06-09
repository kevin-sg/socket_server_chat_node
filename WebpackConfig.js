import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export default class WebpackConfig {
  resolvePath(...args) {
    if (this.dirname) return path.resolve(this.dirname, ...args);
    return path.resolve(...args);
  }
  getResolve() {
    return {
      /* root: this.resolvePath('src'),
      modulesDirectories: ['node_modules'], */
      alias: this.getResolveAlias(),
      extensions: this.getResolveExtensions(),
      modules: [this.resolvePath("src"), "node_modules"],
      ...(this.isTypescriptSupport()
        ? {
            plugins: [new TsconfigPathsPlugin({ configFile: this.resolvePath("tsconfig.json") })],
          }
        : {}),
    };
  }
}
