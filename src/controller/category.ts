import { Response, Request} from 'express';
import { RecipeService } from '../services/recipe.service';
import { AuthorService } from '../services/author.service';
import { CategoryService } from '../services/category.service';

const recipeService = new RecipeService();
const authorService = new AuthorService();
const categoryService = new CategoryService();

export class CategoryController {

    async getCategory(req: Request, res: Response): Promise<any> {
        const params: any = req.params;
        const category = await categoryService.getCategoryById(params.id);

        if(!category) {
            return res.status(404).send('Category not found');
        }

        const recipeCount = await recipeService.getRecipesCountByCategoryId(params.id);
        const bannerDescription = category.category_banner_description.replace('[count]', recipeCount.toString());

        return res.send({
            ...category,
            bannerDescription
        });
    }
}