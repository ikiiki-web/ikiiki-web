import { createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: 'ikiiki',
  token: process.env.NEXT_PUBLIC_NEWT_API_KEY || '',
  apiType: 'cdn',
})

export const client2 = createClient({
  spaceUid: 'ikiiki-2',
  token: process.env.NEXT_PUBLIC_NEWT_API_KEY_2 || '',
  apiType: 'cdn',
})

// Newt APIのクライアント（全コンテンツ取得）
export const previewClient = createClient({
  spaceUid: 'ikiiki',
  token: process.env.NEXT_PUBLIC_NEWT_PREVIEW_API_KEY as string,
  apiType: 'api',
})

export const previewClient2 = createClient({
  spaceUid: 'ikiiki-2',
  token: process.env.NEXT_PUBLIC_NEWT_PREVIEW_API_KEY_2 as string,
  apiType: 'api',
})
