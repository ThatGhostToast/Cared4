# [Cared4](https://www.cared4.org/)
## Bringing self diagnosing software into the 21st century.
> Last Updated: 04/25/22 </br>
> Author: Zac Almas
</br>

### What is Cared4?
Cared4 is the next best self-diagnosing personal care tool. Users can utilize Cared4 to search for their symptoms and get a diagnosis instantly without doctoral consultation. The application is optimized to be incredibly user-friendly, making care accessible to everyone. Simply inputting a user’s symptoms into the search bar will start their diagnosis as the Cared4 algorithm will quickly provide results illustrating to the user what they most likely have. Whereas other self-diagnosing software displays every result no matter how terrifying, Cared4 will keep the user calm by placing rare conditions separate from what they most likely have. Cared4 will also have the capability to be personalized. Users will be given the option to add personal information such as pre-existing conditions, age, and gender to their profile, which can give them more accurate results when searching for their symptoms. Personalization will also help Cared4’s algorithm determine how severe an illness is. For example, if a user has undergone chemotherapy, a sickness like pneumonia is much more severe than usual. The goal of this application is to bring reliable healthcare to everybody. Sometimes visiting a doctor can be a daunting task. Whether it’s too expensive or too time-consuming, it can be a hassle. Cared4 brings the doctor to your phone, so you can get results whenever is most convenient for free. Providing help wherever possible is how Cared4 brings healthcare into the 21st century.
</br>
### Project Objectives
Everyone should have access to some form of medical care. The objective of Cared4 is to provide a simple healthcare option to everyone. Users will never again have to worry about scheduling an appointment or facing a hefty bill for simple questions about their symptoms. This not only gives the user extra free time but also takes some of the work off of doctors’ plates by answering questions for them. If everyone is able to diagnose themselves from the comfort of their homes effortlessly, Cared4 will be considered a success. 
### Cared4 Technologies
This diagram shows the technologies used to build and host Cared4.
</br>
<img width="750" alt="image" src="https://cared4-assets.s3.us-west-1.amazonaws.com/GitHub+Resources/Cared4+Technologies+Diagram.png">

### Logical System Architecture
The diagram below is used to illustrate the overall logical design of Cared4. Since the application was developed using the React framework, each of the components are shown in the diagram to illustrate what makes up Cared4's front-end. Additionally, the diagram illustrates the seperate API that is used by Cared4 to provide information to the user.
</br>
<img width="750" alt="image" src="https://cared4-assets.s3.us-west-1.amazonaws.com/GitHub+Resources/Cared4+Logical+Solution.png">  

### The Process
This diagram illustrates the flow of the application's processes. 
</br>
<img width="750" alt="image" src="https://cared4-assets.s3.us-west-1.amazonaws.com/GitHub+Resources/Cared4+Block+Diagram.png">

### Physical System Architecture
This diagram shows the physical design of the application. The application is hosted on 3 services. The user can access the application by using either their phone or their computer using HTTPS port 443 because Cared4 is hosted on Vercel. When the user uses Cared4’s services, Cared4's API connects to an AWS RDS database which stores all of the user and illness data.
</br>
<img width="750" alt="image" src="https://cared4-assets.s3.us-west-1.amazonaws.com/GitHub+Resources/Cared4+Physical+Solution.png">

## Detailed Technical Design

### General Technical Approach
Starting the development of Cared4 required the team to envision the application's structure. The team had many meetings to decide how the project should be created. Eventually, the team settled on making the application modular by creating the front end as one piece and making the back end into a separate piece as an API. This allows the team to create a stylized user interface for each device and then hook it up to the back end enabling the developers to only create the back end once. Developing Cared4 required breaking the project down into bite-sized pieces. The team began by separating the project into different goals that would gauge what needed to be done. These goals included making the application accessible on various devices, having a consistent style, and being user-friendly. The team researched various different frameworks and languages that could be used to complete these goals and made sure to pick the best options before committing to anything. Many factors went into deciding these tools, such as developer experience, ease of use, and capabilities. 

