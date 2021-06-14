import moment from 'moment'
import logoSrc from '../assets/logo.svg'
import Patient from '../domain/Patient'

export default class extends Patient {
  // async fetchDiseases() {
  //   this.diseases = [
  //     { id: 111111, name: '乳腺癌', start: moment().add(-1, 'y').valueOf(), end: moment().valueOf() },
  //     { id: 111112, name: '淋巴瘤', start: moment().add(-1, 'y').valueOf(), end: moment().valueOf() }
  //   ]
  // }

  // async fetchRecords() {
  //   this.audits = [
  //     {
  //       id: 1111,
  //       auditCode: '1111',
  //       commitTime: Date.now(),
  //       auditTime: Date.now(),
  //       type: 1, //(病种|治疗方案|处方)
  //       verifyStatus: 3, // (审核中|审核失败|审核成功)
  //       context: '内容',
  //       disease: {
  //         id: 111111,
  //         name: '乳腺癌',
  //         start: Date.now(),
  //         end: Date.now(),
  //         hospitalName: '医院名称',
  //         doctorName: '医生姓名',
  //         img: logoSrc,
  //       }
  //     },
  //     {
  //       id: 1112,
  //       auditCode: '1112',
  //       commitTime: Date.now(),
  //       auditTime: Date.now(),
  //       type: 2, //(病种|治疗方案|处方)
  //       verifyStatus: 3, // (审核中|审核失败|审核成功)
  //       context: '内容',
  //       treatment: {
  //         id: 1111111,
  //         diseaseId: 111111,
  //         diseaseName: '乳腺癌',
  //         start: Date.now(),
  //         end: Date.now(),
  //         hospitalName: '医院名称',
  //         doctorName: '医生名称',
  //         img: logoSrc,
  //       },
  //     },
  //     {
  //       id: 1113,
  //       auditCode: '1113',
  //       commitTime: Date.now(),
  //       auditTime: Date.now(),
  //       type: 3, //(病种|治疗方案|处方)
  //       verifyStatus: 3, // (审核中|审核失败|审核成功)
  //       context: '内容',
  //       prescriptions: [
  //         {
  //           id: 11111111,
  //           diseaseId: 111111,
  //           treatmentId: 1111111,
  //           prescriptionTime: Date.now(),
  //           duration: 4,
  //           img: logoSrc,
  //           drugs: [{
  //             id: 11111111,
  //             code: '111111111',
  //             drugName: '泰瑞莎',
  //             specification: '药品规格',
  //             quantity: 3,
  //             unit: '盒'
  //           }]
  //         }
  //       ]
  //     },
  //     {
  //       id: 1114,
  //       auditCode: '1114',
  //       commitTime: Date.now(),
  //       auditTime: Date.now(),
  //       type: 3, //(病种|治疗方案|处方)
  //       verifyStatus: 3, // (审核中|审核失败|审核成功)
  //       context: '内容',
  //       prescriptions: [
  //         {
  //           id: 11111112,
  //           diseaseId: 111111,
  //           treatmentId: 1111111,
  //           prescriptionTime: Date.now(),
  //           duration: 4,
  //           img: logoSrc,
  //           drugs: [{
  //             id: 111111111,
  //             code: '111111111',
  //             drugName: '泰瑞莎',
  //             specification: '药品规格',
  //             quantity: 3,
  //             unit: '盒'
  //           }]
  //         }
  //       ]
  //     },
  //   ]
  // }
}