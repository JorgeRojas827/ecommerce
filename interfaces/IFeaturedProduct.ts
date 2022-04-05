export interface IFeaturedProduct {
    product: Product;
}

export interface Product {
    data: Data;
}

export interface Data {
    id:         string;
    attributes: IProductRequest;
}

export interface IProductRequest {
    title:           string;
    price:           number;
    price_overpriced: number;
    description:     string;
    categories:      Categories;
    product_colors:   ProductColor;
    image_color:      ImageColor;
    image_gallery: ProductColor;
}

interface ImageColor {
    data: ImageData
}

export interface Categories {
    data: Datum[];
}

export interface Datum {
    id: string;
    attributes: CategoriesAttributes;
}

export interface CategoriesAttributes {
    name: string;
}

export interface ImageData {
    attributes: IImageAttributes;
}

export interface IImageAttributes {
    url: string;
}

export interface ProductColor {
    data: ImageData[];
}
