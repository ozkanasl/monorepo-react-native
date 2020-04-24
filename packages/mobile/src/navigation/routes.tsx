import React from 'react'; // eslint-disable-line no-unused-vars
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import defaultNavigationOptions from './navigationOptions';
import HomeScreen from '../screens/Home';

export const MainStack = createStackNavigator({
	Home: HomeScreen,
}, {
	initialRouteName: 'Home',
	defaultNavigationOptions
});

/**
 * Root
 */
export const RootStack = createSwitchNavigator({
	Main: MainStack,
}, {
	initialRouteName: 'Main',
	mode: 'modal',
	headerMode: 'none',
});
