import SiteTopbar from './SiteTopbar.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('SiteTopbar', asnc () => {
    it('first test', () => {
        await mount(SiteTopbar)
    })
})
