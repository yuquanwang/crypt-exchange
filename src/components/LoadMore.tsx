// 使用Intersection Observer API 来判断是否到底部并触发加载函数
// import 'intersection-observer'
import React, {useRef, useEffect, useState, ReactComponentElement, ReactElement} from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { Loading } from './Toast'
import 'intersection-observer'


// 一般情况下该元素隐藏，loading状态或者没有更多数据时显示
const Wrapper = styled.div<{ visible: boolean , styledArticle?:boolean } >`
  color: ${lighten(0.8, '#000')};
  
  text-align: center;
  padding: 2em 0;
  ${props => !props.visible && css`
    visibility: hidden;
  `}
  
  
  .non_data_article{
      display:flex;
      align-items:center;
      justify-content :center;
      font-size:0.85em;
      font-family:PingFang SC;
      font-weight:400;
      color:rgba(153,153,153,1);
      div{ 
              
        padding:0 0.6em;
        font-size:1.4rem;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        
      
      };
      span {
        width:2em;
        height:1px;
        background:rgba(204,204,204,1);
      }
      
  }
 
  
`
Wrapper.defaultProps = {
  visible: false ,
  styledArticle: false
}

export default (props: LoadMoreProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { noMoreText, onFetchMore, count, total ,styledArticle,noMoreElement } = props
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // 创建intersection observer
    let observer: IntersectionObserver | null = new IntersectionObserver(handleIntersectionChange)
    let node = ref.current!
    // 使用observer观察ref
    observer.observe(node)

    return () => {
      observer?.unobserve(node)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, total, onFetchMore])

  useEffect(() => {
    const fetch = async () => {
      await onFetchMore()
      setLoading(false)
    }
    loading && fetch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  // observer会对内部数据snapshot进行immutable 处理，callback只能进行恒定的action
  const handleIntersectionChange: IntersectionObserverCallback = async (entries, observer) => {
    const [entry] = entries

    // entry显示并当还有为获取的list时触发fetch
    if (entry.isIntersecting && count < total) {
      setLoading(true)
    }
  }

  const getNoMoreComponent = () => {
    let el:ReactElement|string = ""
    if(loading) {
      el = <Loading/>
      return el
    }
    if(styledArticle) {
      el =< div className='non_data_article'>
        <span></span>
        <div>没有更多了</div>
        <span></span>
      </div>
      return el
    }
    if(noMoreElement){
      el = noMoreElement
      return el
    }
    if(noMoreText){
      el = noMoreText
      return el
    }else {
      el = '没有更多了'
    }
    return el
  }

  return (
    <Wrapper className="loadMore" ref={ref} visible={loading || (total > 0 && count === total) || count < total }>
      {
        getNoMoreComponent()
      }
    </Wrapper>)
}

interface LoadMoreProps {
  total: number // 后端查询到的记录总条数
  count: number // 前端页面目前渲染的记录总条数
  noMoreText?: string // 文案
  onFetchMore(): Promise<void> // 当滑动到底部需要请求更多数据的请求
  styledArticle?:boolean //s会否是文章哪里
  noMoreElement?:ReactElement //用来显示
}
