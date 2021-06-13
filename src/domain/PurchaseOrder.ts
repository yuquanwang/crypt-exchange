import { injectable, inject } from 'inversify'
import {observable, computed, toJS, action} from 'mobx'
import { TYPES, APIPATH, DEFAULTDISTRICT } from '../config'
import {user} from "../utils/container"

const prescriptionListInit = {
  pageNo: 1,
  pageSize: 5,
  pageCount: 1,
  recordCount: 0,
  records: []
}

@injectable()
export default class implements PurchaseOrder {
  @inject(TYPES.App)
  private app!: App;

  // 处方列表数据
  @observable
  prescription: PaginationResponse<Prescription> = prescriptionListInit

  // 切换药品列表页数据
  @observable
  prescriptionDrugList: PrescriptionDrug[] = []

  // 处方列表本地缓存数据
  prescriptionLocal: PrescriptionLocal = sessionStorage.getItem('prescriptionLocal')?
    JSON.parse(sessionStorage.getItem('prescriptionLocal') || '{}')
    :
    {patientIndex: 0, selectedId: 0}

  // 下单页缓存数据
  @observable
  order: PurchaseOrderLocal = sessionStorage.getItem('PurchaseOrderLocal') ?
    JSON.parse(sessionStorage.getItem('PurchaseOrderLocal') || '{}')
    :
    {}

  @action
  updateOrder(mergeObj: PurchaseOrderLocal, isNew?: boolean) {
    if(isNew) {
      this.order = mergeObj
    } else {
      this.order = {
        ...this.order,
        ...mergeObj
      }
    }
    sessionStorage.setItem('PurchaseOrderLocal', JSON.stringify(this.order))
  }
  @action
  clearOrder() {
    this.order = {}
    sessionStorage.removeItem('PurchaseOrderLocal')
  }

  @action
  updatePrescriptionDrugList(prescriptionDrugIndex: number, candidateIndex: number) {
    const { candidates } = this.prescriptionDrugList[prescriptionDrugIndex]
    candidates.map(item => item.selected = false)
    candidates[candidateIndex].selected = true
  }

  @action
  setPrescriptionLocal(obj: PrescriptionLocal) {
    this.prescriptionLocal = {
      ...this.prescriptionLocal,
      ...obj,
    }
    sessionStorage.setItem('prescriptionLocal', JSON.stringify(obj))
  }

  @action
  clearPrescriptionLocal() {
    this.prescriptionLocal = {patientIndex: 0, selectedId: 0}
    sessionStorage.removeItem('prescriptionLocal')
  }

  async fetchPrescription(patientId?: string) {
    this.prescription = prescriptionListInit
    this.prescription = await this.app.get<DescriptionParams, PaginationResponse<Prescription>>(APIPATH.prescription.list, {
      pageNo: 1,
      pageSize: 100,
      statusList: '1',
      patientId,
      noexpired: true,
    })

    return this.prescription
  }

  async fetchPrescriptionDrugList(id: string) {
    this.prescriptionDrugList = await this.app.get<{id: string}, PrescriptionDrug[]>(APIPATH.prescription.candidates, {id})
    return this.prescriptionDrugList
  }

  async updatePrescriptionDrugCandidate(prescriptionId: number | string, products: CandidateDto[]) {
    await this.app.put<{products: CandidateDto[]}>(`${APIPATH.prescription.list}/${prescriptionId}`,{products})
  }

  async fetchOrderCosts(prescriptionId: string) {
    const costs = await this.app.get<{id: string}, PurchaseOrderCosts>(APIPATH.purchase.costs, {id: prescriptionId})
    this.updateOrder({
      costs
    })
  }

  async goOrder(data: OrderParams) {
    await this.app.post<OrderParams, any>(APIPATH.purchase.order, data)
  }
}


interface PrescriptionLocal {
  patientIndex: number
  selectedId: number | string
}

interface CandidateDto {
  candidateSerialNumber?: number
  prescriptionDrugId: number
}


interface PurchaseOrderLocal {
  tabIndex?: number
  address?: Address
  pharmacy?: DtpInfo
  deliverDateIndice?: number[]
  prescription?: Prescription
  costs?: PurchaseOrderCosts
  receiver?: string
  receiverPhone?: string
}

interface PurchaseOrderCosts {
  amount: number
  cost: number
  deliveryFee: number
  medicalInsurance: number
}

interface OrderParams {
  addressId?: number | string
  distributionPharmacies: {
    pharmacyId?: string
    prescriptionId?: number
  }
  expectedTime?: number
  method?: number
}