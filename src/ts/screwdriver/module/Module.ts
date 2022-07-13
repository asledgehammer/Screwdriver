import { BaseItem, ItemJson } from '../item/BaseItem';
import { KeyItem, KeyJson } from '../item/KeyItem';
import { BaseRecipe, RecipeJson } from '../recipe/BaseRecipe';

export class Module {
    items: { [id: string]: BaseItem<any> } = {};
    recipes: { [id: string]: BaseRecipe<any> } = {};
    id: string;

    constructor(id: string, json?: ModuleJson) {
        this.id = id;
        if (json != null) this.load(json);
    }

    load(json: ModuleJson): void {
        // Reset all dictionaries.
        this.items = {};
        this.recipes = {};
        this.id = json.id;

        // Load all items in the module.
        for (const item of Object.values(json.items)) {
            switch (item.type) {
                case 'Key': {
                    this.items[item.id] = new KeyItem(this, item as KeyJson);
                    break;
                }
                default: {
                    console.error(`[${this.id}]: Unknown Item type: {name: '${item.name}', type: '${item.type}'}`);
                }
            }
        }

        // Load all recipes in the module.
        for (const recipe of Object.values(json.recipes)) {
            // TODO: Implement.
        }
    }

    save(): ModuleJson {
        const { id } = this;
        const items: { [id: string]: ItemJson } = {};
        const recipes: { [id: string]: RecipeJson } = {};

        for (const item of Object.values(this.items)) items[item.name] = item.save();
        for (const recipe of Object.values(this.recipes)) recipes[recipe.name] = recipe.save();

        return { id, items, recipes };
    }
}

export type ModuleJson = {
    id: string;
    items: { [id: string]: ItemJson };
    recipes: { [id: string]: RecipeJson };
};
