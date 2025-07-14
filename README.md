In create react app you have to use tailwind css v3 cause v4 is not wiking in this it will work in vite not in webpack.
 # Netflix GPT 
 -create React App
 - configured tailwind css in our app.
 -Header
 -routing of App
 -Login form
 -Sign Up form
 -Form Validation
 -useRef Hook:✅ Use useRef when you want to store data or access DOM without triggering a re-render.best to used in these condition like  DOM access, timers, scroll position, previous values
 -firebase Setup 
 -Deploying app to production
 -Create signup user Account
 -Implement Sign In user API
 -Created Redux Store with userSlice
 -Implemented Sign out
 -Update Profile
 -BugFix:signup user displayname and profile picture.
 -Bugfix:if the user is not logged in redirect/browse to login page and vice-versa
 -Unsubscibed to the onAuthStateChange callback.
 - Add hardcoded values to constants
 - Register TMDB API & create an app & get an access token.
 - Get data from TMDB now Playing movies list API
 - custom hooks for now playing movies.
 - Created movieSlice
 - Update Store with movies Data
 - planning for main and secondary container
 - Fetch Data for Trailer Video 
 - Update Store with Trailer Video Data
 - Embedded the YouTube Video and Make it autoplay.
 - Added tailwind classes to make main container look good.
 - Build Secondary Component
 - Build Movie List
 - Build Movie Card
 - TMDB image CDN URL
 - Made the Browser page Amazing with Tailwind CSS
 - usePopularMovies Custom Hooks

 # feature
 - Login/Sign Up 
  -Sign In/Sign up form 
  - redirect to Browse page
 -Browse(after authentication)
  -Header
  -Main Movie
    -Trailer in Background
    -Title & description.
    - Movie suggestion
       -Movie list + N
-NetFlixGPT
 -Search bar 
 - according to this it will give you suggestions

 if we want to make form in our website formik is good library..to use

 # Authentication 
 for this we need firebase backend
 # Navigation 
 navigate works only in children of app .
 # TMDB API 
 -go to tmdb website 
 -login there 
 -go to api key section find API key there
 -register the app there online

 # why everything happens two times we see in console.
 -this is because strict mode ..if we remove this from our code it will show us once.
 it will happen in our local when we were developing the app.
 this strict mode checks the if there is any inconsistency happen there.
 # Modular coding 
 Breaking the code into small modules.
 # useSelector 
 it is used to fetch data..in our web app.

