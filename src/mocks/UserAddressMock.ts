import { injectable } from 'inversify'
import UserAddress from '../domain/UserAddress'

@injectable()
export default class extends UserAddress {

  async fetchAddressList() {
    this.addressList = [{
      id: '111', // 地址id
      receiver: '李四李四李四李四李四李四李四李四', // 收货人姓名
      phone: '13147648596', // 收货人电话 
      province: '山东省', // 省份，用于前端展示
      city: '济南市', // 市，用于前端展示
      districtId: '111', // 所在区县id 
      district: '历城区', // 区，用于前端展示
      hospitalId: '1', // 输注医院id
      address: '花园路298号', // 详细地址 
      tag: '家', // 地址标签
      isDefault: true // 是否为默认地址
    }, {
      id: '22', // 地址id
      receiver: '王立生王立生', // 收货人姓名 
      phone: '13147648343', // 收货人电话 
      province: '山东省', // 省份，用于前端展示
      city: '济南市', // 市，用于前端展示
      districtId: '1113', // 所在区县id 
      district: '历城区', // 区，用于前端展示
      hospitalId: '1', // 输注医院id
      address: '东书房路100号', // 详细地址 
      tag: '其它', // 地址标签
      isDefault: false // 是否为默认地址
    }, {
      id: '33', // 地址id
      receiver: '王登科', // 收货人姓名 
      phone: '13134648599', // 收货人电话 
      province: '山东省', // 省份，用于前端展示
      city: '济南市', // 市，用于前端展示
      districtId: '111', // 所在区县id 
      district: '历城区', // 区，用于前端展示
      hospitalId: 1, // 输注医院id
      address: '东风路8号', // 详细地址 
      tag: '药房', // 地址标签
      isDefault: false // 是否为默认地址
    }, {
      id: '44', // 地址id
      receiver: '刘大夫发', // 收货人姓名 
      phone: '13134648511', // 收货人电话 
      province: '山东省', // 省份，用于前端展示
      city: '济南市', // 市，用于前端展示
      districtId: '111', // 所在区县id 
      district: '历城区', // 区，用于前端展示
      hospitalId: 1, // 输注医院id
      address: '东风路8888888号', // 详细地址 
      tag: '医院', // 地址标签
      isDefault: false // 是否为默认地址
    }, {
      id: '55', // 地址id
      receiver: '探讨探讨', // 收货人姓名 
      phone: '13134648511', // 收货人电话 
      province: '山东省', // 省份，用于前端展示
      city: '济南市', // 市，用于前端展示
      districtId: '111', // 所在区县id 
      district: '历城区', // 区，用于前端展示
      hospitalId: 1, // 输注医院id
      address: '东风路8888888号', // 详细地址 
      tag: '医院', // 地址标签
      isDefault: false // 是否为默认地址
    }]
    return this.addressList
  }

