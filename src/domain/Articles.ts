import { inject, injectable } from 'inversify'
import { computed, observable } from 'mobx'
import { APIPATH, TYPES } from '../config'
import { pageNumber } from "../utils"

@injectable()
export default class implements Articles {
  @inject(TYPES.App)
  private app!: App

  @observable
  pageStatus: 'tabs' | 'titles' = 'tabs'

  @observable
  recommendedList: Article[] = []

  @observable
  concernedList: Article[] = []

  @observable
  keyword: string = ''

  @observable
  filters: Set<string> = new Set()

  @observable
  total: number = 0

  public pageSize:number = 30
  public item:Article = <Article>{}

  async fetchArticles(p: Partial<ArticleParam>) {

    if(p.refresh){
      p.pageNo = 0
      this.recommendedList = []
    }

    p.pageNo   = pageNumber(this.recommendedList.length + 1, this.pageSize )

    if(!p.pageSize){
      p.pageSize = this.pageSize
    }

    if(p.keyword == "" || p.keyword == undefined){
      delete p['keyword']
    }
    const value = await this.app.get<ArticleParam, PaginationResponse<Article>>(APIPATH.articles, p)
    if(!value) {
      this.recommendedList = []
      this.total           = 0
    }else{
      let { records, recordCount, pageNo } = value
      this.recommendedList = pageNo === 1 ? records : this.recommendedList.concat(records)
      this.total = recordCount
    }
   
  }

  clearArticles() {
    this.recommendedList = []
  }

  @computed
  get diseases() {
    return this.app.config.diseaseOptions
      .filter(item => this.filters.has(item.id.toString()))
      .map(item => item.name)
      .reduce((preValue, current, index) =>
        (preValue + current + (index === this.filters.size - 1 ? '' : '、')), '')
      .replace(/(^.{9}).*$/, `$1...等${this.filters.size}种`)
  }

  @observable
  titles: { id: number; title: string }[] = []



  async autoComplete() {
    // // 输入超过两个字后才触发
    // if (this.keyword.length < 2) return
    // const list = await this.app.get<Partial<ArticleParam>, { id: number, title: string }[]>(
    //   APIPATH.articlesTitles, {
    //       keyword: this.keyword,
    //       diseaseNames: [...this.diseases] as string[]
    // })
    // this.titles = list
  }

  async fetchContent(id: number): Promise<{ id: number; htmlString: string; }> {
    return this.app.get(`${APIPATH.articles}/${id}`)
  }

  async fetchComments(id: number): Promise<CommentItem[]> {
    return this.app.get(`${APIPATH.articles}/${id}/comments`)
  }

  async postComment(id: number, content: string) {
    await this.app.post(`${APIPATH.articles}/${id}/comments`, content)
  }

  async thumpUpComment(id: number) {
    await this.app.put(`${APIPATH.comments}/${id}?like=true`, null)
  }

  async cancelThumpUp(id: number) {
    await this.app.put(`${APIPATH.comments}/${id}?like=false`, null)
  }

  async collectArticle(id: number) {
    await this.app.post(APIPATH.collections, id)
  }

  async cancelCollection(id: number) {
    await this.app.delete(APIPATH.collections, id)
  }
}