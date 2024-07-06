import {FlashList} from '@shopify/flash-list';
import {EmptyList} from 'components/empty-list';
import {ImageItem} from 'components/image-item';
import {
  FavoriteItem,
  useFavoriteImagesStore,
} from 'hooks/store/use-favorite-images';
import {SIZES} from 'styles/sizes';

const CustomEmptyList = () => (
  <EmptyList message="You dont have any favorite images yet, add some from the home screen!" />
);

const keyExtractor = (item: FavoriteItem, index: number) =>
  `${index}-${item.id}`;

const renderItem = ({item}: {item: FavoriteItem}) => (
  <ImageItem url={item?.url} id={item?.id} />
);

export const FavoriteList = () => {
  const data = useFavoriteImagesStore(state => state.favorites);

  return (
    <FlashList
      data={data}
      keyExtractor={keyExtractor}
      estimatedItemSize={SIZES.COLLECTIBLE_ITEM_HEIGHT}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ListEmptyComponent={CustomEmptyList}
    />
  );
};
