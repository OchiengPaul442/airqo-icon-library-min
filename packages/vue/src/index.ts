import { App, Plugin } from 'vue';
import { icons } from '@airqo-icons/core';

const AirqoIcons: Plugin = {
  install(app: App) {
    // Import all SVG files
    const modules = import.meta.glob('./icons/**/*.vue', { eager: true });

    for (const meta of icons) {
      const iconPath = `./icons/${meta.category}/${meta.name}.vue`;
      const module = modules[iconPath] as { default: any };
      if (module) {
        app.component(meta.name, module.default);
      }
    }
  },
};

export default AirqoIcons;
export { icons };
