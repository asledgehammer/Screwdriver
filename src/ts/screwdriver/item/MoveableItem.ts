import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class MoveableItem extends BaseItem<MoveableItem> {
    constructor(module: Module, json?: MoveableJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: MoveableJson): void {
        super.load(json);
    }

    save(): MoveableJson {
        const json = super.save() as MoveableJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type MoveableJson = ItemJson & {};
