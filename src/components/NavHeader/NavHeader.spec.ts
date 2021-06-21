import NavHeader from './NavHeader.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('NavHeader', asnc () => {
    it('first test', () => {
        await mount(NavHeader)
    })
})
