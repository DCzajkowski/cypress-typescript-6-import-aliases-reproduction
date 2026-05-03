/// <reference types="cypress" />

import { sum } from '@/example'

describe('spec', () => {
  it('imports TS files with aliases correctly', () => {
    cy.then(() => {
      expect(sum(1, 2)).to.equal(3)
    })
  })
})
