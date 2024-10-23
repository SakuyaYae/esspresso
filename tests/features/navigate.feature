Feature: Direction buttons
As a user I want to be able to navigate and visit the different places in this game

  Scenario: Visit the cafe
    Given I visit the homepage "http://localhost:3000"
    And I am in front of the cafe
    When the user press the "Enter the cafe" button to enter the cafe
    And I am in the cafe
    Then I click the "Exit the cafe" button to leave the cafe

  Scenario: Visit the bar
    Given I visit the homepage "http://localhost:3000"
    And I am in front of the cafe
    When I press "Go north" button to go north
    And end up on an empty street
    And then press "Go east" button to go east
    And I am in the Bar
    Then I click the "Go west" button to leave the bar

  Scenario: Visit the music scene
    Given I visit the homepage "http://localhost:3000"
    And I am in front of the cafe
    When I press "Go south" button to go south
    And end up on the country side
    And then press "Go west" button to go west
    And I am at the Music scene
    Then I click the "Go east" button to leave the Music scene
