import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class DrainableItem extends BaseItem<DrainableItem> {
    constructor(module: Module, json?: DrainableJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: DrainableJson): void {
        super.load(json);
    }

    save(): DrainableJson {
        const json = super.save() as DrainableJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type DrainableJson = ItemJson & {};
