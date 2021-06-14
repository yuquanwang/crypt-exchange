import { inject, injectable } from 'inversify'
import { observable } from 'mobx'
import { APIPATH, TYPES } from '../config'

@injectable()
export default class implements User {
  @inject(TYPES.App)
  private app!: App

  ID?: string;
  name?: string;

  @observable
  info?: Wechat.UserInfoData & { phone: string };

  selectedProfile?: PatientProfile

  @observable
  profiles: PatientProfile[] = [];

  diseasePreferences: Option[] = [];
  statistics?: Statistics;

  async setPreferences(diseases: (number | string)[], features?: (number | string)[]) {
    await this.app.post(APIPATH.preferences, { diseases, features })
  }

  async fetchDiseasePreferences(): Promise<Option[]> {
    try{
      const { diseases = [] } = await this.app
          .get<{ type: 'disease'; current: boolean }, { diseases: Option[] }>(
              APIPATH.preferences, {
                type: 'disease',
                current: true
              })
      return diseases
    }catch(error){
      let t = new Array<Option>()
      return t
    }

  }

  async fetchInfo() {
    this.info = await this.app.get(APIPATH.user.info)
  }

  async fetchProfiles() {
    const list = await this.app.get<null, PatientProfile[]>(APIPATH.user.profiles)
    this.profiles = list

  }

  async fetchStatistics() {
    throw new Error('Method not implemented.')
  }
}