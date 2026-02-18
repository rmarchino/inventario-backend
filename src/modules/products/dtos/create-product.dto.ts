export interface CreateProductDto {
  name: string;
  sku?: string;
  sale_type: "PESO" | "UNIDAD";
  price_unit?: number;
  price_per_kg?: number;
  stock?: number;
  category_id?: string;
}
