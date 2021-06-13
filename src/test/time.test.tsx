import AliyunOSSClient from "../alioss/AliyunOSSClient"


test('生成oss文件路径', () => {
    //日期/用户id/资料类型/文件.jpeg

    const guid = AliyunOSSClient.guid()
    const uid  = `15`
    const fileUrl1 = `20200506/${uid}/identification/${guid}.jpg`
    const fileUrl2 = `20200506/${uid}/disease/${guid}.jpg`
    const fileUrl3 = `20200506/${uid}/treatment/${guid}.jpg`

    const fileUrl1t = AliyunOSSClient.getOssPrescriptionPicUrl(uid)
    const fileUrl2t = AliyunOSSClient.getOssIdentificationDiseasePicUrl(uid)
    const fileUrl3t = AliyunOSSClient.getOssTreatmentPicUrl(uid)
    console.log(fileUrl1)
    console.log(fileUrl1t)
    console.log(`------`)

    console.log(fileUrl2)
    console.log(fileUrl2t)
    console.log(`------`)

    console.log(fileUrl3)
    console.log(fileUrl3t)
    console.log(`------`)


    expect(fileUrl1.length).toBeGreaterThan(3)
})

