/* 
You have volunteered your time to a local political candidate, 
Elizabeth Sanger, who wants to become a US representative in Congress for your district. 
Unfortunately, the team discovered that you're a software developer, so they have begged 
you to build an application that lets them track volunteers, and store information about Elizabeth 
and her campaign.

Your job is to define the different objects and arrays, their structure, 
and the corresponding properties for each, to represent the following information about 
Elizabeth's campaign.

Her congressional district (you can use yours here)
Her platform statements for the following issues.
    Taxes
    Jobs
    Infrastructure
    Health care
    Crime and enforcement
URL for donation form
Calendar of events
Volunteer information
    Name
    Address
    Email
    Phone number
    Availability
What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
Biography
Image gallery
    Head shot
    Picture of family
    Picture of constituents
Mission statement
URL for registering to vote
*/
const campaign = {
    congressional_district: "5th",
    platform_issues: ["Taxes", "Jobs", "Infrastructure", "Health Care", "Crime and Enforcement"],
    url: "donation.com",
    calendar_events: [],
    vol_info = {
        name: "",
        address: "",
        email: "",
        phone_number: "",
        availability: [],
        tasks: []
    },
    biography: [], // keeping as an array 
    image_gallery = {
        head_shot: [],
        family: [],
        constituents: []
    },
    mission: "",
    vote_url: "",

};