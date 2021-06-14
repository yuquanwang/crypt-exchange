import { injectable } from 'inversify'
import Dtp from '../domain/Dtp'

@injectable()
export default class extends Dtp {

  async fetchDtps(param: Required<DtpParam>) {
    this.dtpList = [{
      id:   '11111', //id
      name: '国药集团西南有限公司武侯区武兴路药店', // 药房名称
      address: '成都市武侯区武兴录38号附1号', // 药房地址
      phones: [], // 药房联系电话
      certified: true, // 是否是认证药房
      medicalInsured: true, // 是否是医保定点药房
      longitude: 36.3859127700, // 经度
      latitude: 117.3339843800, // 纬度
      pic: 'http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%97.png',
      images: ['http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%97.png',
    'http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%971.png',
  'http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%972.png'],
    }, {
      id:   '2222222', //id
      name: '西南武侯区金科路药店', // 药房名称
      address: '药房地址2', // 药房地址
      phones: ['12345678922', '028-86114566', '028-86114567'], // 药房联系电话
      certified: false, // 是否是认证药房
      medicalInsured: true, // 是否是医保定点药房
      longitude: 66.3859127700, // 经度
      latitude: 17.3339843800, // 纬度
      pic: 'http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%973.png',
      images: ['http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%973.png',
    'http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%972.png']
    }, {
      id:   '333333', //id
      name: '西南武侯区金科路药店西南武侯区金科路药店', // 药房名称
      address: '药房地址2', // 药房地址
      phones: ['12345678922'], // 药房联系电话
      certified: false, // 是否是认证药房
      medicalInsured: false, // 是否是医保定点药房
      longitude: 66.3859127700, // 经度
      latitude: 17.3339843800, // 纬度
      pic: 'http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%972.png',
      images: ['http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%973.png',
    'http://juanhappy.xyz/img/%E8%8D%AF%E5%BA%972.png']
    }]

    return this.dtpList
  }

};