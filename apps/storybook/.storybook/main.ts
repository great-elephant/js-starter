import { join, dirname, resolve } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../sdks/uikit-react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  // There is an issue, when changing props(eg: button loading = true), it will throw React is not defined.
  // => https://stackoverflow.com/a/77606428
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // See: https://github.com/storybookjs/storybook/issues/23295#issuecomment-1629918584
      react: resolve(__dirname, '../../../node_modules/react'),
      '@uikit-react': resolve(__dirname, "../../../sdks/uikit-react/src"),
    };

    // See: https://github.com/storybookjs/storybook/issues/17095#issuecomment-1084660831
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1, // We always need to apply postcss-loader before css-loader
            modules: {
              auto: /\.module\.scss$/, // true
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
        {
          loader: 'postcss-loader', // required for tailwind
          options: {
            implementation: require('postcss'),
            postcssOptions: {
              config: resolve(__dirname, '../postcss.config.js'),
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        },
      ],
    });

    return config;
  }
};
export default config;
