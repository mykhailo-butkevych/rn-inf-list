import {useInfiniteQuery} from '@tanstack/react-query';
import {ImagesApiResponse, getImages} from 'api/images';
import {MediaItem} from 'types/images';

export const getReducedData = (pages: ImagesApiResponse[]): MediaItem[] =>
  pages.reduce<MediaItem[]>(
    (accumulator, current) => [...accumulator, ...current.results],
    [],
  );

const getPageNumber = (
  pages: ImagesApiResponse[],
  perPage: number,
): number | undefined => {
  const totalPages = Math.ceil(pages[0].meta.totalCount / perPage);
  const nextPage = Math.ceil(getReducedData(pages).length / perPage) + 1;
  return nextPage > totalPages ? undefined : nextPage;
};

export const useGetImages = (searchQuery: string, perPage: number = 10) => {
  const {data, ...rest} = useInfiniteQuery<ImagesApiResponse>({
    queryKey: ['images', searchQuery, perPage],
    initialPageParam: 1,
    queryFn: ({pageParam}) =>
      getImages({
        q: searchQuery,
        page: pageParam,
        per_page: perPage,
      }),
    getNextPageParam: (_, pages) => getPageNumber(pages, perPage),
  });

  return {
    data: data ? getReducedData(data.pages) : [],
    ...rest,
  };
};
