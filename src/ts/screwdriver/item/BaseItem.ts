import { Module } from '../module/Module';
import { Compilable } from '../util/Compilable';
import { Inheritable } from '../util/Inheritable';
import { float, int } from '../util/JavaTypes';
import { Value } from '../util/Value';
import { ItemType } from './ItemType';

export abstract class BaseItem<IType extends BaseItem<IType>> implements Inheritable<IType>, Compilable {
    module: Module;
    id: string;
    readonly type: string;
    private _parent: IType;
    private _parentID: string;

    // Item Properties
    RequireInHandOrInventory = new Value<string[]>(null);
    attachmentsProvided = new Value<string[]>(null);
    IconsForTexture = new Value<string[]>(null);
    AmmoType = new Value<string>(null);
    CustomContextMenu = new Value<string>(null);
    CloseKillMove = new Value<string>(null);
    DisplayCategory = new Value<string>(null);
    GunType = new Value<string>(null);
    ReplaceOnUse = new Value<string>(null);
    ReplaceOnUseOn = new Value<string>(null);
    Tooltip = new Value<string>(null);
    attachmentReplacement = new Value<string>(null);
    attachmentType = new Value<string>(null);
    breakSound = new Value<string>(null);
    countDownSound = new Value<string>(null);
    displayName = new Value<string>(null);
    evolvedRecipeName = new Value<string>(null);
    explosionSound = new Value<string>(null);
    icon = new Value<string>(null);
    itemWhenDry = new Value<string>(null);
    ActualWeight = new Value<float>(1.0);
    BoredomChange = new Value<float>(0.0);
    FatigueChange = new Value<float>(0.0);
    LightStrength = new Value<float>(0.0);
    LightDistance = new Value<float>(0.0);
    ReduceInfectionPower = new Value<float>(0.0);
    StressChange = new Value<float>(0.0);
    UnhappyChange = new Value<float>(0.0);
    Weight = new Value<float>(1.0);
    alcoholPower = new Value<float>(0.0);
    bandagePower = new Value<float>(0.0);
    brakeForce = new Value<float>(0.0);
    conditionLowerNormal = new Value<float>(0.0);
    conditionLowerOffroad = new Value<float>(0.0);
    engineLoudness = new Value<float>(0.0);
    metalValue = new Value<float>(0.0);
    suspensionCompression = new Value<float>(0.0);
    suspensionDamping = new Value<float>(0.0);
    wetCooldown = new Value<float>(0.0);
    wheelFriction = new Value<float>(0.0);
    Condition = new Value<int>(10);
    ConditionMax = new Value<int>(10);
    Count = new Value<int>(1);
    chanceToSpawnDamaged = new Value<int>(0);
    colorRed = new Value<int>(255);
    colorGreen = new Value<int>(255);
    colorBlue = new Value<int>(255);
    itemCapacity = new Value<int>(-1);
    maxAmmo = new Value<int>(0);
    maxCapacity = new Value<int>(-1);
    remoteRange = new Value<int>(0);
    ActivatedItem = new Value<boolean>(false);
    Alcoholic = new Value<boolean>(false);
    CanStack = new Value<boolean>(true);
    CanStoreWater = new Value<boolean>(false);
    IsWaterSource = new Value<boolean>(false);
    TorchCone = new Value<boolean>(false);
    RequiresEquippedBothHands = new Value<boolean>(false);
    canBeRemote = new Value<boolean>(false);
    isWet = new Value<boolean>(false);
    keepOnDeplete = new Value<boolean>(false);
    remoteController = new Value<boolean>(false);

    protected constructor(module: Module) {
        this.module = module;
    }

    load(json: ItemJson): void {
        this.id = json.id;
        this.displayName.value = json.displayName;
        this.icon.value = json.icon;
    }

