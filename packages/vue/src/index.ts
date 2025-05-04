import type { App, Plugin, Component } from 'vue';
import { icons } from '@airqo-icons-min/core';

const AirqoIcons: Plugin = {
  install(app: App) {
    const modules = import.meta.glob('./icons/**/*.vue', { eager: true });

    for (const meta of icons) {
      const iconPath = `./icons/${meta.category}/${meta.name}.vue`;
      const module = modules[iconPath] as { default: Component };
      if (module) {
        app.component(meta.name, module.default);
      }
    }
  },
};

// Export both the plugin and icons
export { icons, type Plugin };
export default AirqoIcons;
