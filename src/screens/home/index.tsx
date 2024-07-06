import {ImageList} from 'components/image-list';
import SearchInput from 'components/search-input';
import {DEFAULT_IMAGE_SEARCH} from 'constants/default-search';
import React from 'react';
import {ViewStyle, TextStyle, StyleSheet, View, ImageStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SIZES} from 'styles/sizes';
import {useHomeScreen} from './hooks';

export const HomeScreen = () => {
  const {
    searchTerm,
    data,
    isFetching,
    isFetchingNextPage,
    isError,
    error,
    loadMoreImages,
    resetAndRefetch,
    onSearch,
  } = useHomeScreen();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchInput onSearch={onSearch} defaultValue={DEFAULT_IMAGE_SEARCH} />
        <ImageList
          data={searchTerm ? data : []}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          isError={isError}
          error={error}
          onEndReached={loadMoreImages}
          onRefresh={resetAndRefetch}
        />
      </View>
    </SafeAreaView>
  );
};

type Style = {
  safeArea: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
};

const styles = StyleSheet.create<Style>({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    gap: 10,
    height: '100%',
  },
  title: {
    textTransform: 'uppercase',
    color: 'black',
  },
  image: {
    width: '100%',
    height: SIZES.COLLECTIBLE_ITEM_HEIGHT,
  },
});
