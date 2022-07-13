import { Module } from '../module/Module';
import { Inheritable } from '../util/Inheritable';
import { StringProperty, StringPropertyJson } from '../util/Property';
import { ItemType } from './ItemType';

export abstract class BaseItem<IType extends BaseItem<IType>> implements Inheritable<IType> {
    private _parent: IType;
    readonly type: string;
    module: Module;
    id: string;

    // Item Properties
    readonly displayName = new StringProperty();
    readonly icon = new StringProperty();

    constructor(module: Module) {
        this.module = module;
    }

    getDisplayName(): string | null {
        if (this.displayName.getState() === 'inherit' && this.hasParent()) {
            return this._parent.getDisplayName();
        } else {
            return this.displayName.get();
        }
    }

    setDisplayName(displayName: string) {
        this.displayName.set(displayName);
    }

    getIcon(): string | null {
        if (this.icon.getState() === 'inherit' && this.hasParent()) {
            return this._parent.getIcon();
        } else {
            return this.icon.get();
        }
    }

    setIcon(icon: string) {
        this.icon.set(icon);
    }

    getParent(): IType {
        return this._parent;
    }

    setParent(parent: IType) {
        this._parent = parent;
    }

    hasParent(): boolean {
        return this._parent != null;
    }

    load(json: ItemJson): void {
        this.id = json.id;
        this.displayName.load(json.displayName);
        this.icon.load(json.icon);
    }

    save(): ItemJson {
        return {
            id: this.id,
            type: 'Key',
            displayName: this.displayName.save(),
            icon: this.icon.save(),
        };
    }
}

export type ItemJson = {
    id: string;
    type: ItemType;
    displayName: StringPropertyJson;
    icon: StringPropertyJson;
};
