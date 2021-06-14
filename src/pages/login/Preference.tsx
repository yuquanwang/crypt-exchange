import { useLocalStore, useObserver } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import { Page } from '../../components/Page'
import { PAGEPATH } from '../../config'
import { app, user } from '../../utils/container'
import { StyledSubmit } from '../style'
import { Container, StyledTag, Title } from './style'


interface TagItem {
    id: number | string
    name: string
    active?: boolean
}


export default () => {
    document.title = '温馨指引'
    const history = useHistory()
    const form = useLocalStore(() => ({
        diseases: new Set<number | string>(),
        features: new Set<number | string>()
    }))

    useEffect(() => {
        // 微信环境下调用登录接口绑定微信
        if (app.inWechat) app.login()

        async function fetchConfig() {
            await app.fetchConfig()
        }

        fetchConfig()
    }, [])

    const handleClickDiseaseTag = (id: number | string) => {

        if(form.diseases.size >= 8 && !form.diseases.has(id) ){
            app.showToast("限制关注病种数量最多不能超过8个",1100)
            return
        }

        form.diseases.has(id) ? form.diseases.delete(id) : form.diseases.add(id)
    }

    const handleClickFeatureTag = (id: number | string) => {
        form.features.has(id) ? form.features.delete(id) : form.features.add(id)
    }

    const handleSubmit = async () => {
        try {
            await user.setPreferences([...form.diseases], [...form.features])
            history.push(PAGEPATH.profiles.activate.guide)
        } catch (error) {
            app.showToast(error.message)
        }
    }

    return useObserver(() => (
        <Page style={{ background: 'white' }} bottomsucking>
            <Title style={{ marginTop: '3.5rem' }}>我希望得到</Title>
            <Container>
                {app.config?.featureOptions.map((item, index) => (
                  <StyledTag
                    key={item.id}
                    active={form.features.has(item.id)}
                    onClick={() => handleClickFeatureTag(item.id)}>{item.name}</StyledTag>
                ))}
            </Container>
            <Title>我关注的疾病/资讯</Title>
            <Container>
                {app.config?.diseaseOptions.map((item, index) => (
                    <StyledTag
                        key={item.id}
                        active={form.diseases.has(item.id)}
                        onClick={() => handleClickDiseaseTag(item.id)}>{item.name}</StyledTag>)
                )}
            </Container>
            <div>&nbsp;</div>
            <StyledSubmit>
                <Button layout='primary' disabled={form.diseases.size === 0 || form.features.size === 0}
                    onClick={handleSubmit}>
                    继续
                </Button>
            </StyledSubmit>
        </Page>
    ))
}