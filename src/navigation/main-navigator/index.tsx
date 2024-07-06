import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from 'constants/routes';
import {FavoritesScreen} from 'screens/favorites';
import {HomeScreen} from 'screens/home';

type MainStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.FAVORITES]: undefined;
};

const Tab = createBottomTabNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        options={{
          tabBarLabel: 'Home',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={ROUTES.FAVORITES}
        options={{
          tabBarLabel: 'Favorites',
        }}
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
};
