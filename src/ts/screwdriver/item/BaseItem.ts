import { Module } from '../module/Module';
import { Compilable } from '../util/Compilable';
import { Inheritable } from '../util/Inheritable';
import { ItemType } from './ItemType';

export abstract class BaseItem<IType extends BaseItem<IType>> implements Inheritable<IType>, Compilable {
    module: Module;
    id: string;
    readonly type: string;
    private _parent: IType;
    private _parentID: string;

    // Item Properties
    displayName: string;
    icon: string;

    protected constructor(module: Module) {
        this.module = module;
    }

    load(json: ItemJson): void {
        this.id = json.id;
        this.displayName = json.displayName;
        this.icon = json.icon;
    }

    save(): ItemJson {
        return {
            id: this.id,
            parentID: this._parentID,
            type: 'Key',
            displayName: this.displayName,
            icon: this.icon,
        };
    }

    compile(prefix: string): string {
        return prefix;
    }

    getDisplayName(): string | null {
        if (this.displayName == null) return this.hasParent() ? this.getParent().getDisplayName() : null;
        else return this.displayName;
    }

    setDisplayName(displayName: string) {
        this.displayName = displayName;
    }

    getIcon(): string | null {
        if (this.icon == null) return this.hasParent() ? this.getParent().getIcon() : null;
        else return this.icon;
    }

    setIcon(icon: string) {
        this.icon = icon;
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
    displayName: string;
    icon: string;
};
