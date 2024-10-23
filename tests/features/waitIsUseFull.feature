Feature: Wait Button is usefull somtimes

    As a user I want to
    Scenario: Wait in cafe:
        Given I visit the homepage
        And that i stand in front of the cafe
        And have a can of beer in my bag
        And press the enter The cafe Button
        When I press Wait
        Then I shoud have the option to give the can of beer

    Scenario: Wait in the bar:
        Given I visit the homepage
        And that i stand in front of the cafe
        And i have clicked on go north
        And i have clicked on go east
        When I press Wait
        Then I shoud have a can of beer in my bag

    Scenario: Wait in the music festival:
        Given I visit the homepage
        And that i stand in front of the cafe
        And i have clicked on go south
        And i have clicked on go west
        When I press Wait
        Then I shoud have gotten 5 more money

    Scenario: Wait outside the cafe:
        Given I visit the homepage
        And that i stand in front of the cafe
        When I press Wait
        Then I shoud my health go down
        And the text shuold change