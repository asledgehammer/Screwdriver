import { Module } from '../module/Module';
import { Compilable } from '../util/Compilable';
import { Inheritable } from '../util/Inheritable';
import { StringProperty, StringPropertyJson } from '../util/Property';
import { ItemType } from './ItemType';

export abstract class BaseItem<IType extends BaseItem<IType>> implements Inheritable<IType>, Compilable {
    module: Module;
    id: string;
    readonly type: string;
    private _parent: IType;
    private _parentID: string;

    // Item Properties
    readonly displayName = new StringProperty();
    readonly icon = new StringProperty();

    protected constructor(module: Module) {
        this.module = module;
    }

    load(json: ItemJson): void {
        this.id = json.id;
        this.displayName.load(json.displayName);
        this.icon.load(json.icon);
    }

    save(): ItemJson {
        return {
            id: this.id,
            parentID: this._parentID,
            type: 'Key',
            displayName: this.displayName.save(),
            icon: this.icon.save(),
        };
    }

    compile(prefix: string): string {
        return '';
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
        this._parentID = parent != null ? parent.id : null;
    }

    getParentID(): string {
        return this._parentID;
    }

    hasParent(): boolean {
        return this._parent != null;
    }
}

export type ItemJson = {
    id: string;
    parentID: string;
    type: ItemType;
    displayName: StringPropertyJson;
    icon: StringPropertyJson;
};
