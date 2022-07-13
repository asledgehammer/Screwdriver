import { Module } from "../module/Module";

export abstract class BaseRecipe<Json extends RecipeJson> {

    module: Module;
    name: string;

    constructor(module: Module, nameOrJson: Json | string) {

        this.module = module;

        if (typeof nameOrJson === 'string') {
            this.name = nameOrJson;
        } else {
            this.load(nameOrJson);
        }
    }

    abstract load(json: Json): void;
    abstract save(): Json;
}

export type RecipeJson = {
    name: string;
}
