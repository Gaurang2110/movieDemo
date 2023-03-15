import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../container/home';
import {RouteName} from '../helper/routeName';
import Movies from '../container/movies';
import Charts from '../container/charts';
import Awards from '../container/awards';
import SvgIcons from '../assets/svgIcons';
import {colors} from '../assets/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieInfo from '../container/movieInfo';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.tabBg,
          paddingVertical: wp(4),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SvgIcons.HomeIcon
                fill={focused ? colors.activeClr : colors.lightText}
              />
            );
          },
        }}
        name={RouteName.home}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SvgIcons.AwardIcon
                fill={focused ? colors.activeClr : colors.lightText}
              />
            );
          },
        }}
        name={RouteName.awards}
        component={Awards}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SvgIcons.MoviesIcon
                fill={focused ? colors.activeClr : colors.lightText}
              />
            );
          },
        }}
        name={RouteName.movies}
        component={Movies}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SvgIcons.ChartIcon
                fill={focused ? colors.activeClr : colors.lightText}
              />
            );
          },
        }}
        name={RouteName.charts}
        component={Charts}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={RouteName.bottomTab}>
        <Stack.Screen name={RouteName.bottomTab} component={BottomTab} />
        <Stack.Screen name={RouteName.detailMovie} component={MovieInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
