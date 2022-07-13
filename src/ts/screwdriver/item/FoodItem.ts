import { Module } from "../module/Module";
import { BaseItem, ItemJson } from "./BaseItem";

export class FoodItem extends BaseItem<FoodItem> {

    constructor(module: Module, json?: FoodJson) {
        super(module);
        if(json != null) this.load(json);
    }

    load(json: FoodJson): void {
        super.load(json);
    }

    save(): FoodJson {
        const json = super.save() as FoodJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type FoodJson = ItemJson & {};
