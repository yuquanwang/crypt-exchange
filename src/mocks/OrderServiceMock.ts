import Orders from "../domain/Orders"

export default class extends Orders {
  // async fetchList(p: PaginationParams) {
  //   this.list = [
  //     {
  //       id: "jfioawjefoajeo1", status: 0, quantity: 4, amount: 999.99, deliveryFee: 9.99,
  //       products: [
  //         {
  //           productId: 'f9e0ajofijoj0', drugCode: '8f9uwij42ij', drugName: '曲妥珠单抗',
  //           productName: '[赫赛莱] 注射用曲妥单抗440毫克(20毫升)/瓶 4瓶/盒',
  //           manufacturer: '长白山药业', tags: ['进口', '医保支付'],
  //           price: 169.99, quantity: 2, spec: '440毫克(20 毫升)/瓶',
  //           thumbnailUrl: 'https://img6.16fan.com/attachments/wenzhang/201611/24/147997342845391ge.jpeg',
  //         }
  //       ]
  //     },
  //     {
  //       id: "jfioawjefoajeo2", status: 0, quantity: 4, amount: 999.99, deliveryFee: 9.99,
  //       products: [
  //         {
  //           productId: 'f9e0ajofijoj1', drugCode: '8f9uwij42ij', drugName: '曲妥珠单抗',
  //           productName: '[赫赛莱] 注射用曲妥单抗440毫克(20毫升)/瓶 4瓶/盒',
  //           tags: ['进口', '医保支付'], manufacturer: '长白山药业',
  //           price: 999.99, quantity: 2, spec: '440毫克(20 毫升)/瓶',
  //           thumbnailUrl: 'https://img6.16fan.com/attachments/wenzhang/201611/24/147997342845391ge.jpeg',
  //           note: "出现异常了"
  //         },
  //         {
  //           productId: 'f9e0ajofijoj2', drugCode: '8f9uwij42ij', drugName: '曲妥珠单抗',
  //           productName: '[赫赛莱] 注射用曲妥单抗440毫克(20毫升)/瓶 4瓶/盒',
  //           tags: ['进口', '医保支付'], manufacturer: '长白山药业',
  //           price: 400, quantity: 2, spec: '440毫克(20 毫升)/瓶',
  //           thumbnailUrl: 'https://img6.16fan.com/attachments/wenzhang/201611/24/147997342845391ge.jpeg',
  //         }
  //       ]
  //     }
  //   ]
  // }

  // async fetchOrder(id: string) {
  //   this.selectedOrder = {
  //     auditId: '234909305',
  //     dealInfoDTO: {
  //       distributions: [{
  //         pharmacyId: 'GYXN8932',
  //         pharmacyName: '国药西南成都武兴四路DTP药房',
  //         products: [{
  //           drugCode: 'DRUG839284',
  //           drugName: '注射用人工胰岛素',
  //           tags: ['进口', '医保支付'],
  //           manufacturer: '英吉利', // 厂家
  //           price: 8912,
  //           productId: 'GYXN930294',
  //           productName: '[赫赛莱]注射用曲妥单抗440毫克(20毫升)/瓶4瓶/盒',
  //           quantity: 4,
  //           spec: '1毫克 * 14片',
  //           thumbnailUrl: 'https://img6.16fan.com/attachments/wenzhang/201611/24/147997342845391ge.jpeg',
  //         },],
  //       },
  //       {
  //         pharmacyId: 'GYXN8933',
  //         pharmacyName: '国药西南成都武兴四路DTP药房',
  //         products: [{
  //           drugCode: 'DRUG839285',
  //           drugName: '曲妥珠单抗注射液',
  //           manufacturer: '英吉利', // 厂家
  //           price: 8912,
  //           productId: 'GYXN930295',
  //           tags: ['进口', '医保支付'],
  //           productName: '[赫赛莱]注射用曲妥单抗440毫克(20毫升)/瓶4瓶/盒',
  //           quantity: 4,
  //           spec: '1毫克 * 14片',
  //           thumbnailUrl: 'https://img6.16fan.com/attachments/wenzhang/201611/24/147997342845391ge.jpeg',
  //         }, {
  //           drugCode: 'DRUG839286',
  //           drugName: '恩度',
  //           manufacturer: '英吉利', // 厂家
  //           price: 8912,
  //           productId: 'GYXN930296',
  //           tags: ['进口', '医保支付'],
  //           productName: '[赫赛莱]注射用曲妥单抗440毫克(20毫升)/瓶4瓶/盒',
  //           quantity: 4,
  //           spec: '1毫克 * 14片',
  //           thumbnailUrl: 'https://img6.16fan.com/attachments/wenzhang/201611/24/147997342845391ge.jpeg',
  //         }],
  //       },],
  //       payment: {
  //         amount: 12893848,
  //         cost: 89284,
  //         delivery: 89,
  //         medicare: 831983,
  //         others: 0,
  //       },
  //     },
  //     delivery: {
  //       address: ['四川省成都市青羊区', ' 江汉路91号'],
  //       contactorPhone: ['15228962199', '15227837384'],
  //       desc: '订单配送状态描述，最多支持两行超过两行的显示，则最后三格开始显示省略号',
  //       expectedTime: Date.now(),
  //       reciver: '刘某某',
  //       reciverPhone: '15289428934',
  //       time: Date.now(),
  //       type: 0,
  //     },
  //     status: 0,
  //   }
  // }
}