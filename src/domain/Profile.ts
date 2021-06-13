import { injectable, inject } from 'inversify'
import { TYPES, APIPATH } from '../config'

@injectable()
export default class implements ProfileService {
  @inject(TYPES.App)
  private app!: App

  async fetchProfiles(idcard: string, name: string): Promise<PatientProfile | null> {
    return this.app.get(APIPATH.profiles, {
      idCard: idcard, name, bound: false
    })
  }

  async activateProfile(profile: PatientProfile) {
    await this.app.post(APIPATH.user.profiles, profile)
  }
}

export const FormatedGender = {
  0: '女',
  1: '男',
}