import HelloWorld from './HelloWorld.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('HelloWorld', () => {
  it('first test', () => {
    mount(HelloWorld)
  })
})
