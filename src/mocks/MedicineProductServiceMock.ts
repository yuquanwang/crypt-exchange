
import { injectable } from 'inversify'
import logoSrc from '../assets/logo.svg'
import Medicine from "../domain/MedicineProductService"


@injectable()
export default class extends Medicine {
  async fetchMedicines(param: Partial<MedicineParam>) {
       this.list = [
        // {
        //   id: 11111111,
        //   title: '何塞定 何塞定 何塞定 何塞定 何塞定',
        //   thumbnailUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIgEWVak6HNTPNdHctvoS9AGqCGBB-kGJlBfAnJSbJ_FN4rWWi`,
        //   price: 9999.00,
        //   importPlace: '英国进口',
        //   companyName: '澳洲大溪地制药公司',
        //   usage: '1毫克x14片'
        // },
        // {
        //   id: 11111112,
        //   title: '何塞定 何塞定 何塞定 何塞定 何塞定',
        //   thumbnailUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIgEWVak6HNTPNdHctvoS9AGqCGBB-kGJlBfAnJSbJ_FN4rWWi`,
        //   price: 9999.00,
        //   importPlace: '英国进口',
        //   companyName: '澳洲大溪地制药公司',
        //   usage: '1毫克x14片'
        // },
        // {
        //   id: 11111113,
        //   title: '何塞定 何塞定 何塞定 何塞定 何塞定',
        //   thumbnailUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIgEWVak6HNTPNdHctvoS9AGqCGBB-kGJlBfAnJSbJ_FN4rWWi`,
        //   price: 9999.00,
        //   importPlace: '英国进口',
        //   companyName: '澳洲大溪地制药公司',
        //   usage: '1毫克x14片'
        // },
        // {
        //   id: 11111114,
        //   title: '何塞定 何塞定 何塞定 何塞定 何塞定',
        //   thumbnailUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIgEWVak6HNTPNdHctvoS9AGqCGBB-kGJlBfAnJSbJ_FN4rWWi`,
        //   price: 9999.00,
        //   importPlace: '英国进口',
        //   companyName: '澳洲大溪地制药公司',
        //   usage: '1毫克x14片'
        // },
        // {
        //   id: 11111115,
        //   title: '何塞定 何塞定 何塞定 何塞定 何塞定',
        //   thumbnailUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIgEWVak6HNTPNdHctvoS9AGqCGBB-kGJlBfAnJSbJ_FN4rWWi`,
        //   price: 9999.00,
        //   importPlace: '英国进口',
        //   companyName: '澳洲大溪地制药公司',
        //   usage: '1毫克x14片'
        // },
        // {
        //   id: 11111116,
        //   title: '何塞定 何塞定 何塞定 何塞定 何塞定',
        //   thumbnailUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIgEWVak6HNTPNdHctvoS9AGqCGBB-kGJlBfAnJSbJ_FN4rWWi`,
        //   price: 9999.00,
        //   importPlace: '英国进口',
        //   companyName: '澳洲大溪地制药公司',
        //   usage: '1毫克x14片'
        // },
        // {
        //   id: 11111117,
        //   title: '何塞定 何塞定 何塞定 何塞定 何塞定',
        //   thumbnailUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIgEWVak6HNTPNdHctvoS9AGqCGBB-kGJlBfAnJSbJ_FN4rWWi`,
        //   price: 9999.00,
        //   importPlace: '英国进口',
        //   companyName: '澳洲大溪地制药公司',
        //   usage: '1毫克x14片'
        // },
      ]
      return this.list

  }


}