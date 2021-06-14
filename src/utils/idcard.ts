
/**
 * 通过身份证号码得到性别
 *  身份证号码 return 1/0 男/女
 */
export const  getSexForCard  = (str:string) => {
    const inputStr = str.toString()
    let sex:number = 1
    if (inputStr.length <= 0){
        return undefined
    }
    else if (inputStr.length == 18) {
        sex = parseInt(inputStr.charAt(16))
        if (sex % 2 == 0) {
            return 0
        } else {
            return 1
        }
    } else {
        sex = parseInt(inputStr.charAt(14))
        if (sex % 2 == 0) {
            return 0
        } else {
            return 1
        }
    }
    return 1
}
