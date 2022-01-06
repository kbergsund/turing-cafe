describe('Homepage test block', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 201,
      body: [
        {
          "id": 1,
          "name": "Christie",
          "date": "12/29",
          "time": "7:00",
          "number": 12
        },
        {
          "id": 2,
          "name": "Leta",
          "date": "4/5",
          "time": "7:00",
          "number": 2
          },
      ]
    })
    cy.visit('http://localhost:3000/')
  });

  it('should display header', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  });

  it('should display existing reservations', () => {
    cy.get('.resy-container > :nth-child(1)').children()
      .contains('h2', 'Christie')
      .next().contains('p', '12/29')
      .next().contains('p', '7:00pm')
      .next().contains('p', 'Number of guests: 12')
      .next().get('button').contains('Cancel')

    cy.get('.resy-container > :nth-child(2)').children()
      .contains('h2', 'Leta')
      .next().contains('p', '4/5')
      .next().contains('p', '7:00pm')
      .next().contains('p', 'Number of guests: 2')
      .next().get('button').contains('Cancel')
  });

  it('should have a functioning form for adding reservations', () => {
    cy.get('form')
      .get('[placeholder="Name"]').type('Kyra')
      .should('have.value', 'Kyra')

      .get('[placeholder="Date (mm/dd)"]').type('08/14')
      .should('have.value', '08/14')

      .get('[placeholder="Time"]').type('6:45')
      .should('have.value', '6:45')

      .get('[placeholder="Number of guests"]').type('1')
      .should('have.value', '1')

      .get('button').contains('Make Reservation').click()

    cy.get('.resy-container > :nth-child(3)').children()
      .contains('h2', 'Kyra')
      .next().contains('p', '08/14')
      .next().contains('p', '6:45pm')
      .next().contains('p', 'Number of guests: 1')
      .next().get('button').contains('Cancel')
  });
});