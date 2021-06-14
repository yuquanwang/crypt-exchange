
import {desensitization_idcard, desensitization_medicareId, desensitization_mobile} from "../utils/string"
import { validateMobile } from "../utils/validators"
import { COPYWORK } from "../config"

test('通用脱敏方法 身份证号', () => {

    const str_oringnal = "110101199003077491"
    const str_res      = desensitization_idcard(str_oringnal)
    console.log(str_oringnal,str_res)
    expect(str_res).toBe('110101********7491')
})

test('通用脱敏方法 手机号前三后四', () => {

    const str_oringnal = "13621822254"
    const str_res      = desensitization_mobile(str_oringnal)
    console.log(str_oringnal,str_res)
    expect(str_res).toBe('136****2254')
})

test('通用脱敏方法 医保卡号保留最后三位', () => {
    const str_oringnal = "110101199003077491"
    const str_res      = desensitization_medicareId(str_oringnal)
    console.log(str_oringnal,str_res)
    expect(str_res).toBe('***************491')
})



test('手机号认证格式 检查', () => {
    expect(validateMobile("19512254153")).toBe(true)
    expect(validateMobile("13585724041")).toBe(true)
    expect(validateMobile("135857240401")).toBe(new Error(COPYWORK.err.mobileError))
})