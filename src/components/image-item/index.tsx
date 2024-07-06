import {FasterImageView} from '@candlefinance/faster-image';
import {StyledText} from 'components/styled-text';
import {useFavoriteImagesStore} from 'hooks/store/use-favorite-images';
import {
  Button,
  ImageStyle,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {SIZES} from 'styles/sizes';
import {useShallow} from 'zustand/react/shallow';

type Props = {
  url: string;
  id: number;
};

export const ImageItem = ({url, id}: Props) => {
  const [favorites, add, remove] = useFavoriteImagesStore(
    useShallow(state => [state.favorites, state.add, state.remove]),
  );
  const isFavorite = favorites.some(img => img.id === id);

  const handlePress = () => {
    if (isFavorite) {
      remove(id);
    } else {
      add({id, url});
    }
  };

  return (
    <View style={styles.container}>
      <FasterImageView
        style={styles.image}
        source={{
          transitionDuration: 0.5,
          showActivityIndicator: true,
          url,
          resizeMode: 'fill',
        }}
      />
      <View style={styles.footerContainer}>
        <StyledText style={styles.text} bold>
          ID: {id}
        </StyledText>
        <Button title={isFavorite ? 'Remove' : 'Add'} onPress={handlePress} />
      </View>
    </View>
  );
};

type Style = {
  container: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
  footerContainer: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    borderRadius: SIZES.BORDER_RADIUS_REGULAR,
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: SIZES.COLLECTIBLE_ITEM_HEIGHT,
    borderRadius: SIZES.BORDER_RADIUS_REGULAR,
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
