import React from 'react'
import { node, string } from 'prop-types'

import styles from './Example.module.scss'

/**
 * The `Example` component
 */
const Example = ({ children, background }) => (
  <div
    className={`${styles.wrapper} ${
      background && styles[`background${background.toUpperCase()}`]
    }`}
  >
    <ExampleChild>{children}</ExampleChild>
  </div>
)

Example.propTypes = {
  /**
   * The inner children
   */
  children: node,
  background: string
}

const ExampleChild = ({ children }) => <div>{children}</div>

ExampleChild.propTypes = {
  children: node
}

export default Example
export { Example, ExampleChild }
