interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photos: { urls: string[] };
  tones: { colors: string[] };
  view: number;
  type: boolean;
}

export type { Product };
