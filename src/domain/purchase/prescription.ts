import {inject, injectable} from 'inversify'
import {APIPATH, TYPES} from "../../config"

@injectable()
export default class implements IPrescriptionsAPI {

    @inject(TYPES.App)
    private app!: App;

    async setPrescriptionUpload(param?: Partial<PrescriptionsAPIParam>){
        return this.app.post(APIPATH.prescription.list, param)
    }
};
