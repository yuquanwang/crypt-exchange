interface User {
  ID?: string  // 身份证号
  name?: string // 姓名或昵称
  info?: Wechat.UserInfoData & { phone: string } // 微信用户信息
  selectedProfile?: PatientProfile
  profiles: PatientProfile[] // 关联的患者个人信息资料
  diseasePreferences: Option[] // 当前关注的病种
  statistics?: Statistics // 统计数据

  async setPreferences(diseases: number[], features: number[]) // 登录流程中用户设置偏好
  async fetchDiseasePreferences(): Promise<Option[]> // 文章列表页获取用户当前关注病种
  async fetchInfo() // 获取用户基本信息(来源于微信)
  async fetchProfiles()
  async fetchStatistics() // 获取用户统计数据
}

interface OrderService {
  list: Order[] // 订单列表
  total: number // 订单总数
  listToDeliver: Order[] // 待发货订单列表
  totalToDeliver: number // 待发货订单总数
  listToReceive: Order[] // 待收货订单列表
  totalToReceive: number // 待收货订单数
  listCompleted: Order[] // 已完成订单列表
  totalCompleted: number // 已完成订单总数
  selectedOrder: OrderDetail | null // 正在查看详情的订单
  evidences: OrderEvidences | null // 订单凭证
  async fetchList(p: PaginationParams & { status?: number, keyword?: string }) // 从获取订单列表
  async cancelOrder(id: string) // 取消订单
  async fetchOrder(id: string) // 获取订单详情
  async modifyOrder(id: String, pharmacyId: string) // 修改订单(限修改药房)
  async fetchEvidences(id: string)
  clearList()
  clearEvidences()
}

interface Order {
  id: string
  status: OrderStatusCode
  products: ProductBrief[]
  quantity: number
  cost: number
  amount: number
  prescriptionId: number // 处方id
  note?: string
  method: number // 0物流配送 1自提
}

interface OrderDetail {
  prescriptionId: number
  dealInfoDTO: {
    distributions: Distribution[]
    payment: Payment
  }
  delivery: DeliveryInfo
  status: OrderStatusCode
}

interface EvidenceImage {
  evidenceUrl: string
  type: number // 凭证类型 0-处方 1-订单凭证 2-其他
}
interface EvidenceProduct {
  drugName: string // 通用名
  name: string //商品名
  count: number
}

interface OrderEvidences {
  deliveryTime: string // 配送时间
  completeTime: string // 完成时间
  orderEvidenceImages: EvidenceImage[] // 凭证图片
  orderEvidenceProducts: EvidenceProduct[] // 凭证对应的商品
}

type OrderStatusCode = 0 | 1 | 2 | 3 | 4

interface Distribution {
  pharmacyId: string
  pharmacyName: string
  products: ProductBrief[]
}

interface Payment {
  amount: number
  cost: number
  delivery: number
  medicare: number
  others: number
}

interface DeliveryInfo {
  address: string
  contactPhone: string[]
  desc: string
  expectedTime: number
  receiver: string
  receiverPhone: string
  time: number
  type: number
}

interface ProductBrief {
  drugCode: string
  drugName: string
  tags: (string | null)[]
  manufacturer: string // 厂家
  price: number
  productId: string
  productName: string
  quantity: number
  spec: string
  thumbnailUrl: string
}

// 患者信息档案
interface PatientProfile {
  id?: string // 患者档案id
  name: string // 患者姓名
  activated?: boolean // 是否已激活
  activateTime?: number // 激活时间的UTC毫秒数
  relationship?: string // 患者与本人关系
  relationshipIndex?: number // 患者与本人关系index number
  relationshipName?: string // 患者与本人关系中文名

  gender?: 0 | 1 // 性别

  idcard: string // 身份证号

  tmpMedicareId?: string // 暂存的医保号
  medicareId: string // 医保号
  medicareProvince?: string // 医保省份
  medicareCity?: string // 医保城市
  medicareCityId: string // 医保城市
  medicareCityNameStr?: string //医保选择的中文
  medicareCityIndice?: number[] //医保选择的index





  medicareType: string // 医保类型
  phone: string
  emergencyContact: { // 紧急联系人
    name: string
    phone: string
    idcard: string
  }

  latestPurchase?: number // 最近一次购药
  pharmacy?: string // 所在DTP药房
  version?: number

  tagNames?: string[] //选择的病种
  tagIds?: string[] //选择的病种id
  emptyTagNames?: boolean //是否为空的emptytagname
}



interface Statistics {
  score: number
  couponCount: number
  favorCount: number
}

interface Article {
  id: number //主键
  title: string //标题
  thumbUrl: string // 带全链接的图片
  thumbnailUrl?: string
  readCount: number
  commentCount: number
  articleUrl: string //文章url
  author: string //作者 可能为空
  picUrl: string //头图
  picKey: string //头图的osskey
  tags: string[]
}

