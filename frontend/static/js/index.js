//this is used importing Dashboard view from "./views/Dashboard.js"
import Dashboard from "./views/Dashboard.js";
//this is used importing posts view from "./views/posts.js"
import posts from "./views/posts.js";
//this is used importing settings view from "./views/settings.js"
import settings from "./views/settings.js";

//this is Function to navigate to a specified URL
const navigateTo=url=>{
    //this is Pushing a new state to the history
    history.pushState(null,null,url);
    // Calling the router function
    router();
};

//this is Asynchronous router function
const router= async()=>{
    // Array of route objects
    const router=[
        {path:"/",view: Dashboard },
        {path:"/posts",view: posts},
        {path:"/settings",view:settings}
    ];
    //test each route for potential match
    const potentialMatches=router.map(route=>{
        return{
            route:route,
            isMatch:location.pathname===route.path
        };
    });

    // Finding the matched route
    let match=potentialMatches.find(potentialMatch=>potentialMatch.isMatch)

    // If no match is found, use the first route as default
    if(!match){
        match={
            route:router[0],
            isMatch:true
        };
    };

    // Creating a new instance of the matched view
    const view=new match.route.view();
    // Setting the inner HTML of the element with id "app" to the HTML content of the matched view
    document.querySelector("#app").innerHTML=await view.getHtml();

};

// Event listener for popstate event
window.addEventListener("popstate",router);
// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded",()=>{
    // Event listener for click events on elements with attribute "data-link"
    document.body.addEventListener('click',e =>{
        // Preventing the default action of the event
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            // Navigating to the href of the clicked element
            navigateTo(e.target.href);
        }
    })

    // Calling the router function
    router();
});