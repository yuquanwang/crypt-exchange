import { injectable, inject } from 'inversify'
import {observable} from 'mobx'
import { TYPES, APIPATH } from '../../config'

@injectable()
export default class implements IDiseasesAPI {
    @observable
    items: Disease[] = []

    @inject(TYPES.App)
    private app!: App;

    async fetchDiseaseList(param?: Partial<DiseasesApiParam>){
        this.items = await this.app.get<Partial<DiseasesApiParam>, Disease[]>(APIPATH.purchase.diseases, param)
    }

};