interface CommentItem {
  id: number
  content: string // 评论内容
  createdTime: number // UTC毫秒数
  thumbUpCount: number // 点赞数
  authorAvatar: string // 评论人头像地址
  authorName: string // 评论人昵称
}

interface Articles {
  pageStatus: 'tabs' | 'titles'
  recommendedList: Article[]
  concernedList: Article[]
  keyword: string
  filters: Set<number | string>
  diseases: string
  titles: { id: number, title: string }[] = []

  async fetchArticles(param: Partial<ArticleParam>)
  async autoComplete()
  async fetchContent(id: number): Promise<{ id: number, htmlString: string }>
  async fetchComments(id: number): Promise<CommentItem[]>
  async postComment(id: number, content: string)
  async thumpUpComment(id: number)
  async cancelThumpUp(id: number)
  async collectArticle(id: number)
  async cancelCollection(id: number)
}


interface ArticleParam extends PaginationParams {
  diseaseNames?: string[]
  keyword?: string
  recomended?: boolean,
  needComplement?: boolean
}


interface MedicineParam extends PaginationParams {
  keyword: string
  filters: string
}

interface App {
  now: number // 系统时间，UTC毫秒数
  inWechat: boolean
  invalidToken: string
  logged: boolean
  authority?: string
  config: AppConfig
  request<E, T>(url, options: RequestOptions<E>): Promise<T> // 请求后端数据
  get<E, T>(url: string, data?: E): Promise<T>
  post<E, T>(url: string, data: E): Promise<T>
  delete<E>(url: string, data?: E)
  put<E>(url: string, data: E)

  showToast(message: string | undefined, timeout?: number) // 短时间内显示错误信息
  showModal(params: ModalParams)
  showLoading()
  hideLoading()
  navigateBack()
  redirect(path: string)
  navigateTo(path: string)
  async login(phone?: string, code: string) // 执行登录操作，获取token
  logout() // 用户退出登录操作
  async fetchAuthority()
  async fetchConfig(): Promise<AppConfig>
  async configWechatSDk(url: string, jsApiList: string[])
  async sendVerifyCode(phone: string) // 请求发送验证码
  async reportLocation() // 定位并提交定位信息
}

interface ModalParams {
  content: string // 显示的文案内容
  onCancel?: () => void // 点击取消的回调
  onConfirm() // 点击确定的回调
}

interface AppDuration {
  value: number
  unit: '分钟' | '天' | '小时' | '秒' | '毫秒'
}

interface AppConfig {
  agreementUrl: string
  informedConsentUrl: string
  entrustedConsentUrl: string
  serviceInfoUrl: string
  diseaseOptions: Option[]
  diseaseCategoryOptions: Option[]
  diseaseOptionsWithSys?: Option[]
  featureOptions: Option[]
  relativeOptions: Option[]
  districtOptions: Option[]
  deliveryOptions: Option[]
  medicareOptions: Option[]
  drugFeedOptions: Option[]
  addressTagOptions?: Option[]
  dateOptions: Option[]
}

type Authority = 'user' | 'visitor'

interface ProfileService {
  async activateProfile(profile: PatientProfile) // 激活患者资料

  // 根据身份证和姓名信息获取患者医疗档案
  async fetchProfiles(IDcard: string, name: string): Promise<PatientProfile | null>
}

// 患者病历
interface Patient {
  patientId: number
  patientName: string
  diseases: Disease[]
  disease?: Disease
  audits: AuditRecord[]

  async fetchDiseases()
  async fetchRecords()
}

interface AuditRecord {
  id: number
  auditCode: string
  commitTime: number
  auditTime: number
  type: 1 | 2 | 3 //(病种|治疗方案|处方)
  verifyStatus: 1 | 2 | 3 // (审核中|审核失败|审核成功)
  context: string
  disease?: {
    id: number
    name: string
    start: number
    end: number
    hospitalName: string
    doctorName: string
    img: string
  },
  treatment?: {
    id: number
    diseaseId: number
    diseaseName: string
    start: number
    end: number
    hospitalName: string
    doctorName: string
    img: string
  }
  prescriptions?: Prescription[]
}

interface Medicine {

  productId?: number;
  manufacturer?: string;
  spec?: string;

  id?: number
  title?: string
  thumbnailUrl?: string
  price?: number
  companyName?: string //药品公司

  quantity?: number //?
  suggestedPrice?: number //?

