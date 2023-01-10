/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

AppRegistry.registerComponent(appName, () => App);
