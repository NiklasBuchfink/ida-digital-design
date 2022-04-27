import * as React from 'react'

import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

const notion = new NotionAPI()
const rootNotionPageId = '781a2938ef1043bb8a51d3bb1c0e156d'

export const getStaticProps = async () => {
  const pageId = rootNotionPageId
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export default function Day3 ({ recordMap }) {

  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )
}
