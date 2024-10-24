Feature: Help button
  As a user I want to be able to click the Help button from different views

  Scenario: Press the help button on startpage and leave the help description
    Given I visit the homepage "http://localhost:3000"
    And that i stand in front of the cafe
    When I press the "Help" button
    Then I should get a description of the game
    And I click the "continue" button to leave the help description

  Scenario: Press the help button when user is inside the café
    Given I visit the homepage "http://localhost:3000"
    And that i stand in front of the cafe
    When the user press the "Enter the cafe" button to enter the cafe
    And I press the "Help" button
    Then I should get a description of the game

  Scenario: Press the help button when user is at the music scene
    Given I visit the homepage "http://localhost:3000"
    And that i stand in front of the cafe
    When I press "Go south" button to go south
    And end up on the country side
    And then press "Go west" button to go west
    And the user is at the Music scene
    And I press the "Help" button
    Then I should get a description of the game

  Scenario: Press the help button when user is at the bar
    Given I visit the homepage "http://localhost:3000"
    And that i stand in front of the cafe
    When I press "Go north" button to go north
    And end up on an empty street
    And then press "Go east" button to go east
    And the user is at the Bar
    And I press the "Help" button
    Then I should get a description of the game
