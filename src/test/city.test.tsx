import { getIndiceByCityId } from "../pages/dtp/util"
import SysConfig from "../pages/medicalDocument/SysConfig"


test('测试从cityid获得inidine', () => {
    console.log( getIndiceByCityId("120100") ) //天津 天津市
    console.log( getIndiceByCityId("130300") ) //河北 秦皇岛
    expect( getIndiceByCityId("130300")).toBe([2,1])
})


