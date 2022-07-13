import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class ClothingItem extends BaseItem<ClothingItem> {
    constructor(module: Module, json?: ClothingJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: ClothingJson): void {
        super.load(json);
    }

    save(): ClothingJson {
        const json = super.save() as ClothingJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type ClothingJson = ItemJson & {};
