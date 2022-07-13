import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class MapItem extends BaseItem<MapItem> {
    constructor(module: Module, json?: MapJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: MapJson): void {
        super.load(json);
    }

    save(): MapJson {
        const json = super.save() as MapJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type MapJson = ItemJson & {};