### Key Technical Design Decisions
One of the most important objectives of this project is to make it accessible to as many people as possible. This was a significant factor in choosing React as the front-end framework. React is known for its cross-platform capabilities allowing developers to publish Cared4 as a responsive web application that looks amazing regardless of the system accessing the site. Furthermore, we needed a CSS framework that paired well with React and shared its cross-platform capabilities. That is why we chose Bulma to style Cared4. Bulma is 100% responsive because it’s built using flexboxes. This way, no matter what screen size you’re viewing Cared4 on, the style will adapt and keep the application looking as intended. To support the application, the team decided to use Express JS to develop the API. Express provides various features that make developing APIs for web and mobile applications seamless. This, combined with the developer's experience using Express, makes it the perfect framework for Cared4’s API. Finally, the development team found hosting Cared4’s front-end on Vercel, back-end on Render, and database on AWS allowed for quick, easy, free, and reliable continuous deployment. They are all specialized tools that are designed to handle each of the application’s pieces.

### Database Design
Cared4 uses a SQL database that only requires two tables, Users and Illnesses. The API uses the information from the Users table to provide the user with the most accurate results. However, having an account is not required for diagnosis (just recommended) so no connection between the two tables is required.
</br>
<img width="450" alt="image" src="https://cared4-assets.s3.us-west-1.amazonaws.com/GitHub+Resources/Cared4_Database_Design.png">

### Encryption
Cared4's API uses CryptoJS to encrypt user data before it gets stored in the RDS database. This ensures that in the event of a data leak, user account information stays secure. 

### New Technologies
New technologies learned while developing this project were DevOps technolgies. While the team was pretty familiar with the frameworks and languages used to develop the application, the DevOps principles and tools such as continuous deployment, logging, and uptime monitoring were new concepts that were explored to maintain Cared4's availability.

### Risks/Challenges
* Risk: Someone hacks into the database
  - While the probability of this happening are low, it is still important to be prepared because the impact of this could be devestating. User information could get leaked which would lead to a loss in user trust and possibly lawsuits. Because this is such an important issue, it is essential to ensure the project is protected against common cyber attacks such as SQL injections. Additionally, encrypting the content of the database will ensure that if data leaks then, the hacker won’t be able to read it. Furthermore, getting ahead of the problem by not requiring users to input sensitive information, just what they think is required, can give the user peace of mind if there is a data leak. 
* Challenge: Keeping the most accurate information
  - Since the application will use a custom database, ensuring Cared4 has the most accurate information may require extra attention. The developers must research multiple data lists to ensure Cared4 starts with the most updated data. It may pose a challenge to find this data list and keep the information updated as new discoveries are made. It may also be a challenge for the developers to always know of every update to current medical information as it’s presented. Keeping up with the newest information is essential for Cared4’s success and needs to always be accounted for.

### Outstanding Issues
While CryptoJS is an excellent framework, decrypting data that has been hashed became a slight problem. A work around was created to encrypt the user password to ensure that is secure when online. However, the users pre-existing conditions are still not encrypted. This will be the first major update to ensure users have piece of mind.

