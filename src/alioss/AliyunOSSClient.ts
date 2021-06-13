
// 上传代码的单例类
import OSS, { MultipartUploadOptions } from 'ali-oss'
import moment from "moment"
import {PAGEPATH} from "../config"
import { app } from '../utils/container'

class AliyunOSSClient {

    private static instance: AliyunOSSClient

    public oss :OSS | null = null

    static async getOSSSign(): Promise<any> {
        if(!app.token ){
            return null
        }
        // debugger
        const data     =  await fetch(`https://test-api-wecare.medtreehealth.com/sys/stsToken`, {
            // const data     =  await fetch(`${PAGEPATH.base}/sys/stsToken`, {
            method: 'GET',
            headers: {
                token:app.token
            },
        })
        const res       = await data.json()
        if(res.data){
            return res.data
        }{
            return null
        }
    }

    static async  getInstance() : Promise<AliyunOSSClient>{

        if(!AliyunOSSClient.instance){
            let osign = await this.getOSSSign()
            if(osign){
                osign = Object.assign(osign, {
                    bucket: 'wecare-patient',
                    rolesessionname: 'wecare',
                    region: 'oss-cn-zhangjiakou',
                })
                const instance = new AliyunOSSClient()
                instance.oss = new OSS(osign)
                console.log(instance,instance.oss)
                return instance
            }
        }
        console.log(AliyunOSSClient.instance)
        return AliyunOSSClient.instance
    }

    static guid() {
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
        }
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
    }

    static async uploadObject ({ fileUrl,f,succFun,failFun,finalFun}:{fileUrl:string, f:Blob, succFun:Function, failFun:Function, finalFun:Function } ){
        const instance = await AliyunOSSClient.getInstance()
        if(instance){
            try{
                const uploadOptions: MultipartUploadOptions = {}
                const res = instance.oss?.multipartUpload(fileUrl, f, uploadOptions)
                console.log('上传单个文件', res, f)
                succFun()
            }catch(e){
                console.error('上传错误', e.toString())
                failFun(e)
            }finally {
                finalFun()
            }
        }
    }

    static urlPattern(uid:string,prefix:string = 'identification'){
        const dateStr = moment().format("YYYYMMDD")
        const fileName = AliyunOSSClient.guid() + ".jpg"
        const url     = `${dateStr}/${uid}/${prefix}/${fileName}`
        return url
    }
    static getOssPrescriptionPicUrl( uid:string ){
        return AliyunOSSClient.urlPattern(uid,'prescription')
    }
    static getOssIdentificationDiseasePicUrl( uid:string ){
        return AliyunOSSClient.urlPattern(uid,'identification')
    }
    static getOssTreatmentPicUrl(uid:string ){
        return AliyunOSSClient.urlPattern(uid,'treatment')
    }

    static async download ( fileUrl:string = `template.xlsx`  ){
        try{
            const instance = await AliyunOSSClient.getInstance()
            if(instance){
                // 注意 generate object url 才是可以下载的具体的地址哦
                const fileRealUrl = instance.oss?.generateObjectUrl(fileUrl)
                window.open(fileRealUrl)
                // instance.oss?.get(fileUrl).then((r:any) =>{
                //   if(r && r.content){
                //     // console.log(r,r.content,r.res.requestUrls[0])
                //     const f = r.res.requestUrls[0]
                //     const fileObjecUrl = instance.oss?.generateObjectUrl(fileUrl)
                //     console.log(fileObjecUrl,f,fileObjecUrl === f)
                //     window.open(f)
                //     // const blob = new Blob(r.content);
                //     // var blobURL = window.URL.createObjectURL(blob)
                //     // var a = document.createElement("a")
                //     // a.href = blobURL
                //     // a.download = downloadFileName
                //     // document.body.appendChild(a)
                //     // a.click()
                //     // a.remove()
                //     // window.URL.revokeObjectURL(blobURL)
                //   }else{
                //     alert("没有获得对应的模版文件")
                //   }
                // }).catch((e)=>{
                //     console.log(e)
                //     alert("没有获得对应的模版文件")
                //   })
            }
        }catch(e){
            console.log(e)
        }

    }
}

// let aliyunOSSClient:AliyunOSSClient|null
// (async () => {
//     try {
//         aliyunOSSClient = await AliyunOSSClient.getInstance()
//         console.log(aliyunOSSClient)
//     } catch (e) {
//         // Deal with the fact the chain failed
//     }
// })()

export default AliyunOSSClient
