export type MediaItem = {
  media_type: string;
  media_source: string;
  media_id: number;
  name: string;
  description: string;
  image: string;
  preview_image: string;
  tags: string[];
  url: string;
};

export type Meta = {
  type: string;
  q: string;
  count: number;
  totalCount: number;
};