    save(): ItemJson {
        return {
            id: this.id,
            parentID: this._parentID,
            type: 'Key',

            RequireInHandOrInventory: this.RequireInHandOrInventory.value,
            attachmentsProvided: this.attachmentsProvided.value,
            IconsForTexture: this.IconsForTexture.value,
            AmmoType: this.AmmoType.value,
            CustomContextMenu: this.CustomContextMenu.value,
            CloseKillMove: this.CloseKillMove.value,
            DisplayCategory: this.DisplayCategory.value,
            GunType: this.GunType.value,
            ReplaceOnUse: this.ReplaceOnUse.value,
            ReplaceOnUseOn: this.ReplaceOnUseOn.value,
            Tooltip: this.Tooltip.value,
            attachmentReplacement: this.attachmentReplacement.value,
            attachmentType: this.attachmentType.value,
            breakSound: this.breakSound.value,
            countDownSound: this.countDownSound.value,
            displayName: this.displayName.value,
            evolvedRecipeName: this.evolvedRecipeName.value,
            explosionSound: this.explosionSound.value,
            icon: this.icon.value,
            itemWhenDry: this.itemWhenDry.value,
            ActualWeight: this.ActualWeight.value,
            BoredomChange: this.BoredomChange.value,
            FatigueChange: this.FatigueChange.value,
            LightStrength: this.LightStrength.value,
            LightDistance: this.LightDistance.value,
            ReduceInfectionPower: this.ReduceInfectionPower.value,
            StressChange: this.StressChange.value,
            UnhappyChange: this.UnhappyChange.value,
            Weight: this.Weight.value,
            alcoholPower: this.alcoholPower.value,
            bandagePower: this.bandagePower.value,
            brakeForce: this.brakeForce.value,
            conditionLowerNormal: this.conditionLowerNormal.value,
            conditionLowerOffroad: this.conditionLowerOffroad.value,
            engineLoudness: this.engineLoudness.value,
            metalValue: this.metalValue.value,
            suspensionCompression: this.suspensionCompression.value,
            suspensionDamping: this.suspensionDamping.value,
            wetCooldown: this.wetCooldown.value,
            wheelFriction: this.wheelFriction.value,
            Condition: this.Condition.value,
            ConditionMax: this.ConditionMax.value,
            Count: this.Count.value,
            chanceToSpawnDamaged: this.chanceToSpawnDamaged.value,
            colorRed: this.colorRed.value,
            colorGreen: this.colorGreen.value,
            colorBlue: this.colorBlue.value,
            itemCapacity: this.itemCapacity.value,
            maxAmmo: this.maxAmmo.value,
            maxCapacity: this.maxCapacity.value,
            remoteRange: this.remoteRange.value,
            ActivatedItem: this.ActivatedItem.value,
            Alcoholic: this.Alcoholic.value,
            CanStack: this.CanStack.value,
            CanStoreWater: this.CanStoreWater.value,
            IsWaterSource: this.IsWaterSource.value,
            TorchCone: this.TorchCone.value,
            RequiresEquippedBothHands: this.RequiresEquippedBothHands.value,
            canBeRemote: this.canBeRemote.value,
            isWet: this.isWet.value,
            keepOnDeplete: this.keepOnDeplete.value,
            remoteController: this.remoteController.value,
        };
    }

    compile(prefix: string): string {
        return prefix;
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

    RequireInHandOrInventory: string[];
    attachmentsProvided: string[];
    IconsForTexture: string[];
    AmmoType: string;
    CustomContextMenu: string;
    CloseKillMove: string;
    DisplayCategory: string;
    GunType: string;
    ReplaceOnUse: string;
    ReplaceOnUseOn: string;
    Tooltip: string;
    attachmentReplacement: string;
    attachmentType: string;
    breakSound: string;
    countDownSound: string;
    displayName: string;
    evolvedRecipeName: string;
    explosionSound: string;
    icon: string;
    itemWhenDry: string;
    ActualWeight: float;
    BoredomChange: float;
    FatigueChange: float;
    LightStrength: float;
    LightDistance: float;
    ReduceInfectionPower: float;
    StressChange: float;
    UnhappyChange: float;
    Weight: float;
    alcoholPower: float;
    bandagePower: float;
    brakeForce: float;
    conditionLowerNormal: float;
    conditionLowerOffroad: float;
    engineLoudness: float;
    metalValue: float;
    suspensionCompression: float;
    suspensionDamping: float;
    wetCooldown: float;
    wheelFriction: float;
    Condition: int;
    ConditionMax: int;
    Count: int;
    chanceToSpawnDamaged: int;
    colorRed: int;
    colorGreen: int;
    colorBlue: int;
    itemCapacity: int;
    maxAmmo: int;
    maxCapacity: int;
    remoteRange: int;
    ActivatedItem: boolean;
    Alcoholic: boolean;
    CanStack: boolean;
    CanStoreWater: boolean;
    IsWaterSource: boolean;
    TorchCone: boolean;
    RequiresEquippedBothHands: boolean;
    canBeRemote: boolean;
    isWet: boolean;
    keepOnDeplete: boolean;
    remoteController: boolean;
};
