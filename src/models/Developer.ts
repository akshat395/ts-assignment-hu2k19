import Model from '../Model';
import Technology from '../Technology';

export default class Developer extends Model {
    name: string;
    knownTechnologies: Technology[];

    constructor(obj?: Partial<Developer>) {
        super();
        Object.assign(this, obj);
    }
}
