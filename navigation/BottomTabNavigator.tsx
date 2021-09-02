/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';
import AboutScreen from '../screens/AboutScreen';
import CombineScreen from '../screens/CombineScreen';
import SplitScreen from '../screens/SplitScreen';
import {
  BottomTabParamList,
  AboutParamList,
  TabCombineParamList,
  TabSplitParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="About"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="About"
        component={TabAboutNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Split"
        component={TabSplitNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Combine"
        component={TabCombineNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabAboutStack = createStackNavigator<AboutParamList>();

function TabAboutNavigator() {
  return (
    <TabAboutStack.Navigator>
      <TabAboutStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ headerTitle: 'About Shamir Secret Sharing' }}
      />
    </TabAboutStack.Navigator>
  );
}

const TabCombineStack = createStackNavigator<TabCombineParamList>();

function TabCombineNavigator() {
  return (
    <TabCombineStack.Navigator>
      <TabCombineStack.Screen
        name="CombineScreen"
        component={CombineScreen}
        options={{ headerTitle: 'Combine Secrets' }}
      />
    </TabCombineStack.Navigator>
  );
}

const TabSplitStack = createStackNavigator<TabSplitParamList>();

function TabSplitNavigator() {
  return (
    <TabSplitStack.Navigator>
      <TabSplitStack.Screen
        name="SplitScreen"
        component={SplitScreen}
        options={{ headerTitle: 'Split Secret' }}
      />
    </TabSplitStack.Navigator>
  );
}
