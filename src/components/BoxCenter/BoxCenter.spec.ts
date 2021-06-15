import BoxCenter from './BoxCenter.vue'
import { mount } from '@cypress/vue'
import { cy } from 'local-cypress'

describe('BoxCenter', () => {
  it('first test', () => {
    mount(BoxCenter)

    cy.get('.box-center')
  })
})
