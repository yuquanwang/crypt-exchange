import { injectable } from 'inversify'
import Profile from '../domain/Profile'

@injectable()
export default class extends Profile {
  // async fetchProfiles(IDcard: string, name: string): Promise<PatientProfile | null> {

  //   return {
  //     // activated: false,
  //     name: '患者A',
  //     relationship: "",
  //     gender: 0,
  //     medicareId: 'SCJIOEJF8942894',
  //     IDcard: '362727199008203176',
  //     medicareCityId: '510000',
  //     medicareType: '成都市医保',
  //     phone: "15228962199",
  //     emergencyContact: {
  //       name: "患者B",
  //       phone: "15228962199",
  //       IDcard: "362427199008203117",
  //     }
  //   }
  // }

  // async activateProfile(profile: PatientProfile) {
  // }
}