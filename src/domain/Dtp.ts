import { inject, injectable } from 'inversify'
import { observable } from 'mobx'
import { APIPATH, TYPES } from '../config'

@injectable()
export default class implements Dtp {

  @observable
  dtpList: DtpInfo[] = []

  @observable
  selectedPharmacy?: DtpInfo = undefined

  @inject(TYPES.App)
  private app!: App;

  async fetchDtps(param: Partial<DtpParam>) {
    this.dtpList = []
    const list = await this.app.get<Partial<DtpParam>, DtpInfo[]>(APIPATH.dtps, param)
    this.dtpList = list || []
    return this.dtpList
  }

  async fetchDtpsByPrescriptionId(param: Partial<DtpParam>) {
    this.dtpList = []
    const list = await this.app.get<Partial<DtpParam>, DtpInfo[]>(APIPATH.dtpsForPrescription, param)
    this.dtpList = list || []
    return this.dtpList
  }

};