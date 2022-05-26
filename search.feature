Feature: Search word 'online' in the web

    As a guest user
    I want to search word in the web

    Scenario: Search word 'online'
    Given Navigate to the website
    And I type word 'online'
    When I press Enter
    Then I should see search result page
