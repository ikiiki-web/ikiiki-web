// 共通
export type Content = {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
  }
}

export type List = {
  limit: number
  skip: number
  total: number
}

export type Thumbnail = {
  altText: string
  description: string
  fileName: string
  fileSize: number
  fileType: 'image/png'
  height: number
  src: string
  title: string
  width: number
  _id: string
  metadata: {}
}

export type Category = {
  name: string
  slug: string
  _id: string
}

export type Categories = List & {
  items: Category[]
}

export type Tag = {
  name: string
  slug: string
  _id: string
}

export type Writer = {
  career: string
  name: string
  post: string
  thumbnail: Thumbnail
}

export type Banner = {
  name: string
  link: string
  image: Thumbnail
}

// 成果事例
export type CaseArticle = Content & {
  title: string
  slug: string
  introduct: string
  content: {
    _id: string
    data: string & {
      link: string
      text: string
    }
    type: 'RICH_TEXT' | 'button'
  }[]
  thumbnail: Thumbnail
  category: Category
  tags: Tag[]
  company: string
  banner: Banner[]
}

export type CaseArticles = List & {
  items: CaseArticle[]
}

// セミナー
export type SeminarArticle = Content & {
  title: string
  slug: string
  introduct: string
  content: {
    _id: string
    data: string & {
      link: string
      text: string
    } & {
      tableItems: {
        title: string
        text: string
      }[]
    }
    type: 'RICH_TEXT' | 'button' | 'TABLE'
  }[]
  thumbnail: Thumbnail
  accepting: boolean
  place: string
  eventDate: string
  speaker: {
    thumbnail: Thumbnail
    career: string
    company: string
    name: string
  }
}

export type SeminarArticles = List & {
  items: SeminarArticle[]
}

// パートナー
export type PartnerArticle = Content & {
  name: string
  romaji: string
  slug: string
  introduct: string
  content: {
    _id: string
    data: string & {
      link: string
      text: string
    } & {
      tableItems: {
        title: string
        text: string
      }[]
    }
    type: 'RICH_TEXT' | 'button' | 'TABLE'
  }[]
  thumbnail: Thumbnail
  category: {
    name: string
    slug: string
    _id: string
    color: string
  }[]
  description: string
}

export type PartnerArticles = List & {
  items: PartnerArticle[]
}

// お知らせ
export type NewsArticle = Content & {
  title: string
  slug: string
  createdAt: string
  content: {
    _id: string
    data: string & {
      link: string
      text: string
    } & {
      tableItems: {
        title: string
        text: string
      }[]
    }
    type: 'RICH_TEXT' | 'button' | 'TABLE'
  }[]
  thumbnail: Thumbnail
}

export type NewsArticles = List & {
  items: NewsArticle[]
}

// メディア
export type MediaArticle = Content & {
  title: string
  slug: string
  introduct: string
  content: {
    _id: string
    data: string & {
      link: string
      text: string
    }
    type: 'RICH_TEXT' | 'button'
  }[]
  thumbnail: Thumbnail
  category: Category
  tags: Tag[]
  writer: Writer
  banner: Banner[]
}

export type MediaArticles = List & {
  items: MediaArticle[]
}

export type MediaPopular = {
  rank: '1' | '2' | '3' | '4' | '5'
  article: MediaArticle
}
