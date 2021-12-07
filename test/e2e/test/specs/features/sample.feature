
Feature: Sample feature file to illustrate app tests

  Scenario: My First Test
    Given I launch the app
    When I tap on Sign In button
    Then I should see an Error Message

   Scenario: My Second Test
    Given I launch the app
    When I tap on Sign In button
    Then I should not see an Error Message