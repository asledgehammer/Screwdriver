import { BaseItem, ItemJson } from '../item/BaseItem';
import { KeyItem, KeyJson } from '../item/KeyItem';
import { Project } from '../project/Project';
import { BaseRecipe, RecipeJson } from '../recipe/BaseRecipe';

export class Module {
    project: Project;
    id: string;

    // Module contents
    items: { [id: string]: BaseItem<any> } = {};
    recipes: { [id: string]: BaseRecipe<any> } = {};

    constructor(project: Project, id: string) {
        this.project = project;
        this.id = id;
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
                    console.error(`[${this.id}]: Unknown Item type: {id: '${item.id}', type: '${item.type}'}`);
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

        for (const item of Object.values(this.items)) items[item.id] = item.save();
        for (const recipe of Object.values(this.recipes)) recipes[recipe.id] = recipe.save();

        return { id, items, recipes };
    }

    resolveContents() {
        // Resolve items.
        for (const item of Object.values(this.items)) {
            const parentID = item.getParentID();
            if (parentID != null) {
                const parent = this.project.getItem(parentID);
                if (parent == null) {
                    console.warn(`[${this.id}]: The item '${item.id}' cannot find its parent item '${parentID}'.`);
                    continue;
                }
                item.setParent(parent);
            }
        }
        // Resolve recipes.
        for (const recipe of Object.values(this.recipes)) {
            const parentID = recipe.getParentID();
            if (parentID != null) {
                const parent = this.project.getRecipe(parentID);
                if (parent == null) {
                    console.warn(
                        `[${this.id}]: The recipe '${recipe.id}' cannot find its parent recipe '${parentID}'.`
                    );
                    continue;
                }
                recipe.setParent(parent);
            }
        }
    }

    getItem(id: string): BaseItem<any> | null {
        return this.items[id];
    }

    getRecipe(id: string): BaseRecipe<any> | null {
        return this.recipes[id];
    }
}

export type ModuleJson = {
    id: string;
    items: { [id: string]: ItemJson };
    recipes: { [id: string]: RecipeJson };
};
