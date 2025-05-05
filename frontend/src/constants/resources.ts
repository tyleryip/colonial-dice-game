export class ResourceType {
    static readonly ORE = new ResourceType(0, 'Ore');
    static readonly WHEAT = new ResourceType(1, 'Wheat');
    static readonly WOOL = new ResourceType(2, 'Wool');
    static readonly WOOD = new ResourceType(3, 'Wood');
    static readonly BRICK = new ResourceType(4, 'Brick');
    static readonly GOLD = new ResourceType(5, 'Gold');

    // private to disallow creating other instances of this type
    private constructor(public readonly id: number, public readonly name: string) { }

    toString() {
        return this.name;
    }
}