## Functional and Non-Functional Requirements
### Functional Requirements
<details closed>
<summary>Register Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Email Input        | As a user   | I would like to register my valid email                                                                | So that my email is registered with my account to login later                                             |
| Password Input    | As a user   | I would like to register a password with my account that is at least 8 characters long with at least 1 number and special character                                                         | So that my password is registered with my account to login later                                                  |
| First Name Input    | As a user | I would like to register my first name that is between 1 and 32 characters long with no special characters              | So that my first name is registered with my account                                            |
| Last Name Input    | As a user   | I would like to register my last name that is between 1 and 32 characters long with no special characters                                                         | So that my last name is registered with my account                                             |
| Birthday Input    | As a user | I would like to register my birthday in month, day, year date format using a calendar provided by Cared4 that indicates I am at least 13 years old                                | So that my age is registered with my account to be used by Cared4's severity and possibility algorithm |
| Sex Input            | As a user   | I would like to register my sex as male, female, or other.                                                                      | So that my sex is registered with my account to be used by Cared4's severity and possibility algorithm                                             |
| Previous Conditions Input | As a user   | I would like to register my previous medical conditions using pre-defined tags provided by Cared4 generated by conditions in the database | So that my previous conditions are registered with my account to be used by Cared4's severity and possibility algorithm                                                     |
| Profile Picture Input   | As a user   | I would like to register a profile picture that is 170x170 pixels and in png, jpeg, and jpg file format                               | So that I can register an image of me with my account                               |
| Email Input Validation          | As a system | I would like to check if the entered email is already being used in Cared4                                             | So that multiple users don't register with the same email                                        |
| Display Email Error       | As a system   | I would like to display an error when an email being entered is already in use that says "Sorry, that email is already being used by another Cared4 user. Please enter another email."                                               | So that users are aware when the email they are registering is already in use and know they need to change it                                        |
| Display Email Error       | As a system | I would like to display an error when an email being entered is not valid meaning there is no '@' symbol or '.' after the '@' symbol that says "Please enter a valid email containing an '@' symbol and a '.' after it."                   | So that users know they need to update the email they are entering to add an '@' symbol with a '.' after it to make it valid by Cared4's standards                                  |
| Display First Name Error       | As a system | I would like to display an error when a first name that is not between 1 and 32 characters long is entered that says "First name must be between 1 and 32 characters."                   | So that users know they need to update the first name they entered to be between 1 and 32 characters to make it valid by Cared4's standards                                  |
| Display First Name Error       | As a system | I would like to display an error when a first name that contains a special character is entered that says "No special characters permitted."                   | So that users know they need to update the first name they entered by deleting the special character                                  |
| Display Last Name Error       | As a system | I would like to display an error when a last name that contains a special character is entered that says "No special characters permitted."                   | So that users know they need to update the last name they entered by deleting the special character                                  |
| Display Last Name Error       | As a system | I would like to display an error when a last name that is not between 1 and 32 characters long is entered that says "Last name must be between 1 and 32 characters."                   | So that users know they need to update the last name they entered to be between 1 and 32 characters to make it valid by Cared4's standards                                  |
| Display Birthday Error       | As a system | I would like to display an error when a birthday entered is not in the correct format that says "Please use the calendar to select your birthday."                   | So that users know they need to select a valid date from the calendar provided by Cared4                                  |
| Display Birthday Error       | As a system | I would like to display an error when a birthday entered indicates the user is younger than 13 years old that says "I'm sorry, unfortunately you have to be at least 13 years old to register an account with Cared4."                   | So that users can be informed if they are too young to register an account with Cared4                                  |
| Display Image Error       | As a system | I would like to display an error when a profile picture entered is not 170x170 pixels that says "File is not the correct size. Please use a picture that is 170x170 pixels."                   | So that users know they need to update the size of their pictures to be 170x170 pixels to make it valid by Cared4's standards                                   |
| Display Image Error       | As a system | I would like to display an error when a profile picture entered is not in png, jpeg, or jpg file format that says "File type not supported. Please use PNG, JPEG, or JPG."                   | So that users know they need to update the file type of their profile pictures to PNG, JPEG, or JPG format to make it valid by Cared4's standards.                                  |
  
</details>
<details closed>
<summary>Login Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Email Input        | As a user   | I would like to input my valid email that contains an '@' symbol with a '.' after it                                                                | So that I can login to the application                                             |
| Password Input    | As a user   | I would like to input my password that is at least 8 characters long with at least 1 number and special character                                                         | So that I can login to the application                                                  |
| Check for Stored Email    | As a system | I would like to check email against credential store              | So that I can verify user                                            |
| Check Password Associated with Email    | As a system | I would like to check password against credential store                                                         | So that I can verify user                                             |
| Display Login Error    | As a system | I would like to display a login error if email is incorrect                               | So that the user is informed they have entered incorrect login information |
| Display Login Error            | As a system   | I would like to display a login error if password is incorrect                                                                      | So that the user is informed they have entered incorrect login information                                             |
| Display Connection Error | As a system   | I would like to display an error if the credential store is not found | So that support can debug the system issue                                                     |
| Display Email Error   | As a system   | I would like to display an error when an email being entered is not valid meaning there is no '@' symbol or '.' after the '@' symbol that says "Please enter a valid email containing an '@' symbol and a '.' after it."                               | So that users know they need to update the email they are entering to add an '@' symbol with a '.' after it to make it valid by Cared4's standards                               |
  
