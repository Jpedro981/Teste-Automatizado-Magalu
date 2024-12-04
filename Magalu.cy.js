describe('Testes de Busca em Portal de Comércio Online', () => {
  const baseUrl = 'https://www.magazineluiza.com.br'; // 

  it('Cenário 1: Busca bem-sucedida por um produto', () => {
    cy.visit(baseUrl);

    // Insere o termo de busca e realiza a pesquisa
    cy.get('input[placeholder="Busca no Magalu"]').type('Smartphone{enter}');

    // Valida que a URL foi atualizada e os resultados estão visíveis
    cy.url().should('include', 'busca');
    cy.get('Smartphone').should('exist'); 
    cy.contains('Smartphone').should('be.visible');

  });

  it('Cenário 2: Busca sem resultados', () => {
    cy.visit(baseUrl);

    // Insere um termo que não existe
    cy.get('input[placeholder="Busca no Magalu"]').type('ProdutoInexistente12345678910{enter}');

    // Valida que uma mensagem de "sem resultados" aparece
    cy.contains('Sua busca por "produtoinexistente1234578910" não encontrou resultado algum :(').should('be.visible');
  });


});
