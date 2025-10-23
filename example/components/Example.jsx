import { ContentContainer } from '@newhighsco/chipset'
import { node, oneOf } from 'prop-types'
import React from 'react'

import styles from './Example.module.scss'

/**
 * The `Example` component
 */
const Example = ({ children, background }) => (
  <ContentContainer
    className={[
      styles.wrapper,
      background && styles[`background${background.toUpperCase()}`]
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <ExampleChild>{children}</ExampleChild>
  </ContentContainer>
)

Example.propTypes = {
  /**
   * The inner children
   */
  children: node,
  background: oneOf(['png', 'svg'])
}

const ExampleChild = ({ children }) => <div>{children}</div>

ExampleChild.propTypes = { children: node }

export default Example
export { Example, ExampleChild }
