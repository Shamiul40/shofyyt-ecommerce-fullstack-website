export type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
  reviewerEmail: string;
};

export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;

  price: number;
  discountPercentage: number;
  rating: number;

  stock: number;
  availabilityStatus: string;
  minimumOrderQuantity: number;

  dimensions: {
    depth: number;
    height: number;
    width: number;
  };

  images: string[];
  thumbnail: string;
  tags: string[];

  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };

  reviews: Review[];

  returnPolicy: string;
  shippingInformation: string;
  sku: string;
  warrantyInformation: string;

  weight: number;

  quantity?: number;
}

export interface StateType {
  shofy : {
    cart: ProductType[];
    favorite: ProductType[];
    userInfo: unknown;
  };
}