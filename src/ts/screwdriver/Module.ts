import { BaseItem } from "./item/BaseItem";
import { BaseRecipe } from "./recipe/BaseRecipe";

export class Module {
    items: {[id: string]: BaseItem<any>} = {};
    recipes: {[id: string]: BaseRecipe<any>} = {};

    load(json: ModuleJson): void {

    }

    save(): ModuleJson {
        const json = {};

        return json;
    }
}

export type ModuleJson = {

}