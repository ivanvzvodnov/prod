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

    it('Статьи отображаются(на фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it.skip('Пропущенный тест', () => {
        cy.getByTestId('asdasd').should('exist');
    });
});
