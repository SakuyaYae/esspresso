Feature: My health should decreace when I do the wrong choices

  Background: that i stand in front of the cafe
    Given I visit the homepage
    And that i stand in front of the cafe

  Scenario: When I choose wait at the startpage
    When I press Wait
    Then My health should reduce

  Scenario: When I choose wait as you go north
    When I press Go north
    And I press Wait
    Then My health should reduce
