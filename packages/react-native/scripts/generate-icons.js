   // Also output React Native variant
      const rnOutDir = path.join(
        path.resolve(__dirname, '../packages/react-native/src/icons'),
        category
      );
      fs.mkdirSync(rnOutDir, { recursive: true });
      const rnTsx = await svgr(
        optimized,
        {
          native: true,
          typescript: true,
          expandProps: 'end',
          prettier: true,
          memo: true
        },
        { componentName }
      );
      fs.writeFileSync(path.join(rnOutDir, `${componentName}.tsx`), rnTsx, 'utf8');