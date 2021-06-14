import moment from "moment"

export const formatTimeStrToYYYYMMDD = (strDate?:string|number) => {
    if(strDate){
        // const format = "YYYY-MM-DD HH:mm:ss"
        const format = "YYYY-MM-DD"
        return moment(strDate).format(format)
    }
    return ""
}

export const formatTimeStrToYYYYMMDDHHMMSS = (strDate?:string|number) => {
    if(strDate){
        const format = "YYYY.MM.DD HH:mm:ss"
        return moment(strDate).format(format)
    }
    return ""
}

export const formatTimeStrToYYYYMMDDHHMM = (strDate?:string|number) => {
    if(strDate){
        const format = "YYYY.MM.DD HH:mm"
        return moment(strDate).format(format)
    }
    return ""
}

export const desensitization = (str:string,beginLen:number,endLen:number) => {
    const len         = str.length
    const firstStr    = str.substr(0,beginLen)
    const lastStr     = str.substr(endLen)
    const middleStr   = str.substring(beginLen, len-Math.abs(endLen)).replace(/[\s\S]/ig, '*')
    const tempStr     = firstStr + middleStr + lastStr
    return tempStr
}

export const stringSubToX = (str?:string,start:number = 2,length:number = 4,defaultReplace:string = "*") => {
    if(str){

        const part1  = str.substring(0,2) //从开始到指定index 不是长度

        //4个* 长度 join的话会少一个 所以要+1
        const part2  = new Array(length + 1).join(defaultReplace)

        const part3  = str.substring(start+length) //直接从6开始到最后了

        return part1 + part2 + part3

    }
    return ""
}
export const randomStr = () => {
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
    }
    return (S4()+S4())
}
export const guid = () => {
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}
// const a = "123456789"
// const b = stringSubToX(a)
// console.log(a,b,a.length == b.length)


export const desensitization_idcard = (idCard:string) : string => {
    return desensitization(idCard,6,-4)
}
//通用脱敏方法 手机号前三后四
export const desensitization_mobile = (mobile:string) : string => {
    return desensitization(mobile,3,-4)
}
//通用脱敏方法 医保卡号保留最后三位
export const desensitization_medicareId = (medicareId:string) : string => {
    if(medicareId && medicareId.length > 4){
        return desensitization(medicareId,0,-3)
    }else{
        return medicareId || ""
    }
}

export const getQueryStringObj = () => {
    return new URLSearchParams(window.location.search)
}
