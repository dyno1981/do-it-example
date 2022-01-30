import React from 'react'
import {storiesOf} from '@storybook/react'

import Text from '../04/Text'

storiesOf('Text', module)
  .addWithJSX('기본 설정', () => <Text>안녕하세요</Text>)
  .addWithJSX('large 설정', () => <Text large>안녕하세요</Text>)
  .addWithJSX('xlarge 설정', () => <Text xlarge>안녕하세요</Text>)
  .addWithJSX('small 설정', () => <Text small>안녕하세요</Text>)
  .addWithJSX('xsmall 설정', () => <Text xsmall>안녕하세요</Text>)
  .addWithJSX('primary 설정', () => <Text primary>안녕하세요</Text>)
  .addWithJSX('secondary 설정', () => <Text secondary>안녕하세요</Text>)
  .addWithJSX('primary와 large 설정', () => <Text primary large>안녕하세요</Text>)