  productName?: string
  drugName?: string //药品名
  genericName?: string //通用名
  usage?: null   //药品规格 1毫克 * 14片 用法用量：一次三片，一天两次
  factory?: string //制药公司阿斯利康制药有限公司
  featureTags?: string[] //特性点
  tags?: string[] //特性点
  indication?: string[] //适应症：乙肝病毒 暂时放在一边没有
  adverseReaction?: null     //不良反应
  contraindication?: null     //禁忌 治疗乙肝病毒
  precaution?: null     //注意事项
  approvalNo?: string   //批准文号
  images?: string[] //图片
  importMark?: number //进口标识 0和null 否   1 是
  importState?: string //进口国
  specification?: string //规格
}

//购药
interface MedicineProductService {
  list: Medicine[]
  search: string

  total: number
  listToReceive: Medicine[]
  totalToReceive: number

  async fetchList(p: MedicineParam)
  async fetchProduct(productId: string)
}


interface ChoosePrescriptions {
  patientId?: string
  patientName?: string
  prescriptions?: ChoosePrescription[]
}

interface ChoosePrescription {
  auditNo: string
  auditStatus: boolean
  medicalInsuranceSettlement: string
  medicalInsuranceSettlementRatio: number
  specialAllowance: string
  specialAllowanceRatio: number
  products: Medicine[]
}
interface IChoosePrescriptionsAPI {
  items: ChoosePrescriptions[]
  async fetchPrescriptions(param: Partial<MedicineParam>)
}

interface TreatmentList {
  doctor?: string
  dosage?: string
  duration?: string
  end?: number
  hospital?: string
  id?: number
  routine?: string
  start?: number
  drugInfo?: Product
}

interface TreatmentListParam {
  diseaseId?: string
  patientId?: string
}
interface ITreatmentListAPI {
  items: TreatmentList[]
  async fetchTreatmentList(param?: Partial<TreatmentListParam>)
}

interface PrescriptionsAPIParam {

  medicalRecordId?: string
  medicalRecordPic?: string
  patientId?: string
  paymentType?: number
  prescriptionPics?: string[]
  treatmentPlanId?: string
  treatmentPlanPic?: string

  medicareCardCityCode?: string
  medicareCardNo?: string
  patientVersion?: number

}
interface IPrescriptionsAPI {
  async setPrescriptionUpload(param: Partial<PrescriptionsAPIParam>)
}


interface DiseasesApiParam {
  patientId: string
}
interface IDiseasesAPI {
  items: Disease[]

  async fetchDiseaseList(param?: Partial<DiseasesApiParam>)
}

interface DtpParam {
  cityCode: string
  regionCode?: string
  prescriptions?: number
}

interface DtpLocation {
  longitude: number // 经度
  latitude: number // 纬度
}

interface DtpInfo {
  id: string //id
  name: string // 药房名称
  address: string // 药房地址
  phones: string[] // 药房联系电话
  certified: boolean // 是否是认证药房
  medicalInsured: boolean // 是否是医保定点药房
  // location: DtpLocation // 地理位置信息
  longitude: number // 经度
  latitude: number // 纬度
  pic: string
  images: string[]
}


interface WechatSDKConfig {
  debug?: boolean // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: string // 必填，公众号的唯一标识
  timestamp: number // 必填，生成签名的时间戳
  nonceStr: string // 必填，生成签名的随机串
  signature: string // 必填，签名
  jsApiList: string[] // 必填，需要使用的JS接口列表
}
//购药
interface Dtp {
  selectedPharmacy?: DtpInfo

  dtpList: DtpInfo[]

  async fetchDtps(param: Partial<DtpParam>)
}



interface Record {
  id: string
  name: string
  number: string
  code: string
  drugs: Drug[]
  expiredDate: string
  reason: string
  status: number
  thumbnailUrl: string
  version: number
}
interface Drug {
  quantity: number
  dosage: string
  drugCode: string
  drugName: string
  importedTag: string
  manufacturer: string
  medicareTag: string
  price: number
  productId: string
  productName: string
  spec: string
  thumbnailUrl: string

  id: number
  code: string
  specification: string
  unit: string
}


interface MedicalDocumentsParam extends PaginationParams {
  patientId?: string
  statusList?: string
}


interface PagedWebService<T> {
  list: T[]
  total: number
  item: T
  async fetchList(p: PaginationParams)
}

interface IMedicalDocumentsAPI extends PagedWebService<MedicalDocument> {

  itemIdentification?: Identification
  item?: PrescriptionDetail
  itemTreatment?: Treatment

  async fetchList(p: MedicalDocumentsParam)
  async fetchDetail(prescriptionId: string)
  async fetchIdentification()
  async fetchTreatment()
  async fetchPrescription()
}

//医疗处方档案详情
interface Product {

