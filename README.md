# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Following the single responsibility principle, the code was added to the Kids.js module. This also allowed us to update the for…of loop generating the HTML for each of the children in the database to include data tags within the list element such as the child id and the data-type of “child” that are used to interact with the event listener code. 
   
   When a user interacts anywhere on the page through a mouse click, the event listener is triggered. In the case of the event listener on the Kids.js module, the event listener once triggered is comparing the data related to the event to see if it meets the dataset type of “child.” If the type does not equal child, no window will be returned. If the type does equal “child”,  the clicked Kid dataset of id (parsed integer) will be compared to each child of children array id. If the id’s match, a window alert is generated that contains the child’s name and wish message.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Within the Pairings(), the for…of loop is iterating through the array of kids to find each child’s matching celebrity individually. The findCelebrityMatch() must be invoked within the loop because it requires the specific kid as a parameter to run to determine their matching celebrity. If the function was placed outside of the loop, there would be no dynamic matching.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Similarly to the Kids.js module event listener, in the CelebrityList.js module, the list tag elements added within the for…of loop to the html variable were modified to include the data tags of data-type “celebrity” and the the celebrity id that are used by the event listener code. 
   
   As with the Kids.js event listener, the CelebrityList.js event listener was also waiting for user interaction through the form of a mouse click that would trigger the event listener. In the case of the CelebrityList.js event listener, once triggered it compared the data related to the event to see if it met the dataset type of “celebrity.” If it did not match, no window alert occurred, however if it did match, a for…of loop was executed to iterate through the celebrities array. This allowed us to access all the relevant properties related to the celebrity object such as name and sport. After comparing the celebrity clicked id (parsed integer) to the celebrity id, we were able to return a window alert that contained the celebrity name and sport. 

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > On the main module, the following functions listed below are responsible for creating specific portions of the applicationHTML content dynamically:  	-Pairings from Pairings.js
	-Celebrities from CelebrityList.js
	-Kids from Kids.js
   
   After importing the functions into the module, a variable called mainContainer is created, selecting the HTML element with the id of container. This element is essentially where we want our final applicationHTML to be located.
   
   The applicationHTML is initialized to build the overall HTML structure  and includes the relevant html opening and closing tags as well as the return values for the Kids(), Celebrities(), and Pairings() functions, dynamically generating the relevant lists for kids, celebrities, and pairings. 
   
   The last task of the module is to push the applicationHTML variable as innerHTML  for the mainContainer variable which places the content within the container element in index.html.
