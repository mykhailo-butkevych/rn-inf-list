import {axiosOrigin} from 'api/config/axios-instances';
import {ENDPOINTS} from 'api/endpoints';
import {AxiosResponse} from 'axios';
import {MediaItem, Meta} from 'types/images';

export type ImagesApiResponse = {
  results: MediaItem[];
  meta: Meta;
};

type ImagesQuery = {
  q: string;
  page: unknown;
  per_page: number;
};

export const getImages = async ({q, page = 1, per_page = 10}: ImagesQuery) => {
  const response: AxiosResponse<ImagesApiResponse> = await axiosOrigin.get(
    `${ENDPOINTS.SEARCH_IMAGES}?q=${q}&page=${page}&per_page=${per_page}`,
  );
  return response.data;
};
