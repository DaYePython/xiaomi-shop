import BgImgBox from './BgImgBox.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('BgImgBox', () => {
    it('first test', () => {
        mount(BgImgBox)

        cy.get('.bg-img-box')
    })
})
