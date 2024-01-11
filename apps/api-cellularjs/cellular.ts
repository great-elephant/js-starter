import type { CellularConfig } from '@cellularjs/cli';
import nodeExternals from 'webpack-node-externals';

const cellularConfig: CellularConfig = {
  entry: {
    http: './src/$gateway/http/index.ts',
  },
  webpack(config) {
    // override exist nodeExternals
    config.externals = [
      nodeExternals({
        allowlist: [
          /@sdks/,
        ],
      }),
    ];

    return config;
  },
};

export default cellularConfig;
