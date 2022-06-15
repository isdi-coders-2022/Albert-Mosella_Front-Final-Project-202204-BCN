describe("empty spec", () => {
  it("passes", () => {
    cy.visit(
      "https://albert-mosella-front-final-project-202204-bcn.netlify.app/home"
    );

    cy.get("button").contains("Login").click();

    cy.get("label").contains("Username").type("username");
    cy.get("label").contains("Password").type("password{enter}");

    cy.get(`[class="long-button"]`).contains("Add a new property").click();

    cy.get("label").contains("Type of").type("Test House");
    cy.get("label").contains("Adress").type("Test House");
    cy.get("label").contains("Name").type("Test House");
    cy.get("label").contains("Surface").type("9");
    cy.get("label").contains("Price").type("9");
    cy.get("label").contains("Bedrooms").type("9");
    cy.get("label").contains("Bathrooms").type("9");
    cy.get("label").contains("Year").type("9");
    cy.get("label").contains("Image").type("https://imgur.com/DPOhOUC.jpg");
    cy.get("label").contains("Description").type("Test House");
    cy.get("label").contains("Views").click();
    cy.get("label").contains("Air Conditioning").click();
    cy.get("label").contains("Heating").click();
    cy.get("label").contains("Parking").click();
    cy.get("label").contains("Pool").click();
    cy.get("label").contains("Fireplace").click();
    cy.get("label").contains("Garden").click();
    cy.get("label").contains("Laundry Room").click();
    cy.get("label").contains("Storage").click();
    cy.get("label").contains("Terrace").click();

    cy.get(`[class="form-button"]`).contains("Save").click();
  });
});
