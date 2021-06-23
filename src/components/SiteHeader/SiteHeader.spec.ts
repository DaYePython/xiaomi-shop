import SiteHeader from './SiteHeader.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('SiteHeader', asnc () => {
    it('first test', () => {
        await mount(SiteHeader)
    })
})
