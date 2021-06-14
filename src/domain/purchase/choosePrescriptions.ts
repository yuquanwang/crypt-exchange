import { injectable, inject } from 'inversify'
import {observable, computed, toJS} from 'mobx'
import { TYPES, APIPATH } from '../../config'

@injectable()
export default class implements IChoosePrescriptionsAPI {

    @observable
    public items:ChoosePrescriptions[] = []

    @inject(TYPES.App)
    private app!: App;

    async fetchPrescriptions(param?: Partial<MedicineParam>)  {
        this.items = await this.app.get<Partial<MedicineParam>, ChoosePrescriptions[]>(APIPATH.purchase.choosePrescriptions, param)
        return this.items
    }
};