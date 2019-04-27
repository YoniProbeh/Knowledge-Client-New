export class Model<T extends Model<T>> {
    public id: string;
    public name: string;
    public created: Date;
    public modifed: Date;
    public isActive: boolean;
    public activeSince: Date;
    public activeLast: Date;

    constructor(name?: string) {
        this.name = name;
        this.isActive = true;
        this.activeSince = new Date();
    }
}