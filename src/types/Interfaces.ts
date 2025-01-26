interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photos: { urls: string[] };
  tones: { urls: string[] };
  view: number;
  type: boolean;
}

export type { Product };
