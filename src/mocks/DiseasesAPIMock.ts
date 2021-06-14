import {inject, injectable} from 'inversify'
import DiseasesApi from '../domain/purchase/diseases'
import DiseasesApiData from './json/diseasesApiMock.json'

@injectable()
export default class extends DiseasesApi {

    async fetchDiseaseList(param?: Partial<DiseasesApiParam>){
        this.items = DiseasesApiData.data
    }
};
