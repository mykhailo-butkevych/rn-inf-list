import {FlashList} from '@shopify/flash-list';
import {EmptyList} from 'components/empty-list';
import {ImageItem} from 'components/image-item';
import {StyledActivityIndicator} from 'components/styled-activity-indicator';
import {StyledText} from 'components/styled-text';
import {
  Button,
  RefreshControl,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {SIZES} from 'styles/sizes';
import {MediaItem} from 'types/images';

const keyExtractor = (item: MediaItem, index: number) =>
  `${index}-${item.media_id}`;

const renderItem = ({item}: {item: MediaItem}) => (
  <ImageItem url={item?.image} id={item?.media_id} />
);

const CustomEmptyList = () => (
  <EmptyList message="No images found, try searching for something else" />
);

type Props = {
  data: MediaItem[];
  isFetching: boolean;
  isFetchingNextPage: boolean;
  isError: boolean;
  error: Error | null;
  onEndReached: () => void;
  onRefresh: () => void;
};

export const ImageList = ({
  data,
  isFetching,
  isFetchingNextPage,
  isError,
  error,
  onEndReached,
  onRefresh,
}: Props) => {
  if (isError) {
    return (
      <View style={styles.errorContainer}>
        {error?.message && (
          <View>
            <StyledText bold>Fetching Images Error:</StyledText>
            <StyledText>{error.message}</StyledText>
          </View>
        )}
        <Button title="Retry" onPress={onRefresh} />
      </View>
    );
  }

  return (
    <FlashList
      data={data}
      keyExtractor={keyExtractor}
      estimatedItemSize={SIZES.COLLECTIBLE_ITEM_HEIGHT}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={onRefresh}
          tintColor={'black'}
        />
      }
      ListFooterComponent={isFetchingNextPage ? StyledActivityIndicator : null}
      ListEmptyComponent={isFetching ? null : CustomEmptyList}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
    />
  );
};

type Style = {
  errorContainer: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  errorContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
