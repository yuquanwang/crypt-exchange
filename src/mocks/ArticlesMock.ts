
import { injectable } from 'inversify'
import logoSrc from '../assets/logo.svg'
import Articles from '../domain/Articles'

@injectable()
export default class extends Articles {
  async fetchArticles(param: Partial<ArticleParam>) {
    // if (param.recomended) {
    //   this.recommendedList = [
    //     {
    //       id: 11111111,
    //       title: '推荐：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 11111112,
    //       title: '推荐：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 11111113,
    //       title: '推荐：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 11111114,
    //       title: '推荐：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 11111115,
    //       title: '推荐：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 11111116,
    //       title: '推荐：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //   ]
    // }
    //
    // if (param.concerned) {
    //   this.concernedList = [
    //     {
    //       id: 21111111,
    //       title: '关注：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 21111112,
    //       title: '关注：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 21111113,
    //       title: '关注：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 21111114,
    //       title: '关注：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //     {
    //       id: 21111115,
    //       title: '关注：柳叶刀发表了重磅论文，首次实现大脑离开身体独立控制机器！',
    //       readCount: 1234,
    //       commentCount: 2325,
    //       thumbnailUrl: logoSrc,
    //     },
    //   ]
    // }
  }

  async autoComplete() {
    this.titles = [
      { id: 23435, title: '柳叶刀｜中国人何时才能消灭乳腺癌！' },
      { id: 23436, title: '柳叶刀｜中国人何时才能消灭乳腺癌！' },
      { id: 23437, title: '柳叶刀｜中国人何时才能消灭乳腺癌！' },
      { id: 23438, title: '柳叶刀｜中国人何时才能消灭乳腺癌！' },
    ]
  }

  async fetchContent(id: number): Promise<{ id: number; htmlString: string; }> {
    return { id: 67, htmlString: '<h1>文章标题<h1/><h2>文章副标题</h2><p>文章正文</p>' }
  }

  async fetchComments(id: number): Promise<CommentItem[]> {
    const now = Date.now()
    const content = '偶尔不吃晚餐不一定会怎样，但如果长期不吃晚餐，因为摄入的能量和营养没法满足身体的需要，就很可能给身体带来一些不良后果'
    return [
      {
        id: 111, authorAvatar: logoSrc, authorName: '上海用户',
        createdTime: now, thumbUpCount: 100, content
      },
      {
        id: 112, authorAvatar: logoSrc, authorName: '成都用户',
        createdTime: now - 3600 * 1000, thumbUpCount: 100, content
      },
      {
        id: 113, authorAvatar: logoSrc, authorName: '北京用户',
        createdTime: now - 24 * 3600 * 1000, thumbUpCount: 100, content
      },
      {
        id: 114, authorAvatar: logoSrc, authorName: '杭州用户',
        createdTime: now - 3 * 24 * 3600 * 1000, thumbUpCount: 100, content
      },
    ]
  }

  // async thumpUpComment(id: number) { }

  // async cancelThumpUp(id: number) { }

  // async collectArticle(id: number) { }

  // async cancelCollection(id: number) { }
}