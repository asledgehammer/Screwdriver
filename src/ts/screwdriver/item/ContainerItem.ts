import { Module } from "../module/Module";
import { BaseItem, ItemJson } from "./BaseItem";

export class ContainerItem extends BaseItem<ContainerItem> {

    constructor(module: Module, json?: ContainerJson) {
        super(module);
        if(json != null) this.load(json);
    }

    load(json: ContainerJson): void {
        super.load(json);
    }

    save(): ContainerJson {
        const json = super.save() as ContainerJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type ContainerJson = ItemJson & {};
