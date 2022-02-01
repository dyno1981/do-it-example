import React from 'react'
import {storiesOf} from '@storybook/react'

import {CounterWithCountState} from '../05/withState'

storiesOf('WithState', module)
  .addWithJSX('기본 설정', () => <CounterWithCountState/>)