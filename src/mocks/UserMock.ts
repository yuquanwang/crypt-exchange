import { injectable } from 'inversify'
import User from '../domain/User'

@injectable()
export default class extends User {
  // async fetchDiseasePreferences(): Promise<Option[]> {
  //   return [{ id: 1, name: '丙肝' }, { id: 2, name: '肺癌' }]
  // }

  // async fetchProfiles() {
  //   this.profiles = [
  //     {
  //       id: '1111', name: '患者A', IDcard: '362427199009203921', medicareCityId: '510000', gender: 0,
  //       medicareId: 'SC298435', medicareType: '省医保', relationship: 'REL005',
  //       medicareProvince: '四川省', medicareCity: '乐山市',
  //     },
  //     {
  //       id: '1112', name: '患者Bcfe', IDcard: '362427199009203921', medicareCityId: '510000',
  //       gender: 0, medicareId: 'SC298435', medicareType: '省医保', relationship: 'REL005',
  //       medicareProvince: '四川省', medicareCity: '成都市',
  //     },
  //     {
  //       id: '1113', name: '患者C', IDcard: '362427199009203921', medicareCityId: '510000', gender: 1,
  //       medicareId: 'SC298435', medicareType: '省医保', relationship: 'REL005',
  //       medicareProvince: '四川省', medicareCity: '成都市',
  //     },
  //   ]
  // }

  // async setPreferences(diseases: number[], features: number[]) {
  // }

  async fetchInfo() {
    this.name = 'Mock_Name'
  }
}