describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Slide Descriptions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  const slides = [
    { title: 'Rome', desc: 'Italy' },
    { title: 'London', desc: 'United Kingdom' },
    { title: 'Paris', desc: 'France' }
  ];

  slides.forEach((slide, index) => {
    it(`Slide ${index + 1} should have correct title and description`, () => {
      for (let i = 0; i < index; i++) {
        cy.get('.swiper-button-next').click().wait(500);
      }
      cy.get('.swiper-slide-active .card-description h1').should('have.text', slide.title);
      cy.get('.swiper-slide-active .card-description p').should('have.text', slide.desc);
    });
  });
});
