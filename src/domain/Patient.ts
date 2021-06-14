import { observable } from 'mobx'
import { APIPATH } from '../config'
import { app } from '../utils/container'

export default class implements Patient {
  @observable
  patientId: number

  @observable
  patientName: string

  @observable
  diseases: Disease[] = []

  @observable
  disease?: Disease

  @observable
  audits: AuditRecord[] = []

  constructor(id: number, name: string, disease?: Disease) {
    this.patientId = id
    this.patientName = name
    this.disease = disease
  }

  async fetchRecords() {
    try {
      this.audits = await app.get<null, AuditRecord[]>(
        APIPATH.patient.records.replace(':patientId', this.patientId.toString()))
    } catch (error) {
      // do nothing
    }
  }

  async fetchDiseases() {
    try {
      this.diseases = await app.get<null, Disease[]>
        (APIPATH.patient.diseases.replace(':patientId', this.patientId.toString()))
    } catch (error) {
      // do nothing
    }
  }
}