Social network created with create-react-app.

Portfolio.

This project was bootstrapped with create-react-app.
Used libraries and modules:

    - React -> User Interface building
    - Redux -> Bisness Logic Layer, business state managing
    - Axios -> Data Acsess Layer, server interactions
    - react-redux -> to simplify acsess to redux store using context API
    - redux-thunk -> to provide basic Redux side-effect logic, including complex synchronous logic that requires storage access, and simple asynchronous logic such as AJAX requests
    - redux-form -> form creation and management
    - react-router-dom -> Single Page Application approach implementation, to switch between components without reloading the html document
    - gh-pages -> project deploy on gitHub pages
    - react-onclickoutside -> block outside click management
    - redux-devtools-extension -> debugging application's state changes

Implemented functionality:

    -> ServerAPI:
        - all user data is stored on the remote server ttps://social-network.samuraijs.com/api/1.0
        - all data changes are consistent with the data on the remote server
        - server requests buttons disabling on data loading
        - data loading indicators
    -> pages switching
    -> active page detecting
    -> users authorization with input field validation and errors handling
    -> log out
    -> profile editing with fields validation:
        - profile image uploading
        - status updating
        - name updating
        - about me updating
        - looking for a vacansy updating
        - contacts updating
    -> profile updating errors handling
    -> users list rendering
    -> users list pagginator:
        - show/hide pagginator
        - current page detecting
        - switch to first/last/previous/next/specified page
        - add next users bundle to page
    -> follow/unfollow user
    -> switch to user's profile
        
        