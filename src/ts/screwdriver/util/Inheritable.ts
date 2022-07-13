export interface Inheritable<E> {
    getParent(): E;
    setParent(parent: E): void;
    hasParent(): boolean;
}
