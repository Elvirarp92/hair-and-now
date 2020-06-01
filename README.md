# Hair & Now
A web browser appointment scheduling app for salons, hairdressers and barbers. MERN based. 

## Next steps

- Improve usability with feedback for failed attempts at filling out forms
- Create route for rating salons as a client, and associated form
- Implement geolocation system
- Implement search system
- Implement comment system

## API endpoints

### Authorization/Authentication
| **Method** | **Route**                 | **Description**                                                    |
|------------|---------------------------|--------------------------------------------------------------------|
| POST       | /api/signup               | Adds a new User to the DB                                          |
| POST       | /api/login                | Logs an user in, if username and password match the ones on the DB |
| POST       | /api/logout               | Logs an user out                                                   |
| GET        | /api/confirm/:confirmCode | Validates a registered account                                     |
| GET        | /api/isloggedin           | Checks whether there is a logged in user                           |
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
| GET        | /api/getuserappts/:id         | Returns all appointments associated to a certain user   |
| GET        | /api/getappt/:id              | Returns a specific appointment                          |
| POST       | /api/postnewappt/:salonId     | Creates a new appointment                               |
| POST       | /api/editappt/:id             | Updates an existing appointment                         |
| POST       | /api/deleteappt/:id           | Deletes an existing appointment                         |
### Comments
| **Method** | **Route**                      | **Description**                                               |
|------------|--------------------------------|---------------------------------------------------------------|
| GET        | /api/getcomments/:id           | Returns all comments posted to a certain post or salon        |
| POST       | /api/postnewcomment/:id        | Creates a new comment, associated to a specific post or salon |
| POST       | /api/deletecomment/:commentId  | Deletes an existing comment                                   |
### Posts
| **Method** | **Route**                      | **Description**                                       |
|------------|--------------------------------|-------------------------------------------------------|
| GET        | /api/getsalonposts/:salonId    | Returns all posts associated to a salon               |
| GET        | /api/getpost/:id               | Returns a specific post                               |
| POST       | /api/postnewpost/:salonId      | Creates a new post, associated to a specific salon    |
| POST       | /api/editpost/:id              | Updates an existing post                              |
| POST       | /api/deletepost/:postId        | Deletes an existing post                              |
### Services
| **Method** | **Route**             | **Description**                                                   |
|------------|-----------------------|-------------------------------------------------------------------|
| GET        | /getservices          | Retrieves all listed services (used in creation of service packs) |
### Packs
| **Method** | **Route**             | **Description**                                     |
|------------|-----------------------|-----------------------------------------------------|
| GET        | /getpacks/:salonId    | Retrieves all service packs from a salon            |
| GET        | /getpack/:id          | Retrieves a pack by ID                              |
| POST       | /postnewpack/:salonId | Creates a service pack and associates it to a salon |
| POST       | /editpack/:id         | Retrieves a pack by ID and edits it                 |
| POST       | /deletepack/:id       | Deletes a specified pack                            |

## Client routes
| **Route**   | **Description**                                                                                    |
|-------------|----------------------------------------------------------------------------------------------------|
| /salons     | Map with closest salons + search form                                                              |
| /salons/:id | Detail view of a specific salon. Includes ratings module, comments and appointment scheduling form |
| /signup     | User creation form                                                                                 |
| /login      | Login form                                                                                         |
| /dashboard  | Access to dashboard: appointment validation, salon detail edition (for professional accounts), etc.|