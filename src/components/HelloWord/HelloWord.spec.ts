import HelloWord from './HelloWord.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('HelloWord', asnc () => {
    it('first test', () => {
        await mount(HelloWord)
    })
})
