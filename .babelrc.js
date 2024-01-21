module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-import'),
      {libraryName: '@ant-design/react-native'},
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@const': './src/const',
        },
      },
    ],

    ['babel-plugin-styled-components'],
    ['react-native-reanimated/plugin'],
  ],
};
