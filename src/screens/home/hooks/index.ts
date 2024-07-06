import {useQueryClient} from '@tanstack/react-query';
import {getReducedData, useGetImages} from 'api/hooks/use-get-images';
import {DEFAULT_IMAGE_SEARCH} from 'constants/default-search';
import {useCallback, useState} from 'react';

export const useHomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState(DEFAULT_IMAGE_SEARCH);

  const queryClient = useQueryClient();
  const {
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    refetch,
    isError,
    error,
    isFetchingNextPage,
  } = useGetImages(searchTerm, 10);

  const loadMoreImages = useCallback(async () => {
    if (!hasNextPage || isFetching) {
      return;
    }

    const {data: newData} = await fetchNextPage();

    if (newData) {
      return getReducedData(newData.pages);
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  const resetAndRefetch = async () => {
    queryClient.removeQueries({queryKey: ['images']});
    refetch();
  };

  const onSearch = (value: string) => setSearchTerm(value);

  return {
    searchTerm,
    data,
    isFetching,
    isFetchingNextPage,
    isError,
    error,
    loadMoreImages,
    resetAndRefetch,
    onSearch,
  };
};
