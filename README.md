# Hair & Now
A web browser appointment scheduling app for salons, hairdressers and barbers. MERN based. 

## API endpoints

### Authorization/Authentication
| **Method** | **Route**       | **Description**                                                    |
|------------|-----------------|--------------------------------------------------------------------|
| POST       | /api/signup     | Adds a new User to the DB                                          |
| POST       | /api/login      | Logs an user in, if username and password match the ones on the DB |
| POST       | /api/logout     | Logs an user out                                                   |
| GET        | /api/isloggedin | Checks whether there is a logged in user                           |
### Salons
| **Method**  | **Route**                     | **Description**                                                   |
|-------------|-------------------------------|-------------------------------------------------------------------|
| GET         | /api/getsalons/search?foo=bar | Searches on DB for salons meeting the requirements on the queries |
| GET         | /api/getsalon/:id             | Returns a specific Salon as JSON                                  |
| POST        | /api/postnewsalon             | Creates a new Salon document on the DB                            |
| POST        | /api/editsalon/:id            | Edits a specific Salon entry                                      |
| POST        | /api/deletesalon/:id          | Looks for a Salon on the DB and deletes the document              |
### Appointments
| **Method** | **Route**                     | **Description**                                         |
|------------|-------------------------------|---------------------------------------------------------|
| GET        | /api/getclientappts/:clientId | Returns all appointments associated to a certain client |
| GET        | /api/getsalonappts/:salonId   | Returns all appointments associated to a certain salon  |
| GET        | /api/getappt/:id              | Returns a specific appointment                          |
| POST       | /api/postnewappt              | Creates a new appointment                               |
| POST       | /api/editappt/:id             | Updates an existing appointment                         |
| POST       | /api/deleteappt/:id           | Deletes an existing appointment                         |
### Comments
| **Method** | **Route**                      | **Description**                                       |
|------------|--------------------------------|-------------------------------------------------------|
| GET        | /api/getsaloncomments/:salonId | Returns all comments associated to a salon            |
| POST       | /api/postnewcomment/:salonId   | Creates a new comment, associated to a specific salon |
| POST       | /api/editcomment/:commentId    | Updates an existing comment                           |
| POST       | /api/deletecomment/:commentId  | Deletes an existing comment                           |
### Posts
| **Method** | **Route**                      | **Description**                                       |
|------------|--------------------------------|-------------------------------------------------------|
| GET        | /api/getsaloncomments/:salonId | Returns all comments associated to a salon            |
| POST       | /api/postnewcomment/:salonId   | Creates a new comment, associated to a specific salon |
| POST       | /api/editcomment/:commentId    | Updates an existing comment                           |
| POST       | /api/deletecomment/:commentId  | Deletes an existing comment                           |

## Client routes
| **Route**   | **Description**                                                                                    |
|-------------|----------------------------------------------------------------------------------------------------|
| /salons     | Map with closest salons + search form                                                              |
| /salons/:id | Detail view of a specific salon. Includes ratings module, comments and appointment scheduling form |
| /signup     | User creation form                                                                                 |
| /login      | Login form                                                                                         |
| /dashboard  | Access to dashboard: appointment validation, salon detail edition (for professional accounts), etc.|