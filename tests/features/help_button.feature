Feature: Help button
  As a user I want to be able to click the Help button on two different pages

  Scenario: Press the help button on startpage
    Given I visit the homepage "http://localhost:3000"
    And I am in front of the cafe
    When I press the "Help" button
    Then I should get a description of the game

  Scenario: Press the help button when user is inside the café
    Given I visit the homepage "http://localhost:3000"
    And I am in front of the cafe
    When the user press the "Enter the cafe" button to enter the cafe
    And inside the cafe press "Help" button
    Then the user should get a description of the game

  Scenario: Press the help button when user is at the music scene
    Given I visit the homepage "http://localhost:3000"
    And I am in front of the cafe and press "Go south" 
    And when user is on the country side and press "Go west" button
    When the user is at the Music scene
    And press "Help" button
    Then the user should get a description of the game
