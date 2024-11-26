Feature: As a player I want to see my money reduce if I buy coffee.


  Scenario: Buying espresso should reduce money bar
    Given I visit the homepage
    And that i stand in front of the cafe
    When the user press the "Enter the cafe" button to enter the cafe
    When I press Buy an espresso
    Then My money should be reduced by 5 coins



