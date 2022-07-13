import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class LiteratureItem extends BaseItem<LiteratureItem> {
    constructor(module: Module, json?: LiteratureJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: LiteratureJson): void {
        super.load(json);
    }

    save(): LiteratureJson {
        const json = super.save() as LiteratureJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type LiteratureJson = ItemJson & {};
