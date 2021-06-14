import {inject, injectable} from 'inversify'
import {toJS} from "mobx"
import MedicalDocuments from '../domain/medicalDocument/medicalDocuments'
import {APIPATH} from "../config"
import MedicalDocumentsData from './json/medicalDocuments.json'
import MedicalDocumentsIdentificationData from './json/medicalDocumentIdentification.json'
import MedicalDocumentTreatmentData from './json/medicalDocumentTreatment.json'
import MedicalDocumentPrescriptionData from './json/medicalDocumentPrescription.json'
import MedicalDocumentDetail from './json/medicalDocumentsDetail.json'

@injectable()
export default class extends MedicalDocuments {
    // @ts-ignore
    async fetchList(param?: Partial<MedicalDocumentsParam>)  {
        // @ts-ignore
        this.list = MedicalDocumentsData.records
        return this.list
    }

    // @ts-ignore
    async fetchDetail(prescriptionId:string) {
        // @ts-ignore
        this.item = MedicalDocumentDetail.data
        // @ts-ignore
        this.itemIdentification = MedicalDocumentsIdentificationData
        // @ts-ignore
        this.itemTreatment = MedicalDocumentTreatmentData

        // @ts-ignore
        this.itemPrescription = MedicalDocumentPrescriptionData
        console.log(this.itemPrescription )
        return this.item
    }

};
