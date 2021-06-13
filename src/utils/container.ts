import { Container, interfaces } from "inversify"
import "reflect-metadata"
import { TYPES } from '../config'
import App from '../domain/App'
import Articles from '../domain/Articles'
import Service from '../domain/Profile'
import User from '../domain/User'
import AppMock from "../mocks/AppMock"
import ArticlesMock from "../mocks/ArticlesMock"
import PatientMock from '../mocks/PatientMock'
import ServiceMock from "../mocks/ProfileServiceMock"
import MedicineProductService from "../domain/MedicineProductService"
import Dtp from "../domain/Dtp"
import DtpMock from "../mocks/DtpMock"
import UserAddress from "../domain/UserAddress"

import UserAddressMock from "../mocks/UserAddressMock"
import UserMock from "../mocks/UserMock"

import ChoosePrescriptionsAPIMock from "../mocks/ChoosePrescriptionsAPIMock"
import ChoosePrescriptionsAPI from "../domain/purchase/choosePrescriptions"

import DiseaseAPIMock from "../mocks/DiseasesAPIMock"
import DiseaseAPI from "../domain/purchase/diseases"

import TreatmentListAPIMock from "../mocks/TreatmentListAPIMock"
import TreatmentListAPI from "../domain/purchase/treatmentList"

import PrescriptionAPI from "../domain/purchase/prescription"


import Orders from "../domain/Orders"
import OrderServiceMock from "../mocks/OrderServiceMock"

import PurchaseOrder from "../domain/PurchaseOrder"


//医疗档案详情-病种认定
import MedicalDocumentsAPI from "../domain/medicalDocument/medicalDocuments"
import WeXin from "./WeXin"

const container = new Container()

container.bind<WeXin>(TYPES.Wechat).to(WeXin).inSingletonScope()
container.bind<App>(TYPES.App)
  .to(process.env.NODE_ENV === 'production' ? App : AppMock).inSingletonScope()
container.bind<Service>(TYPES.Service)
  .to(process.env.NODE_ENV === 'production' ? Service : ServiceMock).inSingletonScope()
container.bind<Articles>(TYPES.Articles)
  .to(process.env.NODE_ENV === 'production' ? Articles : Articles).inSingletonScope()
container.bind<User>(TYPES.User)
  .to(process.env.NODE_ENV === 'production' ? User : UserMock).inSingletonScope()
// container.bind<BuyMedicine>(TYPES.BuyMedicine).to(BuyMedicineMock).inSingletonScope()
container.bind<MedicineProductService>(TYPES.MedicineProductService).to(MedicineProductService).inSingletonScope()
container.bind<OrderService>(TYPES.OrderService)
  .to(process.env.NODE_ENV === 'production' ? Orders : OrderServiceMock).inSingletonScope()


container.bind<interfaces.Factory<IPatient>>("Factory<PatientRecords>").toFactory(context => {
  return (id: number, name: string, disease?: Disease) => new PatientMock(id, name, disease)
})

//购药 处方选择 api
container.bind<ChoosePrescriptionsAPI>(TYPES.ChoosePrescriptionsAPI).to(ChoosePrescriptionsAPI).inSingletonScope()
// container.bind<ChoosePrescriptionsAPI>(TYPES.ChoosePrescriptionsAPI).to(ChoosePrescriptionsAPIMock).inSingletonScope()
container.bind<PurchaseOrder>(TYPES.PurchaseOrder)
  .to(process.env.NODE_ENV === 'production' ? PurchaseOrder : PurchaseOrder).inSingletonScope()

//医疗档案列表 api
container.bind<MedicalDocumentsAPI>(TYPES.MedicalDocumentsAPI).to(MedicalDocumentsAPI).inSingletonScope()
// @ts-ignore
// container.bind<MedicalDocumentsAPI>(TYPES.MedicalDocumentsAPI).to(MedicalDocumentsAPIMock).inSingletonScope()

//病种列表 api
container.bind<DiseaseAPI>(TYPES.DiseaseAPI).to(DiseaseAPI).inSingletonScope()
// container.bind<DiseaseAPI>(TYPES.DiseaseAPI).to(DiseaseAPIMock).inSingletonScope()

//治疗方案 api
container.bind<TreatmentListAPI>(TYPES.TreatmentListAPI).to(TreatmentListAPI).inSingletonScope()
// container.bind<TreatmentListAPI>(TYPES.TreatmentListAPI).to(TreatmentListAPIMock).inSingletonScope()

container.bind<Dtp>(TYPES.Dtp)
  .to(process.env.NODE_ENV === 'production' ? Dtp : Dtp).inSingletonScope()
container.bind<UserAddress>(TYPES.UserAddress)
  .to(process.env.NODE_ENV === 'production' ? UserAddress : UserAddress).inSingletonScope()

container.bind<PrescriptionAPI>(TYPES.PrescriptionAPI).to(PrescriptionAPI).inSingletonScope()

export const wechat = container.get<WeXin>(TYPES.Wechat)
export const app = container.get<App>(TYPES.App)
export const service = container.get<Service>(TYPES.Service)
export const articles = container.get<Articles>(TYPES.Articles)
export const medicines = container.get<MedicineProductService>(TYPES.MedicineProductService)
export const user = container.get<User>(TYPES.User)
export const createPatient = container.get<interfaces.Factory<Patient>>
  ("Factory<PatientRecords>") as (id: string, name: string, disease?: Disease) => Patient
export const dtp = container.get<Dtp>(TYPES.Dtp)

export const orderService = container.get<OrderService>(TYPES.OrderService)

export const userAddress = container.get<UserAddress>(TYPES.UserAddress)
export const purchaseOrder = container.get<PurchaseOrder>(TYPES.PurchaseOrder)
export const choosePrescriptionsAPI =
  container.get<ChoosePrescriptionsAPI>(TYPES.ChoosePrescriptionsAPI)
export const medicalDocumentsAPI = container.get<MedicalDocumentsAPI>(TYPES.MedicalDocumentsAPI)

export const diseaseAPI = container.get<DiseaseAPI>(TYPES.DiseaseAPI)
export const treatmentListAPI = container.get<TreatmentListAPI>(TYPES.TreatmentListAPI)
export const prescriptionAPI = container.get<PrescriptionAPI>(TYPES.PrescriptionAPI)

export default container