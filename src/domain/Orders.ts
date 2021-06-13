import { inject, injectable } from "inversify"
import { observable } from "mobx"
import { TYPES, APIPATH } from '../config'

@injectable()
export default class Orders implements OrderService {
  @inject(TYPES.App)
  private app!: App

  @observable
  total: number = 0

  @observable
  list: Order[] = []

  @observable
  totalToDeliver: number = 0

  @observable
  listToDeliver: Order[] = []

  @observable
  totalToReceive: number = 0

  @observable
  listToReceive: Order[] = []

  @observable
  totalCompleted: number = 0

  @observable
  listCompleted: Order[] = []

  @observable
  selectedOrder: OrderDetail | null = null

  @observable
  evidences: OrderEvidences | null = null

  async fetchList(p: PaginationParams & { status?: number, keyword?: string }) {
    const { records = [], recordCount, pageNo } = await this.app
      .get<PaginationParams, PaginationResponse<Order>>(APIPATH.user.orders, {
        ...p,
        // @ts-ignore
        status: p.status === 0 ? '0,4' : p.status,
        keyword: p.keyword
      })

    // 根据status值对结果进行赋值
    switch (p.status) {
      // 待发货
      case 0:
        this.listToDeliver = pageNo === 1 ? records : this.listToDeliver.concat(records)
        this.totalToDeliver = recordCount
        break
      // 待收货
      case 1:
        this.listToReceive = pageNo === 1 ? records : this.listToReceive.concat(records)
        this.totalToReceive = recordCount
        break
      // 交易完成
      case 2:
        this.listCompleted = pageNo === 1 ? records : this.listCompleted.concat(records)
        this.totalCompleted = recordCount
        break
      default:
        this.list = pageNo === 1 ? records : this.list.concat(records)
        this.total = recordCount
    }
  }

  async cancelOrder(id: string) {
    await this.app.delete(`${APIPATH.orders}/${id}`)
  }

  async fetchOrder(id: string) {
    this.selectedOrder = await this.app.get<null, OrderDetail>(`${APIPATH.orders}/${id}`)
  }

  async modifyOrder(id: string, pharmacyId: string) {
    await this.app.post(`/order/replacePharmacy?orderId=${id}&pharmacyId=${pharmacyId}`, null)
  }
  async fetchEvidences(id: string) {
    this.evidences = await this.app.get<null, OrderEvidences>(`/orders/${id}/credentials`)
  }

  clearList() {
    this.list = []
  }
  clearEvidences() {
    this.evidences = null
  }
}

export const PAGESIZE = 5

export const ORDER_STATUS = {
  0: '待发货',
  1: '待收货',
  2: '交易成功',
  3: '交易关闭',
  4: '订单异常'
}

export const ORDER_DETAIL_STATUS = {
  0: '药房正在配货中',
  1: '药房已发货',
  2: '药房已经配送完成',
  3: '已取消',
  4: '订单异常',
}

export const ORDER_DETAIL_DESC = {
  0: '配货完成后，药房会安排配送',
  1: '配送员已在途，请耐心等候',
  2: '感谢您对壹树医疗的信任，祝您早日康复',
  // 3: '交易已被关闭，如需要可修改后重新下单',
  3: '',
  4: '订单异常，详细信息请联系药店',
}