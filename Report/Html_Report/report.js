$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking of the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User Login into the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-login-into-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter the Username in the Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the Password in the Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Clicks the Login Button And it Navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_the_Adactin_Application()"
});
formatter.result({
  "duration": 3221405100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Username_in_the_Username_Field()"
});
formatter.result({
  "duration": 117790100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Password_in_the_Password_Field()"
});
formatter.result({
  "duration": 66777000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Login_Button_And_it_Navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 432521200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User Search the Hotel in the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-search-the-hotel-in-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Select the Details of Location in the Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Select the Hotel in the Hotels field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select the Room Type in the Room Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Select the Number0fRooms in the Number Of Rooms Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select the Check in Date in the Check in Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select the Check Out Date in the Check Out Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select the Adults per Room in the Adults per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select the Children per Room in the Children per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Clicks the Search Button And Navigates to the Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Details_of_Location_in_the_Location_Field()"
});
formatter.result({
  "duration": 357178600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Hotel_in_the_Hotels_field()"
});
formatter.result({
  "duration": 2160396400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Room_Type_in_the_Room_Type_Field()"
});
formatter.result({
  "duration": 2221450400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    }
  ],
  "location": "StepDefinition.user_Select_the_Number_fRooms_in_the_Number_Of_Rooms_Field(int)"
});
formatter.result({
  "duration": 232766300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Check_in_Date_in_the_Check_in_Date_Field()"
});
formatter.result({
  "duration": 78949900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Check_Out_Date_in_the_Check_Out_Date_Field()"
});
formatter.result({
  "duration": 63028700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Adults_per_Room_in_the_Adults_per_Room_Field()"
});
formatter.result({
  "duration": 203772800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Children_per_Room_in_the_Children_per_Room_Field()"
});
formatter.result({
  "duration": 201057000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Search_Button_And_Navigates_to_the_Select_Hotel_Page()"
});
formatter.result({
  "duration": 509386300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User Select the Hotel in the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-select-the-hotel-in-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@SelectHotel"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user Select the Hotel Name in the Select field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user Clicks the Continue Button And it Navigates to the Book a Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Hotel_Name_in_the_Select_field()"
});
formatter.result({
  "duration": 56417900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Continue_Button_And_it_Navigates_to_the_Book_a_Hotel_Page()"
});
formatter.result({
  "duration": 964261000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User Book a Hotel in the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-book-a-hotel-in-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@BookHotel"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user Enter the First Name in the First name Field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Enter the Last Name in the Last name Field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter the Billing Address in the Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter the Credit Card No in the Credit Card details",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Select the Credit Card Type in the Credit Card Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select the Expiry Date in the Select Month Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Select the Expiry Date in the Select Year Field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Enter the CVV Number in the CVV Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Clicks the Book Now Button And it Navigates to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user Clicks the My Itinerary Button in the Booking confirmation page And it Navigates to the Booked Itinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_First_Name_in_the_First_name_Field()"
});
formatter.result({
  "duration": 95930200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Last_Name_in_the_Last_name_Field()"
});
formatter.result({
  "duration": 66154200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Billing_Address_in_the_Billing_Address_Field()"
});
formatter.result({
  "duration": 70688300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Credit_Card_No_in_the_Credit_Card_details()"
});
formatter.result({
  "duration": 174915200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Credit_Card_Type_in_the_Credit_Card_Field()"
});
formatter.result({
  "duration": 168962800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Expiry_Date_in_the_Select_Month_Field()"
});
formatter.result({
  "duration": 103626200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Expiry_Date_in_the_Select_Year_Field()"
});
formatter.result({
  "duration": 113275700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_CVV_Number_in_the_CVV_Field()"
});
formatter.result({
  "duration": 79711400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Book_Now_Button_And_it_Navigates_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 117504900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_My_Itinerary_Button_in_the_Booking_confirmation_page_And_it_Navigates_to_the_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 25305520300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User Logout the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-logout-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@LogoutTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "#When user Search there Order details in the Search Order Id Field"
    },
    {
      "line": 43,
      "value": "#And user Enter the Order Id in the search order id field"
    },
    {
      "line": 44,
      "value": "#And Clicks the Go button"
    },
    {
      "line": 45,
      "value": "#And user should get the order details in the page"
    }
  ],
  "line": 46,
  "name": "user Clicks the Logout button And it Navigates to the Successfully Logged out page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Logout_button_And_it_Navigates_to_the_Successfully_Logged_out_page()"
});
formatter.result({
  "duration": 556384100,
  "status": "passed"
});
});