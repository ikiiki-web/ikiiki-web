import type { NextApiRequest, NextApiResponse } from 'next'
import { previewClient } from '@app/libs/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // secretを検証する、slugパラメータの有無を検証する
  if (!req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // slugと対応するコンテンツがあるか検証する
  const article: any = await previewClient.getFirstContent({
    appUid: req.query.appUid as string,
    modelUid: 'article',
    query: {
      slug: req.query.slug,
      select: ['_id', 'title', 'slug', 'body'],
    },
  })
  if (!article) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // 取得した情報からパスを指定してリダイレクトする
  res.redirect(`/${req.query.url}/preview/${article.slug}`)
}
