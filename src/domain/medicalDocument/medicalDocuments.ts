import { injectable, inject } from 'inversify'
import {observable, toJS} from 'mobx'
import moment from "moment"
import { TYPES, APIPATH } from '../../config'
import App from "../App"
import {formatTimeStrToYYYYMMDD} from "../../utils/string"
import {pageNumber} from "../../utils"


@injectable()
export default class MedicalDocumentsAPI implements IMedicalDocumentsAPI {
    @inject(TYPES.App)
    private app!: App

    @observable
    total: number = 0

    @observable
    list: Prescription[] = []


    // @observable
    public item:PrescriptionDetail = <PrescriptionDetail>{}

    public pageSize:number = 30

    //认定病种
    @observable
    public itemIdentification:Identification = <Identification>{}

    //治疗方案
    @observable
    public itemTreatment:Treatment = <Treatment>{}

    //处方详情
    public itemPrescription:Prescription = <Prescription>{}

    //需要点击删除的id
    @observable
    public deleteId:string = ""
    //需要点击删除的version
    @observable
    public version:string = ""

    async fetchList(p: MedicalDocumentsParam) {
        if(p.refresh){
            p.pageNo = 0
            this.list = []
        }
        p.pageNo   = pageNumber(this.list.length + 1, this.pageSize )
        p.pageSize = this.pageSize

        // console.log("请求页面的参数",p)

        const { records, recordCount, pageNo } = await this.app.get<MedicalDocumentsParam, PaginationResponse<Prescription>>(APIPATH.prescription.list, p)
        this.list = pageNo === 1 ? records : this.list.concat(records)
        this.total = recordCount
    }

    async fetchDetail(prescriptionId:string) {
        try{
            let item = await this.app.get<{},PrescriptionDetail>(`${APIPATH.medicalDocument.medicalDocumentDetail}/${prescriptionId}`)
            item = toJS(item,{detectCycles:true,recurseEverything:true})

            if( item.treatment.id == 0 && item.identification.id == 0){
                item.type = 0 //自费
            }else{
                item.type = 1 //医保
            }

            item.prescription.prescriptionDate = formatTimeStrToYYYYMMDD(item.prescription.prescriptionDate)
            item.prescription.expirationDate   = formatTimeStrToYYYYMMDD(item.prescription.expirationDate)
            this.item = item

            try{
                if( item.type === 1 && item.identification.id !== 0){
                    await this.fetchIdentification()
                }
            }catch(ex){
                console.log(ex)
            }
            try{
                if( item.type === 1 && item.treatment.id !== 0){
                    await this.fetchTreatment()
                }
            }catch(ex){
                console.log(ex)
            }

            //处方详情接口还没有 所以隐藏了
            // await this.fetchPrescription()


        }catch(e){
            console.log(e)
        }
    }

    //认定病种
    async fetchIdentification() {
        const  i:Identification = this.item.identification
        const url = `${APIPATH.medicalDocument.identification}/${i.id}`
        this.itemIdentification =  await this.app.get<{},Identification>(url)
        return this.itemIdentification
    }

    //治疗方案
    async fetchTreatment() {
        const  i:Treatment = this.item.treatment
        const url = `${APIPATH.medicalDocument.treatment}/${i.id}`
        this.itemTreatment =  await this.app.get<{},Treatment>(url)
        return this.itemTreatment
    }

    //处方信息
    async fetchPrescription() {
        const  i:Prescription = this.item.prescription
        const url = `${APIPATH.medicalDocument.prescription}/6547923099806081024` // TODO
        this.itemPrescription =  await this.app.get<{},Prescription>(url)
        return this.itemPrescription
    }

    //取消审核
    async deletePrescription() {
        if(this.deleteId && this.version)
            return await this.app.delete<any>(`${APIPATH.prescription.cancel}/${this.deleteId}?version=${this.version}`)
        else{
            console.log("并没有提供需要删除的数据 id 和 version",this.deleteId,this.version)
            return false
        }

    }
};




