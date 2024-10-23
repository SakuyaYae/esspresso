Feature: My health should decreace when I do the wrong choices

  Scenario: When I choose wait at the startpage
    Given I visit the homepage "http://localhost:3000"
    And I am in front of the cafe
    When I press Wait 
    Then My health should reduce

  Scenario: Scenario name
