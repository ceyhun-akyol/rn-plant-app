export type ItemType = {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
};

export type CartItemType = {
  name: string;
  price: string;
  id: string;
  count: number;
};

export type QuestionType = {
  id: number;
  title: string;
  subtitle: string;
  imageUri: string;
  uri: string;
  order: number;
};

export type CategorieImageType = {
  id: number;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
};

export type CategoryType = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: CategorieImageType;
};
