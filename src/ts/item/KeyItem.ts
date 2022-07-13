import { BaseItem, ItemJson } from "./BaseItem";

export class KeyItem extends BaseItem<KeyJson> {

    digitalPadlock: boolean = false;
    padlock: boolean = false;
    numberOfKey: number = 0;

    constructor(module: string, displayName: string, name: string, icon: string) {
        super('Key', module, displayName, name, icon);
    }

    load(json: KeyJson): void {
        
        // ItemJson
        this.module = json.module;
        this.displayName = json.displayName;
        this.name = json.name;
        this.icon = json.icon;

        // KeyJson
        this.digitalPadlock = json.digitalPadlock;
        this.padlock = json.padlock;
        this.numberOfKey = json.numberOfKey;
    }

    save(): KeyJson {
         return {

            // ItemJson
            type: this.type,
            module: this.module,
            displayName: this.displayName,
            name: this.name,
            icon: this.icon,

            // KeyJson
            digitalPadlock: this.digitalPadlock,
            padlock: this.padlock,
            numberOfKey: this.numberOfKey
        };
    }

}

export type KeyJson = ItemJson & {
    digitalPadlock: boolean;
    padlock: boolean;
    numberOfKey: number;
};
