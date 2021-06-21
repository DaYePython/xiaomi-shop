import NavFooter from './NavFooter.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('NavFooter', asnc () => {
    it('first test', () => {
        await mount(NavFooter)
    })
})
