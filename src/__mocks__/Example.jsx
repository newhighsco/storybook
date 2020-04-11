import React from 'react'
import { node } from 'prop-types'

import { wrapper } from './Example.module.scss'

/**
 * The `Example` component
 */
const Example = ({ children }) => (
  <div className={wrapper}>
    <ExampleChild>{children}</ExampleChild>
  </div>
)

Example.propTypes = {
  /**
   * The inner children
   */
  children: node
}

const ExampleChild = ({ children }) => <div>{children}</div>

ExampleChild.propTypes = {
  children: node
}

export default Example
export { Example, ExampleChild }