  async fetchHospitalList(region: string) {
    this.hospitalList = [
      {
          "code": "22",
          "name": "四川省妇幼保健院",
          "region": "510100",
          "address": "武侯区沙堰西二街290号",
          "medicare_audit_type": 3
      },
      {
          "code": "23",
          "name": "成都市第五人民医院",
          "region": "510100",
          "address": "温江区麻市街33号|东院区：温江区万春东路56号|大邑第二院区：大邑县",
          "medicare_audit_type": 3
      },
      {
          "code": "24",
          "name": "四川省骨科医院",
          "region": "510100",
          "address": "武侯区一环路西一段132号",
          "medicare_audit_type": 3
      },
      {
          "code": "25",
          "name": "四川大学第四医院",
          "region": "510100",
          "address": "武侯区人民南路三段18号",
          "medicare_audit_type": 3
      },
      {
          "code": "26",
          "name": "崇州市人民医院",
          "region": "510100",
          "address": "崇州市永康东路318号",
          "medicare_audit_type": 4
      },
      {
          "code": "27",
          "name": "彭州市人民医院",
          "region": "510100",
          "address": "彭州市三环255号|金彭西路院区：彭州市金彭西路184号",
          "medicare_audit_type": 4
      },
      {
          "code": "28",
          "name": "郫都区人民医院",
          "region": "510100",
          "address": "郫都区东大街156号",
          "medicare_audit_type": 4
      },
      {
          "code": "29",
          "name": "双流区第一人民医院",
          "region": "510100",
          "address": "双流区东升街道西北街149号",
          "medicare_audit_type": 4
      },
      {
          "code": "30",
          "name": "金堂县第一人民医院",
          "region": "510100",
          "address": "金堂县金广路886号",
          "medicare_audit_type": 4
      },
      {
          "code": "31",
          "name": "都江堰市人民医院",
          "region": "510100",
          "address": "都江堰市发展路89号",
          "medicare_audit_type": 4
      },
      {
          "code": "10",
          "name": "西部战区空军医院（原中国人民解放军第452医院）",
          "region": "510100",
          "address": "锦江区顺江路18号",
          "medicare_audit_type": 1
      },
      {
          "code": "32",
          "name": "青白江区人民医院",
          "region": "510100",
          "address": "青白江区东四路15号|青白江区祥福南街与祥福西街交叉口南50米",
          "medicare_audit_type": 4
      },
      {
          "code": "11",
          "name": "成都市第七人民医院",
          "region": "510100",
          "address": "北区：武侯区致民路51号|南区：武侯区十二中街1号",
          "medicare_audit_type": 1
      },
      {
          "code": "33",
          "name": "成都市龙泉驿区第一人民医院",
          "region": "510100",
          "address": "龙泉驿区玉杨路驿河3组201号|北院区：龙泉驿区鸥鹏大道417号|柏合院区：龙泉驿区磨盘街50号",
          "medicare_audit_type": 4
      },
      {
          "code": "12",
          "name": "四川大学华西医院上锦南府医院",
          "region": "510100",
          "address": "郫都区高新西区尚锦路253号",
          "medicare_audit_type": 3
      },
      {
          "code": "34",
          "name": "成都市温江区人民医院",
          "region": "510100",
          "address": "温江区万春东路10号",
          "medicare_audit_type": 4
      },
      {
          "code": "13",
          "name": "成飞医院",
          "region": "510100",
          "address": "青羊区经一路105号",
          "medicare_audit_type": 3
      },
      {
          "code": "35",
          "name": "简阳市人民医院",
          "region": "510185",
          "address": "四川省资阳市简阳市医院路180号",
          "medicare_audit_type": 4
      },
      {
          "code": "14",
          "name": "四川省中西医结合医院",
          "region": "510100",
          "address": "北区：成华区站北路81号|南区：武侯区人民南路四段51号",
          "medicare_audit_type": 3
      },
      {
          "code": "15",
          "name": "成都市第六人民医院",
          "region": "510100",
          "address": "成华区建设南街16号",
          "medicare_audit_type": 3
      },
      {
          "code": "16",
          "name": "三六三医院",
          "region": "510100",
          "address": "武侯区倒桑树街108号",
          "medicare_audit_type": 3
      },
      {
          "code": "17",
          "name": "成都大学附属医院",
          "region": "510100",
          "address": "金牛区二环路北二段82号|铁二院院区：金牛区通锦路3号",
          "medicare_audit_type": 3
      },
      {
          "code": "18",
          "name": "核工业四一六医院",
          "region": "510100",
          "address": "成华区二环路北四段4号",
          "medicare_audit_type": 3
      },
      {
          "code": "19",
          "name": "成都医学院第一附属医院",
          "region": "510100",
          "address": "新都区宝光大道中段278号",
          "medicare_audit_type": 3
      },
      {
          "code": "1",
          "name": "四川大学华西医院",
          "region": "510100",
          "address": "武侯区国学巷37号",
          "medicare_audit_type": 1
      },
      {
          "code": "2",
          "name": "四川省人民医院",
          "region": "510100",
          "address": "青羊区一环路西二段32号",
          "medicare_audit_type": 1
      },
      {
          "code": "3",
          "name": "四川省肿瘤医院",
          "region": "510100",
          "address": "武侯区人民南路四段55号",
          "medicare_audit_type": 1
      },
      {
          "code": "4",
          "name": "中国人民解放军成都军区总医院",
          "region": "510100",
          "address": "金牛区蓉都大道天回路270号",
          "medicare_audit_type": 1
      },
      {
          "code": "5",
          "name": "四川大学华西第二医院",
          "region": "510100",
          "address": "武侯区人民南路三段20-9号",
          "medicare_audit_type": 1
      },
      {
          "code": "6",
          "name": "成都市第一人民医院",
          "region": "510100",
          "address": "北院区：青羊区红星路一段44号|南院区：武侯区万象北路18号",
          "medicare_audit_type": 1
      },
      {
          "code": "7",
          "name": "成都市第二人民医院",
          "region": "510100",
          "address": "锦江区庆云南街10号",
          "medicare_audit_type": 1
      },
      {
          "code": "8",
          "name": "成都市第三人民医院",
          "region": "510100",
          "address": "青羊区青龙街82号",
          "medicare_audit_type": 1
      },
      {
          "code": "9",
          "name": "成都市妇女儿童中心医院",
          "region": "510100",
          "address": "青羊区日月大道一段1617号",
          "medicare_audit_type": 1
      },
      {
          "code": "20",
          "name": "成都市公共卫生临床医疗中心",
          "region": "510100",
          "address": "锦江区静明路377号|静居寺院区：锦江区静居寺路18号",
          "medicare_audit_type": 3
      },
      {
          "code": "21",
          "name": "成都中医药大学附属医院",
          "region": "510100",
          "address": "金牛区十二桥路39号|肿瘤院区：郫都区西芯大道5号",
          "medicare_audit_type": 3
      }
    ]
    return this.hospitalList
  }

  async createAddress(data: Address) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('create success')
      }, 1000)
    })
  }

  async updateAddress(data: Address) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('update success')
      }, 1000)
    })
  }

  async deleteAddress(id: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('delete success')
      }, 1000)
    })
  }

};