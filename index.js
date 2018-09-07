import { AppRegistry } from 'react-native';
import setup from './js/setup';
import { Sentry } from 'react-native-sentry';
Sentry.config('https://454f3fdeb7fa4be8b4b9740897b89f28:b2a369783bd74d828d624895088e48c4@sentry.io/1251406').install();

AppRegistry.registerComponent('reactNativePracticeProject', setup);
