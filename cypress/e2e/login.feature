Feature: Login
  As a user
  I want to be able to log in to the application
  So that I can access my account

    Scenario: Successful login
        Given the user is on the login page
        When the user enters their username and password
        And clicks the login button
        Then they should be redirected to the dashboard page
        And their username should be displayed in the header