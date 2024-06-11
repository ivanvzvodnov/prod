describe('Список статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('Статьи отображаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
