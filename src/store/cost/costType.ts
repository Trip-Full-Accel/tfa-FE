export interface CostState {
  cost: CostList[];
}
export interface CostList {
  id: number;
  transCost: number | null;
  foodCost: number | null;
  hotelCost: number | null;
  extraCost: number | null;
  totalCost: number | null;
}
