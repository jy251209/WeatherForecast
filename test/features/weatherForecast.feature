#Feature: Verify the functionality of weather forecasting application
#
#  @waetherforecast @jyo
#  Scenario Outline: Verify the user is able to retrieve 5 day weather forecast of the city
#
#    Given I launch the application
#    When I enter the <City name> and click on submit
#    Then I should get the five day whether forecast
#
#    Examples:
#
#      | City name | Header |
#      | aberdeen  | abcd   |
#
#  @waetherforecast
#  Scenario Outline: Verify that the user is able to retrieve hourly forecast of a day
#
#    Given I launch the application
#    When I enter the <City name> and click on submit
#    Then I should get the five day whether forecast
#    Then I select a <Day> and I will get hourly forecast
#
#    Examples:
#
#      | City name | Day |
## | Glasgow   | Tue |
#
##   @waetherforecast
##   Scenario Outline: Verify that the user is able to hide hourly forecast of a day
#
##     Given I launch the application <Header>
##     When I enter the <City name> and click on submit
##     Then I should get the five day whether forecast
##     Then I select a <Day> and I will get hourly forecast
##     Then I hide the hourly forecast of the selected day
#
##     Examples:
#
##       | City name | Day |
##   #      | Glasgow    |  Tue |
#
##   @waetherforecast
##   Scenario Outline: Verify that the user is able to retrieve hourly forecast of a day
#
##     Given I launch the application <Header>
##     When I enter the <City name> and click on submit
##     Then I should get the five day whether forecast
##     Then I select a <Day> and I will get hourly forecast
##     Then I should be able to summarize the forecast data retrieved
#
##     Examples:
#
##       | City name | Day |
## #      | Glasgow    |  Tue |
#
#
#
#
#
#
#
#
#
#
#
#
