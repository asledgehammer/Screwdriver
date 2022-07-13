import { Module } from "../Module";

export abstract class BaseRecipe<Json extends RecipeJson> {

    module: Module;
    id: string;

    constructor(module: Module, idOrJson: Json | string) {

        this.module = module;

        if (typeof idOrJson === 'string') {
            this.id = idOrJson;
        } else {
            this.load(idOrJson);
        }
    }

    abstract load(json: Json): void;
    abstract save(): Json;
}

export type RecipeJson = {
    id: string;
}
