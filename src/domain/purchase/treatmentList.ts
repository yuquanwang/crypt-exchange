import { injectable, inject } from 'inversify'
import {observable} from 'mobx'
import { TYPES, APIPATH } from '../../config'

@injectable()
export default class implements ITreatmentListAPI {
    @observable
    public items:TreatmentList[] = []

    @inject(TYPES.App)
    private app!: App;

    async fetchTreatmentList(param?: Partial<TreatmentListParam>){
        this.items = await this.app.get<Partial<TreatmentListParam>, TreatmentList[]>(APIPATH.purchase.treatmentList, param)
        return this.items
    }
};

