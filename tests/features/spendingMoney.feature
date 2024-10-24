Feature: As a player I want to see my money reduce if I buy coffee.


  Scenario: Press the help button on startpage and leave the help description
    Given I visit the homepage
    And I am in front of the cafe
    When the user press the "Enter the cafe" button to enter the cafe
    When I press Buy an espresso
    Then My money should be reduced by 5 coins



