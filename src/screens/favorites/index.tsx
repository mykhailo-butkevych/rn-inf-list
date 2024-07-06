import {FavoriteList} from 'components/favorite-list';
import {ViewStyle, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FavoriteList />
      </View>
    </SafeAreaView>
  );
};

type Style = {
  safeArea: ViewStyle;
  container: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    height: '100%',
  },
});
