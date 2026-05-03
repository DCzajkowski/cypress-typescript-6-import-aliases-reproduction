/// <reference types="cypress" />

import { sum } from '@/example'

describe('page', () => {
  it('works', () => {
    cy.then(() => {
      expect(sum(1, 2)).to.equal(3)
    })
  })
})
