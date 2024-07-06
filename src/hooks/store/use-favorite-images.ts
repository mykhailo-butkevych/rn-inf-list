import {create} from 'zustand';

export type FavoriteItem = {
  id: number;
  url: string;
};

type State = {
  favorites: FavoriteItem[];
  add: (image: FavoriteItem) => void;
  remove: (id: number) => void;
};

export const useFavoriteImagesStore = create<State>(set => ({
  favorites: [],
  add: image =>
    set(state => ({
      favorites: [...state.favorites, image],
    })),
  remove: id =>
    set(state => ({
      favorites: state.favorites.filter(item => item.id !== id),
    })),
}));
