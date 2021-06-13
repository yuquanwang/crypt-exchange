import { DefaultTheme } from 'styled-components'
import antTheme from './theme.json'

export const PAGEPATH = {
  base: process.env.NODE_ENV === 'production'
    ? 'https://wecare.medtreehealth.com'
    : 'https://test-wecare.medtreehealth.com',

  // : 'http://192.168.8.189:3000',
  home: '/',
  mine: '/user',
  login: '/login',
  forbidden: '/403',
  notFound: '/404',
  serverError: '/serverError',
  agreement: '/login/agreement',
  preference: '/login/preference',
  articles: '/health/articles',
  article: '/health/articles/:articleId',
  notification: {
    tasks: '/notification/tasks',
    orders: '/notification/orders',
    reminder: '/notification/reminder',
    setReminder: '/notification/setReminder',
    setReminderManual: '/notification/setReminderManual',
    setManual: '/notification/setManual',
    selectDosage: '/notification/selectDosage',
    patientPlan: '/notification/patientPlan',
    setMedReminder: '/notification/setMedReminder',
    abortSuccess: '/notification/abortSuccess',
    changeReminder: '/notification/changeReminder',
    planStatus: '/notification/planStatus',
    drugStatus: '/notification/drugStatus',
    abortDetail: '/notification/abortDetail',
    setSuccess: '/notification/setSuccess',
  },

  profiles: {
    list: '/profiles',
    activate: {
      guide: '/profiles/activation/guide',
      identify: '/profiles/activation/idenfication',
      medicare: '/profiles/activation/medicare',
      check: '/profiles/activation/check',
      consent: '/profiles/activation/consent',
      success: '/profiles/activation/success',
    },
  },
  useMedicine: { //用药提醒
    index: '/useMedicine/index' //用药提醒首页 还没完成
  },
  pharmacy: {  //药房
    chooseAddress: '/pharmacy/chooseAddress',   //选择地址
    choosePharmacy: '/pharmacy/choosePharmacy',   //选择药房
  },
  purchase: {
    index: '/purchase',
    category: '/purchase/category',
    detail: '/purchase/detail/:product_id',
    choosePrescription: '/purchase/choose_prescription',
    chooseDrug: '/purchase/choose_drug/:descriptionId',
    chooseDtp: '/purchase/choose_dtp',
    order: '/purchase/order',
    medicalDocuments: '/purchase/medicalDocuments' //医疗档案列表
  },
  prescription: { //处方列表
    identifiedDisease: '/prescription/identified_disease',       //病种识别
    list_medican: '/prescription/list_medican',                    //列出用药人
    addMedicalCard: '/prescription/addMedicalCard',              //增加用药人地址
    treatmentPrograms: '/prescription/treatmentPrograms',        //治疗方案
    upload: '/prescription/upload',                              //上传处方
    upload_simple: '/prescription/upload_simple',                  //上传处方Simple
    choose: '/prescription/choose' // 选择处方
  },
  user: {
    medicalRecord: '/user/medicalrecord',
    diseaseIdentify: '/medicineDocument/diseaseIdentify',   //认定病种
    medicalDocument: '/medicineDocument/medicalDocument',   //医疗档案列表
    medicalDocumentDetail: '/medicineDocument/:id',     //医疗档案详情
    prescriptionDetail: '/medicineDocument/prescriptionDetail',         //处方详情
    treatments: '/medicineDocument/treatments',         //治疗方案
  },
  prescriptionList: '/prescriptionList',//处方列表
  dtp: '/dtp',
  userAddress: {
    list: '/user/address/list',
    operation: '/user/address/operation/:type',
    hospitals: '/user/address/hospitals',
  },
  orders: {
    all: '/orders',
    detail: '/orders/:orderId',
    evidences: '/orders/:orderId/evidences'
  }
}

export const isSupportWebp = !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0

console.log('isSupportWebp', isSupportWebp)

const viewportWidth = window.innerWidth
const viewportHeight = window.innerHeight

export const HTTPCONFIG = {
  baseURL: process.env.NODE_ENV === 'production'    // 配置部署环境下的参数
    ? 'https://api-wecare.medtreehealth.com'
    : 'https://test-api-wecare.medtreehealth.com',
  // : 'https://d36d13d5031f.ngrok.io',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    // 'issupportwebp': isSupportWebp,
    'width': viewportWidth,
    'height': viewportHeight,
    'Content-Type': 'application/json'
  },
  timeout: 9000,
  withCredentials: true // 需要携带data_version版本信息
}

export const APIPATH = {
  login: '/login',
  authority: '/authority',
  config: '/sys/config',
  wechatSignature: '/wx/signature',
  preferences: '/user/preferences',
  articles: '/articles',
  articlesTitles: '/articles/titles',
  verifyCode: '/verifycode',
  comments: '/comments',
  collections: 'user/collections',
  profiles: '/patients/profiles',
  user: {
    profiles: '/user/profiles',
    info: '/user/info',
    orders: '/user/orders',
    address: '/user/address',
    location: '/user/location',
  },
  medicalDocument: {
    medicalDocuments: '/medicalDocuments',
    medicalDocumentDetail: '/audits/prescriptions',
    identification: '/identifications',
    treatment: '/treatments',
    prescription: '/prescriptions'
  },
  patient: {
    diseases: '/patients/:patientId/diseases',
    records: '/patients/:patientId/audits',
  },
  medicines: '/products',
  purchase: {
    choosePrescriptions: '/purchase/fetchPrescriptions',
    treatmentList: '/treatments',
    diseases: '/diseases',
    costs: '/amounts',
    order: '/order'
  },
  orders: 'orders',
  dtps: '/pharmacies/dtp',
  dtpsForPrescription: '/pharmacies',
  hospitals: '/hospitals',
  prescription: {
    list: '/prescriptions',
    cancel: '/prescriptions',
    candidates: '/candidates'
  },
}

