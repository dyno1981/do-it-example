import {configure} from '@storybook/react'

function loadStories() {
  // 스토리 파일을 이곳에 추가할 수 있습니다.
  require('../src/stories/InputStory')
  require('../src/stories/NewCounterStory')
}

configure(loadStories, module)