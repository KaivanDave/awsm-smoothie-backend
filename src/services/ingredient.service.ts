import { Ingredient } from '../models/ingridient';

export class IngredientService {

    async getIngredientsByIds(ids: string[]) {
        return Ingredient.find({ ingredient_id: { $in: ids } }).lean();
    }

    async getAllIngredients() {
        return Ingredient.find( {}).lean();
    }

}