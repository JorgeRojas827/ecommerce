export interface ICategories {
    categories: Categories;
}

export interface Categories {
    data: CategoriesData[];
}

export interface CategoriesData {
    id:         string;
    attributes: Attributes;
}

export interface Attributes {
    name: string;
}
