import SysConfig from "../pages/medicalDocument/SysConfig";
import {isProfileCountExceedLimit} from "../pages/medicalDocument/ProfileCheck";


test('通用脱敏方法 身份证号', () => {
    const profiles = [
        {
            "id": 2,
            "activateTime": 1587710884000,
            "name": "测试01",
            "relationship": "REL001",
            "gender": 0,
            "idcard": "416025154585948851",
            "medicareId": "SCCD39452156",
            "medicareProvince": "510000",
            "medicareCity": "成都市",
            "medicareCityId": "510100",
            "medicareType": "MCT0001",
            "phone": "15546489456",
            "version": 0,
            "emergencyContact": {
                "name": "联系人01",
                "phone": "16548546213",
                "idcard": "541245822156546841"
            }
        },
        {
            "id": 3,
            "activateTime": 1587710955000,
            "name": "测试02",
            "relationship": "REL002",
            "gender": 1,
            "idcard": "410603199401010001",
            "medicareId": "SCCD35124515",
            "medicareProvince": "510000",
            "medicareCity": "成都市",
            "medicareCityId": "510100",
            "medicareType": "MCT0001",
            "phone": "14578457457",
            "version": 0,
            "emergencyContact": {
                "name": "联系人02",
                "phone": "14512544541",
                "idcard": "512021455215515414"
            }
        },
        {
            "id": 29,
            "activateTime": 1591067654000,
            "name": "贺贤明",
            "relationship": "REL001",
            "gender": 1,
            "idcard": "31010719841116443X",
            "medicareId": "d1235123123",
            "medicareCity": "池州市",
            "medicareCityId": "341700",
            "medicareType": "",
            "phone": "13621822254",
            "version": 0,
            "emergencyContact": {
                "name": "妈妈",
                "phone": "13002187580",
                "idcard": "31010719841116443x"
            }
        },
        {
            "id": 95,
            "activateTime": 1592892190000,
            "name": "我是新1人",
            "relationship": "REL002",
            "gender": 1,
            "idcard": "120223200201012913",
            "medicareId": "12312312312312321",
            "medicareProvince": "110000",
            "medicareCity": "北京市",
            "medicareCityId": "110100",
            "phone": "13621822245",
            "version": 0,
            "emergencyContact": {
                "name": "贺贤明",
                "phone": "13621822244",
                "idcard": "120223200201015954"
            }
        },
        {
            "id": 99,
            "activateTime": 1593768689000,
            "name": "小明明",
            "relationship": "REL002",
            "gender": 1,
            "idcard": "110224200201012758",
            "medicareId": "12312321321",
            "phone": "13621812254",
            "version": 0,
            "emergencyContact": {
                "name": "王大人",
                "phone": "13002187580",
                "idcard": "110224200201010170"
            }
        },
        {
            "id": 100,
            "activateTime": 1593768824000,
            "name": "小明明",
            "relationship": "REL002",
            "gender": 1,
            "idcard": "110224200201017639",
            "medicareId": "12312321321",
            "phone": "13621822354",
            "version": 0,
            "emergencyContact": {
                "name": "王大人",
                "phone": "13002187580",
                "idcard": "110224200201010170"
            }
        },
        {
            "id": 101,
            "activateTime": 1593769189000,
            "name": "小明",
            "relationship": "REL002",
            "gender": 1,
            "idcard": "110224200201017591",
            "medicareProvince": "110000",
            "medicareCity": "北京市",
            "medicareCityId": "110100",
            "phone": "13002187980",
            "version": 0,
            "emergencyContact": {
                "name": "小强",
                "phone": "13002187680",
                "idcard": "110224200201012571"
            }
        },
        {
            "id": 113,
            "activateTime": 1596443753000,
            "name": "超人",
            "relationship": "REL002",
            "gender": 1,
            "idcard": "110226200201016153",
            "medicareId": "3123123123123112321",
            "medicareCity": "中卫市",
            "medicareCityId": "640500",
            "phone": "13621822284",
            "version": 0,
            "emergencyContact": {
                "name": "王大妈",
                "phone": "13002189891",
                "idcard": "110101201808019571"
            }
        },
        {
            "id": 114,
            "activateTime": 1596532261000,
            "name": "小龙",
            "relationship": "REL003",
            "gender": 1,
            "idcard": "110101192008047951",
            "medicareId": "32423423423432",
            "medicareCity": "北京市",
            "medicareCityId": "110100",
            "phone": "13621822243",
            "version": 0,
            "emergencyContact": {
                "name": "小明",
                "phone": "13621344453",
                "idcard": "110101199003075832"
            }
        }
    ]
    // @ts-ignore
    let errors = isProfileCountExceedLimit(profiles)
    //TODO：需要患者检查限制
    expect(errors.length).toBe(2)
})

