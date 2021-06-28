Feature: Verify the functionality of weather forecasting application

  @all @weather-01
  Scenario Outline: Verify the user is able to retrieve 5 day weather forecast of the city
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast

    Examples:

      | City name |
      | aberdeen  |
      | dundee    |
      | Glasgow   |
      | perth     |
      | stirling  |
      | edinburgh |

  @all @weather-02
  Scenario Outline: Verify that the user is able to retrieve hourly forecast of a day
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast

    Examples:

      | City name | Day |
      | aberdeen  | Wed |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |


  @all @weather-03
  Scenario Outline: Verify the weather forecast displayed is in 3 hour format
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I validate displayed forecast of the selected <Day> is in 3 hourly format

    Examples:

      | City name | Day |
      | aberdeen  | Wed |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |
      | edinburgh | Thu |

  @all @weather-04
  Scenario Outline: Verifying minimum and maximum temperature of the selected day is populating correctly or not
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I validate the Minimum and maximum temperature of the selected <Day>

    Examples:

      | City name | Day |
      | aberdeen  | Wed |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |
      | edinburgh | Thu |

  @all @weather-05
  Scenario Outline: Verifying aggregate rainfall of the selected day is populating correctly
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I validate the aggregate rainfall of the selected <Day>

    Examples:

      | City name | Day |
      | aberdeen  | Wed |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |
      | edinburgh | Thu |

  @all @weather-06
  Scenario Outline: Verifying most dominant condition of the selected day is populating correctly
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I validate the dominant condition of the selected <Day>

    Examples:

      | City name | Day |
      | aberdeen  | Wed |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |
      | edinburgh | Thu |

  @all @weather-07
  Scenario Outline: Verifying wind speed of the selected day is populating correctly
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I validate the wind speed of the selected <Day>

    Examples:

      | City name | Day |
      | aberdeen  | Wed |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |
      | edinburgh | Thu |

  @all @weather-077
  Scenario Outline: Verifying wind direction of the selected day is updated correctly
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I validate the current wind direction of the selected <Day>
    Examples:

      | City name | Day |
      | aberdeen  | Wed |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |
      | edinburgh | Thu |

  @all @weather-08
  Scenario Outline: Verify that the user is able to hide hourly forecast of a day
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I hide the hourly forecast of the selected <Day>

    Examples:

      | City name | Day |
      | aberdeen  | Fri |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |
      | edinburgh | Thu |

  @all @weather-09
  Scenario Outline: e2e weather forecast application
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I select a <Day> and I will get hourly forecast
    Then I validate displayed forecast of the selected <Day> is in 3 hourly format
    Then I validate the Minimum and maximum temperature of the selected <Day>
    Then I validate the aggregate rainfall of the selected <Day>
    Then I validate the dominant condition of the selected <Day>
    Then I validate the wind speed of the selected <Day>
    Then I hide the hourly forecast of the selected <Day>

    Examples:

      | City name | Day |
      | aberdeen  | Fri |
      | dundee    | Sat |
      | Glasgow   | Tue |
      | perth     | Wed |
      | stirling  | Thu |
      | edinburgh | Thu |

  @all @weather-10
  Scenario Outline: Verify that the user is getting error message in case of invalid city
    Given Application is open
    When I enter an invalid city name-<City name> and click on submit
    Then I should get the message <Error Message Text>

    Examples:

      | City name | Error Message Text             |
      | abcd      | Error retrieving the forecast  |
      | 1234      | Error retrieving the forecast  |
      | !@££$%    | Error retrieving the forecast  |
      | ab@£#12   | Error retrieving the forecast  |

  @all @weather-11
  Scenario Outline: Verify that the input city name field is not case sensitive
    Given Application is open
    When I enter the <City name> in upper case then click on submit
    Then I should get the five day whether forecast

    Examples:

      | City name |
      | aberdeen  |
      | dundee    |
      | Glasgow   |
      | perth     |
      | stirling  |
      | edinburgh |

  @all @weather-12
  Scenario Outline: Verify the default city name is displayed when refreshing the page
    Given Application is open
    When I enter the <City name> and click on submit
    Then I should get the five day whether forecast
    Then I refresh the page
    Then I should get the default city name in input search field

    Examples:

      | City name |
      | aberdeen  |
      | dundee    |
      | Glasgow   |
      | perth     |
      | stirling  |
      | edinburgh |

  @all @weather-13
  Scenario Outline: Verify that the user is getting error message when submitting without entering any input
    Given Application is open
    When I submit without entering any input
    Then I should get the message <Error Message Text>

    Examples:

      | Error Message Text             |
#      | Error retrieving the forecast  |
