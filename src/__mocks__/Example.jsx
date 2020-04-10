import React from 'react'
import { node } from 'prop-types'

import { wrapper } from './Example.module.scss'

/**
 * The `Example` component
 */
const Example = ({ children }) => <div className={wrapper}>{children}</div>

Example.propTypes = {
  /**
   * The inner children
   */
  children: node
}

export default Example
export { Example }
