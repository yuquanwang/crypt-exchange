import { injectable, inject } from 'inversify'
import {observable, computed, toJS} from 'mobx'
import _ from "lodash"
import { TYPES, APIPATH } from '../config'

export const pageSize:number = 30

@injectable()
export default class implements MedicineProductService {
  @inject(TYPES.App)
  private app!: App;

  @observable
  total: number = 0

  @observable
  list: Medicine[] = []


  @observable
  totalToReceive: number = 0

  @observable
  listToReceive: Medicine[] = []

  @observable
  search: string = '';

  @observable
  medicine: Medicine = <Medicine>{}

  @observable
  category_ids:string[]  = [] as string[];

  async fetchList(p: MedicineParam) {

    p.pageSize = pageSize
    const { records, recordCount, pageNo } = await this.app.get<MedicineParam, PaginationResponse<Medicine>>(APIPATH.medicines, p)
    this.list = pageNo === 1 ? records : this.list.concat(records)
    this.total = recordCount
  }
  
  async fetchProduct(productId: string) {
    this.medicine  = await this.app.get<Partial<MedicineParam>, Medicine>(`${APIPATH.medicines}/${productId}`)
    return this.medicine
  }
};


// export const PAGESIZE = 10
// export const ORDER_STATUS = {
//   0: '待发货',
//   1: '待收货',
//   2: '交易成功',
//   3: '交易关闭',
//   4: '订单异常'
// }
// export const ORDER_DETAIL_STATUS = {
//   0: '药房正在配货中',
//   1: '配送中',
//   2: '药房已经配送完成',
//   3: '已取消',
//   4: '订单异常',
// }
// export const ORDER_DETAIL_DESC = {
//   0: '配货完成后，药房会安排配送',
//   1: '配送员已在途，请耐心等候',
//   2: '感谢您对壹树医疗的信任，祝您早日康复',
//   3: '交易已被关闭，如需要可修改后重新下单',
//   4: '订单异常，详细信息请联系药店',
// }