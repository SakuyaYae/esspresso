Feature: I want to see that i have a bag

  Feature Description
  Scenario: My bag is visible when i am utside the cafe
    Given I visit the homepage
    And that i stand in front of the cafe
    Then my bag shoud be visible above the image

  Scenario: My bag is visible when i am north of the cafe
    Given I visit the homepage
    And that i stand in front of the cafe
    When i click on go north
    Then my bag shoud be visible above the image

  Scenario: My bag is visible when i am in the bar
    Given I visit the homepage
    And that i stand in front of the cafe
    And i have clicked on go north
    When i click on go east
    Then my bag shoud be visible above the image

  Scenario: My bag is visible when i am south of the cafe
    Given I visit the homepage
    And that i stand in front of the cafe
    When i click on go south
    Then my bag shoud be visible above the image

  Scenario: My bag is visible when i am at the music festival
    Given I visit the homepage
    And that i stand in front of the cafe
    And i have clicked on go south
    When i click on go west
    Then my bag shoud be visible above the image

  Scenario: My bag is visible when i am in the help screen
    Given I visit the homepage
    And that i stand in front of the cafe
    And i have clicked on the help button
    Then my bag shoud be visible above the image