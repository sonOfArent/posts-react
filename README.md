# Purpose

This little project was a fun one for me, and demonstrated my knowledge of external data fetching, as well as integrating it into a web app in a pleasingly uneven manner.


### Details

This project contains three flex columns within a flex container in the middle of the screen.

- First, in a react UseEffect hook, the site pulls the data from https://jsonplaceholder.typicode.com/posts, then converts it into JSON.
- The new JSON data is looped over and sifted into three separate column arrays.
- The column arrays are dispatched by payload to the UseReducer hook, where the global column arrays are updated accordingly.
- The three columns themselves are mapped over, creating Post components from the data given. The reason I have the three columns is for the uneven look.

### Conclusion

While the project itself could be upgraded and given further improvements, I can safely say that I utlized much of my current knowledge in this project, and have shown that I have many useful skills.
