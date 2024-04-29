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
  "keyword": "Scenario"
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
  "duration": 2956925900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Username_in_the_Username_Field()"
});
formatter.result({
  "duration": 106320700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Password_in_the_Password_Field()"
});
formatter.result({
  "duration": 70076800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Login_Button_And_it_Navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 860225300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User Search the Hotel in the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-search-the-hotel-in-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user Select the Details of Location in the Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user Select the Hotel in the Hotels field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select the Room Type in the Room Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select the Number0fRooms in the Number Of Rooms Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Select the Check in Date in the Check in Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select the Check Out Date in the Check Out Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select the Adults per Room in the Adults per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select the Children per Room in the Children per Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Clicks the Search Button And Navigates to the Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Details_of_Location_in_the_Location_Field()"
});
formatter.result({
  "duration": 163925200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Hotel_in_the_Hotels_field()"
});
formatter.result({
  "duration": 2155540500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Room_Type_in_the_Room_Type_Field()"
});
formatter.result({
  "duration": 2226223800,
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
  "duration": 216736900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Check_in_Date_in_the_Check_in_Date_Field()"
});
formatter.result({
  "duration": 82934900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Check_Out_Date_in_the_Check_Out_Date_Field()"
});
formatter.result({
  "duration": 68325600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Adults_per_Room_in_the_Adults_per_Room_Field()"
});
formatter.result({
  "duration": 158311100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Children_per_Room_in_the_Children_per_Room_Field()"
});
formatter.result({
  "duration": 176101000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Search_Button_And_Navigates_to_the_Select_Hotel_Page()"
});
formatter.result({
  "duration": 995828100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Select the Hotel in the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-select-the-hotel-in-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user Select the Hotel Name in the Select field",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user Clicks the Continue Button And it Navigates to the Book a Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Hotel_Name_in_the_Select_field()"
});
formatter.result({
  "duration": 66447600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Continue_Button_And_it_Navigates_to_the_Book_a_Hotel_Page()"
});
formatter.result({
  "duration": 549327100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Book a Hotel in the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-book-a-hotel-in-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user Enter the First Name in the First name Field",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Enter the Last Name in the Last name Field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter the Billing Address in the Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Enter the Credit Card No in the Credit Card details",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Select the Credit Card Type in the Credit Card Field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Select the Expiry Date in the Select Month Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select the Expiry Date in the Select Year Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter the CVV Number in the CVV Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Clicks the Book Now Button And it Navigates to the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user Clicks the My Itinerary Button in the Booking confirmation page And it Navigates to the Booked Itinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_First_Name_in_the_First_name_Field()"
});
formatter.result({
  "duration": 67484700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Last_Name_in_the_Last_name_Field()"
});
formatter.result({
  "duration": 68684400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Billing_Address_in_the_Billing_Address_Field()"
});
formatter.result({
  "duration": 63658900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_Credit_Card_No_in_the_Credit_Card_details()"
});
formatter.result({
  "duration": 75450800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Credit_Card_Type_in_the_Credit_Card_Field()"
});
formatter.result({
  "duration": 158204100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Expiry_Date_in_the_Select_Month_Field()"
});
formatter.result({
  "duration": 118593600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_the_Expiry_Date_in_the_Select_Year_Field()"
});
formatter.result({
  "duration": 101237600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_CVV_Number_in_the_CVV_Field()"
});
formatter.result({
  "duration": 72136300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Book_Now_Button_And_it_Navigates_to_the_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 76029700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_My_Itinerary_Button_in_the_Booking_confirmation_page_And_it_Navigates_to_the_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 10057421700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User Logout the Adactin Application",
  "description": "",
  "id": "hotel-booking-of-the-adactin-application;user-logout-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "user Clicks the Logout button And it Navigates to the Successfully Logged out page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Clicks_the_Logout_button_And_it_Navigates_to_the_Successfully_Logged_out_page()"
});
formatter.result({
  "duration": 513939900,
  "status": "passed"
});
});