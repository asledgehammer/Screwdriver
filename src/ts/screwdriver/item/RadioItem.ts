import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class RadioItem extends BaseItem<RadioItem> {
    constructor(module: Module, json?: RadioJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: RadioJson): void {
        super.load(json);
    }

    save(): RadioJson {
        const json = super.save() as RadioJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type RadioJson = ItemJson & {};