</details>
<details closed>
<summary>Update Account Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Updated Email Input        | As a user   | I would like to update my valid email                                                                | So that I can update my email that contains an '@' symbol with a '.' afterwards  to be most accurate                                             |
| Updated Password Input    | As a user   | I would like to update a password with my account that is at least 8 characters long with at least 1 number and special character                                                         | So that I can update my password in the event I forget or just want to update for security                                                   |
| Updated First Name Input    | As a user | I would like to update my first name that is between 1 and 32 characters long with no special characters              | So that I can update my first name to be most accurate                                             |
| Updated Last Name Input    | As a user   | I would like to update my last name that is between 1 and 32 characters long with no special characters                                                         | So that I can update my last name to be most accurate                                             |
| Updated Previous Conditions Input | As a user   | I would like to update my previous medical conditions using pre-defined tags provided by Cared4 generated by conditions in the database | So that I can update my previous medical conditions to be most accurate                                                     |
| Updated Profile Picture Input   | As a user   | I would like to update a profile picture that is 170x170 pixels and in png, jpeg, and jpg file format                               | So that I can update my profile picture to be what I prefer                               |
| Email Input Validation          | As a system | I would like to check if the entered email is already being used in Cared4                                             | So that multiple users don't register with the same email                                        |
| Display Email Error       | As a system   | I would like to display an error when an email being entered is already in use that says "Sorry, that email is already being used by another Cared4 user. Please enter another email."                                               | So that we ensure the updated email is not in use by another user on Cared4                                        |
| Display Email Error       | As a system | I would like to display an error when an email being entered is not valid meaning there is no '@' symbol or '.' after the '@' symbol that says "Please enter a valid email containing an '@' symbol and a '.' after it."                   | So that users know they need to update the email they are entering to add an '@' symbol with a '.' after it to make it valid by Cared4's standards                                  |
| Display First Name Error       | As a system | I would like to display an error when a first name that is not between 1 and 32 characters long is entered that says "First name must be between 1 and 32 characters."                   | So that users know they need to update the first name they entered to be between 1 and 32 characters to make it valid by Cared4's standards                                  |
| Display First Name Error       | As a system | I would like to display an error when a first name that contains a special character is entered that says "No special characters permitted."                   | So that users know they need to update the first name they entered by deleting the special character                                  |
| Display Last Name Error       | As a system | I would like to display an error when a last name that contains a special character is entered that says "No special characters permitted."                   | So that users know they need to update the last name they entered by deleting the special character                                  |
| Display Last Name Error       | As a system | I would like to display an error when a last name that is not between 1 and 32 characters long is entered that says "Last name must be between 1 and 32 characters."                   | So that users know they need to update the last name they entered to be between 1 and 32 characters to make it valid by Cared4's standards                                  |
| Display Birthday Error       | As a system | I would like to display an error when a birthday entered is not in the correct format that says "Please use the calendar to select your birthday."                   | So that users know they need to select a valid date from the calendar provided by Cared4                                  |
| Display Image Error       | As a system | I would like to display an error when a profile picture entered is not 170x170 pixels that says "File is not the correct size. Please use a picture that is 170x170 pixels."                   | So that users know they need to update the size of their pictures to be 170x170 pixels to make it valid by Cared4's standards                                   |
| Display Image Error       | As a system | I would like to display an error when a profile picture entered is not in png, jpeg, or jpg file format that says "File type not supported. Please use PNG, JPEG, or JPG."                   | So that users know they need to update the file type of their profile pictures to PNG, JPEG, or JPG format to make it valid by Cared4's standards.                                  |
| Encrypt Password       | As a system | I would like to encrypt the updated password                   | So that when we save the user's password to the database it is protected against data leaks.                                  |
  
</details>
<details closed>
<summary>Search for Symptoms Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Symptom Input        | As a user   | I would like to be able to input my symptoms into a search by symptoms function                                                                | So that I can find out what illness I have based on my symptoms                                             |
| API connection    | As a system   | I would like to connect to Cared4's API                                                          | So that I can send the entered symptoms to the API to determine the most probable illness                                                  |
| Probability Algorithm    | As a system | I would like run the probability algorithm              | So that I can recieve results from the algorithm based on the entered symptoms and the user's medical history                                            |
| Display Results    | As a system | I would like to display the possible illness search results to the user                                                         | So that they can diagnose themselves                                             |
| Display Illness Information    | As a system | I would like to display additional illness information to the user based on their results                               | So they can care for their illness |
</details>
<details closed>
<summary>Search by Name Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Name Input        | As a user   | I would like to search for a specific illness by name                                                                | So that I can recieve treatment options for a specific illness                                             |
| API connection    | As a system   | I would like to connect to Cared4's API                                                          | So that I can get the illness information from the database                                                  |
| Display Results   | As a system | I would like to display the exact illness results to the user              | So the user can determine what they can do to treat their illness                                            |
</details>

