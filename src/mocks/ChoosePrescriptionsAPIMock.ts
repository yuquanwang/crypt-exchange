import {inject, injectable} from 'inversify'
import ChoosePrescriptions from '../domain/purchase/choosePrescriptions'
import choosePrescriptionsData from './json/choosePrescriptions.json'

@injectable()
export default class extends ChoosePrescriptions {
    async fetchPrescriptions(param: Partial<MedicineParam>) {
        this.items = choosePrescriptionsData
        return this.items
    }
};