export const COPYWORK = {
  fallback: '壹树医疗',
  titles: {
    login: '登录',
    health: '健康频道',
    buyMedicineKeyword: '壹树购药',
    dtp: 'DTP药房',
    purchase_category: '药品分类',
    purchase_confirm_order: '确认订单',
    prescription_upload: '上传处方',
    medication: '用药人',
    medical_detail: '详情',
    identified_disease: '认定病种',
    treatment_programs: '治疗方案',
    userAddress: '收货地址',
  },
  common: {
    confirm: '确定',
    cancel: '取消',
    clear: '清除',
    filter: '筛选',
    concern: '关注',
    recommend: '推荐',
    total: '全部',
    comment: '评论',
  },
  login: {
    inputPhone: '请输入手机号码',
    inputCode: '请输入验证码',
    verifyCode: '获取验证码',
    agreement: '《用户隐私协议》',
    submit: '登录',
  },
  health: {
    concern: '当前关注',
    inputKeyword: '请输入搜索内容',
    buyMedicineKeyword: '根据药品名称搜索',
    publish: '发表',
  },
  purchase: {
    medicineDetail: '药品详情',
    medicineAbout: '相关资料',
  },
  err: {
    networkError: '网络异常',
    timeout: '请求超时',
    envError: '请在微信环境中打开',
    mobileError: '错误的手机号格式',
    verifyCodeError: '验证码错误',
    error500: '内部错误，请稍后再试',
    inputComment: '请输入评论',
    unRegisterWechat: '该微信还未注册，将跳转到注册页',
    notFound: '请求的资源不存在',
    badRequest: '请求参数错误',
  }
}

// 生产环境使用微信公众号appid
export const WECHATAPPID = 'wxd2aa474ff66b6171'
// 测试号appid
//  : 'wx53e4d04c5fa370f4'

// eslint-disable-next-line max-len
export const WECHATAUTHURL = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${WECHATAPPID}&redirect_uri=${PAGEPATH.base}PATH&response_type=code&scope=snsapi_userinfo&state=medtree#wechat_redirect`

export const theme: DefaultTheme = {
  opacity: 0.6,
  colors: {
    primary: '#12CD9F',
    primaryDark: '#0FB48B',
    blue: '#4D9BFF',
    yellow: '#FEB857',
    red: '#FF6158',
    background: '#F5F5F5',
    gray: '#EEEEEE'
  },
  size: {
    remBase: '62.5%',
    text: 1.6,
    borderRaduis: '5px', // 单位px
    pageMargin: '3rem 2rem'
  },
  ...antTheme
}

export const TYPES = {
  App: Symbol.for('App'),
  Wechat: Symbol.for('Wechat'),
  User: Symbol.for('User'),
  Articles: Symbol.for('Articles'),
  MedicineProductService: Symbol.for('MedicineProductService'),
  Service: Symbol.for('Service'),
  PatientRecords: Symbol.for('PatientRecords'),
  OrderService: Symbol.for('OrderService'),
  Choose: Symbol.for('PatientRecords'),
  ChoosePrescriptionsAPI: Symbol.for('ChoosePrescriptionsAPI'),
  Dtp: Symbol.for('Dtp'),
  UserAddress: Symbol.for('UserAddress'),
  MedicalDocumentsAPI: Symbol.for('MedicalDocumentsAPI'),
  DiseaseAPI: Symbol.for('DiseaseAPI'),
  TreatmentListAPI: Symbol.for('TreatmentListAPI'),
  PrescriptionAPI: Symbol.for('PrescriptionAPI'),
  AliyunOSS: Symbol.for('AliyunOSS'),
  PurchaseOrder: Symbol.for('PurchaseOrder'),
  PrescriptionSubmitDtoClass: Symbol.for('PrescriptionSubmitDtoClass'),
  PatientProfileDTOClass: Symbol.for('PatientProfileDTOClass'),
  CategoryDtoClass: Symbol.for('CategoryDtoClass')
}

export const ANIME = {
  spring: {
    noWobble: 'spring(1, 170, 26, 0)', // { stiffness: 170, damping: 26 }
    gentle: 'spring(1, 120, 14, 0)', // { stiffness: 120, damping: 14 },
    wobbly: 'spring(1, 180, 12, 0)', // { stiffness: 180, damping: 12 },
    stiff: 'spring(1, 210, 20, 0)', // { stiffness: 210, damping: 20 }
  }
}

export const DEFAULTCITY = {
  id: '510100',
  name: '成都'
}

export const DEFAULTDISTRICT = {
  id: '510113',
  name: '青白江区'
}