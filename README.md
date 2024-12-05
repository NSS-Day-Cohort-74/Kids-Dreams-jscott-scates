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
   > Your answer here
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Your answer here