<details closed>
<summary>User API Method Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Front-End Connection        | As a system  | I would like to connect to the Cared4 front-end                                                                | So that I can receive or display user information                                             |
| Database Connection    | As a system   | I would like to connect to the user database                                                          | So that I can create and read data inside the database                                                  |
| Data Encryption   | As a system | I would like to encrypt user data before putting it into the database              | So that user information is secured and protected against data leaks                                            |
| Data Decryption   | As a system | I would like to decrypt user data before displaying it to the user              | So that the user can read the data they entered                                            |
</details>
<details closed>
<summary>Illness API Method Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Front-End Connection        | As a system  | I would like to connect to the Cared4 front-end                                                                | So that I can recieve symptoms from the user and display results                                             |
| Database Connection    | As a system   | I would like to connect to the illness database                                                          | So that I can query the database                                                  |
| Symptoms Query   | As a system | I would like to run a search query on the database using the symptoms recieved from Cared4              | So that I can return possible results to the probability API                                            |
| Name Query   | As a system | I would like to run a search query on the database using the name of an illness entered               | So that I can return a specific illness to the user                                            |
</details>
<details closed>
<summary>Probability Algorithm Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Running the Algorithm        | As a system  | I would like to run an algorithm that determines the highest illness probability based on the symptoms the user input and the base probability                                                                | So that the most accurate results can be returned to the user                                             |
| Front-End Connection    | As a system   | I would like to connect to the Cared4 front-end                                                          | So that I can return the results of the algorithm to the user                                                  |
</details>
<details closed>
<summary>Hosting Requirements</summary>

|    Sub-Features   |    As a(n)    |                                              I would like to                                             |                                             So that                                             |
|:-----------------:|:-----------:|:----------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| Hosting Availability         | As a system  | I would like to be a web application on Chrome (Version 106.0.5249.119+), Edge (Version 106.0.1370.34+), Firefox (Version 105.0.3+), and Safari (Version 16+)                                                                | So that users can access Cared4 from the most common browsers on their computer                                             |
</details>

### Non-Functional Requirement (NFR)
A non-functional requirement that Cared4 has is device compatibility. The developer aims to make Cared4 available on the most popular devices. Using React to build Cared4 supports this NFR by enabling the application to be viewed on popular browsers like Chrome (Version 106.0.5249.119+), Edge (Version 106.0.1370.34+), Firefox (Version 105.0.3+), or Safari (Version 16+) which can be accessed from home computers, smartphones, and tablets. 

## DevOps
### Logging
Cared4's API has extensive logging throughout the application. All major processes and possible errors as well as the entry and exit of all methods are logged. These logs are stored in the loggly software. This allows developers to quickly diagnose issues while the application is still running. A developer can search for the error tag directly, or if they know where the error is occuring, search for the entry point of that method.
</br>
<img width="450" alt="image" src="https://cared4-assets.s3.us-west-1.amazonaws.com/GitHub+Resources/LogglyIMG.png">

### Build Pipelines
Cared4's front-end and back-end support continuous deployment via build pipelines. Both Vercel and Render connect directly to GitHub repositories and will rebuild and redeploy on new code commit. These pipelines support continuous integration and continuous deployment (CI/CD) allowing developers to quickly update Cared4 without having to take down the site and re-upload. 

### Uptime Monitoring
Cared4's front-end and API uptime is monitored via uptime robot. This service monitors Cared4 by testing it's response time every 5 minutes. If either of these services become unavailable, a developer is notified and the application can be quickly fixed and brought back online. You can check the status of Cared4 [here](https://stats.uptimerobot.com/RVjQJUGMv7)!
</br>
<img width="450" alt="image" src="https://cared4-assets.s3.us-west-1.amazonaws.com/GitHub+Resources/UptimeRobotIMG.png">

## Additional Resources
[Software Demo](https://www.loom.com/share/671bc33d2735471f90a5fa31e8475689) | 
[Application Presentation](https://www.loom.com/share/671bc33d2735471f90a5fa31e8475689) | 
[REST API](https://github.com/ThatGhostToast/Cared4_REST_API) 

### Cared4 Documentation
[Project Proposal](https://docs.google.com/document/d/1PCRSNxgnRMQx6O9c5rn3vWLHWnhXd8fL/edit?usp=sharing&ouid=111282101982849658780&rtpof=true&sd=true)
> Last Updated: 04/25/23

[Project Requirements](https://docs.google.com/document/d/12k9tgigCFK_S2zMtpn7-Xyv91c6Ylvoy/edit?usp=sharing&ouid=111282101982849658780&rtpof=true&sd=true)
> Last Updated: 04/25/23

[Final Architectural Plan](https://docs.google.com/document/d/1IQppowQewAcO1jUgUVfZ4z6mOIELrbFh/edit?usp=sharing&ouid=111282101982849658780&rtpof=true&sd=true)
> Last Updated: 04/25/23