  quantity: number
  dosage: string
  drugCode: string
  drugName: string
  importedTag: string
  manufacturer: string
  medicareTag: string
  price: number
  productId: string
  productName: string
  spec: string
  thumbnailUrl: string
  genericName: string
  commonName: string
  approvalNo: string


  num: number
  specification: string
  unit: string

  id: number
  prescriptionDrugId: number
  code: string
  dosageUnit: string
  frequency: string
}

interface Treatment {
  id: number
  status: string
  doctor: string
  dosage: string
  duration: string
  end: number
  hospital: string
  routine: string
  start: number
  drugInfo: Product

  commonName: string
  diseaseName: string
  doctorName: string
  dosageRoute: string
  endDate: number
  feedback: string
  firstDosage: string
  firstInterval: string
  firstFrequency: string
  hospitalName: string
  maintainDosage: string
  maintainInterval: string
  maintainFrequency: string
  pic: string
  productName: string
  secondDosage: string
  secondInterval: string
  secondFrequency: string
  startDate: number
  medicationTime: string
}

// 分页请求的请求参数
interface PaginationParams {
  refresh?: boolean
  pageNo?: number
  pageSize?: number
}

// 经过分页的请求结果返回结构
interface PaginationResponse<R> {
  pageNo: number // 该页页码
  pageSize: number  // 该页记录容量
  pageCount: number // 总页数
  recordCount: number // 记录总数
  records: R[] // 返回具体的记录结果
}

interface Hospital {
  code: string
  name: string
  region: string
  address: string
  medicare_audit_type: number
}
interface Address {
  id?: string | number // 地址id
  receiver: string // 收货人姓名
  phone: string // 收货人电话
  province?: string // 省份，用于前端展示
  city?: string // 市，用于前端展示
  districtId: string // 所在区县id
  district?: string // 区，用于前端展示
  hospitalId?: string | number // 输注医院id
  hospitalName?: string // 输注医院
  hospitalAddress?: string // 输注医院地址
  address: string // 详细地址
  tag?: string // 地址标签
  isDefault: boolean // 是否为默认地址
}

interface UserAddress {
  addressList: Address[]

  async fetchAddressList()
  async createAddress(data: Address)
  async updateAddress(data: Address)
  async deleteAddress(id: string)
}

interface IPatient {
  idcard: string
  medicareId: string
  name: string
  patientId: ID
  patientName: string
  prescriptions: [Prescription]
}

interface PrescriptionDetail {
  type: number // 0 自费 1 医保
  identification: Identification
  patient: IPatient
  auditInfo: {
    reason: string, // 拒绝原因
    pharmacist: string // 审核药师
    handledDate: string
    createDate: string
  }
  prescription: Prescription
  treatment: Treatment
  pics: { thumbUrl: string, url: string }[]
}

interface Prescription {
  amount?: number

  diseaseId: number
  treatmentId: number
  prescriptionTime: number
  duration: number
  img: string

  id: number
  name: string
  number: string
  code: string
  drugs: Product[]
  expiredDate: string
  reason: string
  status: number
  thumbnailUrl: string
  version: number

  department: string
  doctor: string
  hospitalName: string
  hospital?: string

  prescriptionDate: string
  expirationDate: string

  reimbursement?: number
  injectionIncluded: boolean
  orderId?: number
  diseaseName?: string

}

interface Disease {
  id?: string
  name?: string
  start?: number
  end?: number
  disease?: string
  patientId?: number
  patientName?: string
  treatments?: Treatment[]
  identification?: Identificationy

}

interface PagedMedicalDocument {
  pageCount: string
  pageNo: string
  pageSize: string
  recordCount: string
  patientId: string
  records: MedicalDocument[]
}

interface MedicalDocument {
  id: number
  name: string
  number: string
  code: string
  drugs: Product[]
  expiredDate: string
  reason: string
  status: number
  thumbnailUrl: string
  version: number
}

interface Identification {
  id: number
  approvedDate: number
  diseaseName: string
  doctorName: string
  endDate: number
  feedback: string
  hospitalName: string
  pic: string
  startDate: number
  status: number

  doctor: string
  end: number
  hospital: string
  start: number
}

interface DescriptionParams extends PaginationParams {
  patientId?: string
  statusList?: string
  noexpired?: boolean
}

interface PurchaseOrder {
  prescription: PaginationResponse<Prescription>
  prescriptionDrugList: PrescriptionDrug[]

  async fetchPrescription(patientId?: string)
  async fetchPrescriptionDrugList(pid: string)
}

interface NumberBooleanMap {
  [key: number]: boolean
}
interface StringAnyMap {
  [key: string]: any
}

interface PrescriptionDrug {
  candidates: Candidate[]
  drugName: string
  prescriptionDrugId: number
}
interface Candidate {
  items: Product[]
  selected: boolean
  serialNumber: number
}