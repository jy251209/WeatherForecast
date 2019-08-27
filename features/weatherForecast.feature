Feature: Verify the functionality of weather forecasting application

  Scenario Outline: Verify the user is able to retrieve 5 day weather forecast of the city
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast

    Examples:

      | City name |
   | aberdeen  |

  Scenario Outline: Verify that the user is able to retrieve hourly forecast of a day
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast

    Examples:

      | City name | Day |
#      | aberdeen  | Wed |
#      | dundee    | Sat |
#      | Glasgow   | Tue |
#      | perth     | Wed |
#      | stirling  | Thu |

  Scenario Outline: Verify that the user is able to hide hourly forecast of a day
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I hide the hourly forecast of the selected <Day>

    Examples:

      | City name | Day |
#      | aberdeen  | Fri |

  Scenario Outline: Verify that the user is getting error message in case of invalid city
    Given Application is open
    When I enter an invalid city name-<City name> and click on submit
    Then I should get the message <Error Message Text>

    Examples:

      | City name | Error Message Text             |
#      | abcd      | Error retrieving the forecast  |
#      | 1234      | Error retrieving the forecast  |

  Scenario Outline: Verify that the user is getting error message when submitting without entering any input
    Given Application is open
    When I submit without entering any input
    Then I should get the message <Error Message Text>

    Examples:

      | Error Message Text             |
#      | Error retrieving the forecast  |
