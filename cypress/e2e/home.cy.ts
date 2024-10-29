describe('Home Page Tests', () => {

  it('should load the home page', () => {
    cy.visit('http://localhost:3000');
    // Check if the home page loads correctly
    cy.url().should('include', '/');
  });

  it('should make sure that the title is there', () => {
    cy.visit('http://localhost:3000');
    // Check if the title is present
    cy.get('h1').should('have.text', 'Blog Posts');
  });

  it('should render the dark mode toggle', () => {
    cy.visit('http://localhost:3000');
    // Check if the dark mode toggle is present
    cy.get('button').should('have.length', 3);
  });

  it('should render blog posts', () => {
    cy.visit('http://localhost:3000');
    // Check if the blog posts are rendered
    cy.get('h2').should('have.length.at.least', 1);
  });
  it("should click on the light mode button and check if the text changes", () => {
    cy.visit('http://localhost:3000');
    // Click on the light mode button
    cy.get('button').contains('Dark').click();
    // get the color of the header and check if it is white
    cy.get('h1').should('have.css', 'color', 'rgb(255, 255, 255)');
  })
  it("should click on the light mode button and check if the text changes", () => {
    cy.visit('http://localhost:3000');
    // Click on the light mode button
    cy.get('button').contains('Light').click();
    // get the color of the header and check if it is black
    cy.get('h1').should('have.css', 'color', 'rgb(0, 0, 0)');
  })

  // for the next page of the blog post
  // click on the first blog post and check if the url changes
  it('should click on the first blog post and check if the url changes', () => {
    cy.visit('http://localhost:3000');
    cy.get('a').first().click();
    cy.url().should('include', '/posts/');
  })
  it("should make sure that the top header saying 'Post: first-post' is there", () => {
    cy.visit('http://localhost:3000/posts/first-post');
    // Check if the page has the text 
    cy.get('html').should('contain', 'Post: first-post');
  });

  it('should render the dark mode toggle', () => {
    cy.visit('http://localhost:3000/posts/first-post');
    // Check if the dark mode toggle is present
    cy.get('button').should('have.length', 3);
  });

});