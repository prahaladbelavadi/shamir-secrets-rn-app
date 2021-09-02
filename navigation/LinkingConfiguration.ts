/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Split: {
            screens: {
              SplitScreen: 'split',
            },
          },
          About: {
            screens: {
              AboutScreen: 'about',
            },
          },
          Combine: {
            screens: {
              CombineScreen: 'combine',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
