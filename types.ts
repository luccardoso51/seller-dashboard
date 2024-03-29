export interface Product {
    id: string;
    category: string;
    name: string;
    price: string;
    isFeatured: boolean;
    size: string;
    color: string;
    images: Array<string>
  };
  
  export interface Image {
    id: string;
    url: string;
  }
  
  export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
  };
  
  export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
  };
  
  export interface Size {
    id: string;
    name: string;
    value: string;
  };
  
  export interface Color {
    id: string;
    name: string;
  }