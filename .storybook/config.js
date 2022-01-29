import {configure} from '@storybook/react'

function loadStories() {
  require('../src/stories/InputStory')
  // 스토리 파일을 이곳에 추가할 수 있습니다.
}

configure(loadStories, module)