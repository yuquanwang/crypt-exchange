import { injectable, inject } from 'inversify'
import {observable, computed, toJS, action} from 'mobx'
import { TYPES, APIPATH, DEFAULTDISTRICT } from '../config'

const EMPTYADDRESS = {
  id: '', // 地址id
  receiver: '', // 收货人姓名 
  phone: '', // 收货人电话 
  province: '', // 省份，用于前端展示
  city: '', // 市，用于前端展示
  districtId: DEFAULTDISTRICT.id, // 所在区县id 
  district: '', // 区，用于前端展示
  hospitalId: '', // 输注医院id
  hospitalName: '', // 输注医院
  hospitalAddress: '', // 输注医院地址
  address: '', // 详细地址 
  tag: '其它', // 地址标签
  isDefault: false// 是否为默认地址
}

@injectable()
export default class implements UserAddress {
  TAGLIST: string[] = ['家', '医院', '其它']

  @observable
  addressList: Address[] = []
  @observable
  hospitalList: Hospital[] = []
  @observable
  operatingAddress: Address = sessionStorage.getItem('operatingAddress') ? JSON.parse(sessionStorage.getItem('operatingAddress') || '{}') : EMPTYADDRESS

  @action
  setOperatingAddress(obj: any, isNew = false) {
    if(isNew) {
      this.operatingAddress = {
        ...obj,
        hospitalId: obj.tag === '医院' ? obj.hospitalId : '',
        districtId: obj.tag === '医院' ? DEFAULTDISTRICT.id : obj.districtId,
      }
    } else {
      this.operatingAddress = {
        ...this.operatingAddress,
        ...obj,
      }
    }
    sessionStorage.setItem('operatingAddress', JSON.stringify(this.operatingAddress))
  }
  @action
  clearOperatingAddress() {
    this.operatingAddress = EMPTYADDRESS
    sessionStorage.removeItem('operatingAddress')
  }

  @inject(TYPES.App)
  private app!: App;

  async fetchAddressList() {
    this.addressList = []
    const list = await this.app.get<null, Address[]>(APIPATH.user.address)
    this.addressList = list?.sort((a, b) => (+b.isDefault - +a.isDefault)) || []
    return this.addressList
  }

  async fetchHospitalList(region: string, medicare_audit_type?: string | number) {
    const list = await this.app.get<any, Hospital[]>(APIPATH.hospitals, {region, medicare_audit_type})
    this.hospitalList = list
    return this.hospitalList
  }

  async createAddress(data: Address) {
    return await this.app.post<Address, any>(APIPATH.user.address, data)
  }

  async updateAddress(data: Address) {
    return await this.app.put<Address>(APIPATH.user.address, data)
  }

  async deleteAddress(id: any) {
    return await this.app.delete<any>(`${APIPATH.user.address}/${id}`)
  }

};