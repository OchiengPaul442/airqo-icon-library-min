import { App, Plugin } from 'vue';
import * as Icons from '@airqo-icons/core';

const AirqoIcons: Plugin = {
  install(app: App) {
    for (const meta of Icons.icons) {
      const {
        [meta.name]: component,
      } = require(`./icons/${meta.category}/${meta.name}.svg`);
      app.component(meta.name, component);
    }
  },
};

export default AirqoIcons;
