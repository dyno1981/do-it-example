import React from 'react'
import {storiesOf} from '@storybook/react'

import Input from '../03/Input'

storiesOf('Input', module).add('기본 설정', () => <Input name="name"/>)