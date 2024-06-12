let currenArticleId = '';

describe('template spec', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currenArticleId = article.id;
        }).then(() => {
            cy.visit(`articles/${currenArticleId}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currenArticleId);
    });

    it('Содержание статьи отображается', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('Список рекомендаций отображается', () => {
        cy.getByTestId('ArticleReccomendationsList').should('exist');
    });

    it('Отправка комментария работает', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('Оценка статьи работает', () => {
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true').should('have.length', 4);
    });

    it('Оценка статьи работает со стабом на фикстурах', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true').should('have.length', 4);
    });
});
