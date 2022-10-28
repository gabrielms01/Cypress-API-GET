const { expect } = require("chai");

describe("Get Method", function(){
    it("Scenario 1", function(){
       cy.request("GET", "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a", {
       }).then((r) => {
          expect(r.status).to.eq(200)
          cy.log(r.body.data.list.name)
          expect(r.body.data.list.name).to.eq("Professional")
       });
    })
 })