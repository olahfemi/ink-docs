import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/Admonition/Type/Note'
import AdmonitionLayout from '@theme/Admonition/Layout'
import { TriangleDashed } from '@phosphor-icons/react/dist/ssr'

const infimaClassName = 'alert alert--secondary'

const defaultProps = {
  icon: <TriangleDashed weight="bold" />,
  title: (
    <Translate id="theme.admonition.note" description="The default label used for the Note admonition (:::note)">
      note
    </Translate>
  ),
}

export default function AdmonitionTypeNote(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
