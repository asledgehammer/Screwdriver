import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class NormalItem extends BaseItem<NormalItem> {
    constructor(module: Module, json?: NormalJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: NormalJson): void {
        super.load(json);
    }

    save(): NormalJson {
        const json = super.save() as NormalJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type NormalJson = ItemJson & {};
