import {inject, injectable} from 'inversify'
import TreatmentList from '../domain/purchase/treatmentList'
import treatmentListData from './json/treatmentLists.json'

@injectable()
export default class  extends TreatmentList{
    async fetchTreatmentList(param: Partial<TreatmentListParam>) {
        // @ts-ignore
        this.items = treatmentListData
        return this.items
    }
};


