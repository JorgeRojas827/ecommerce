export interface IProducts {
    products: Products;
}

export interface Products {
    data: ProductRequest[];
}

export interface ProductRequest {
    id: string;
    attributes: ProductAttributes;
}

export interface ProductAttributes {
    title:       string;
    price:       number;
    image:       Image;
    image_color: ImageColor;
}

export interface Image {
    data: ImageRequest;
}

export interface ImageRequest {
    attributes: ImageAttributes;
}

export interface ImageAttributes {
    url: string;
}

export interface ImageColor {
    data: ImageRequest;
}
