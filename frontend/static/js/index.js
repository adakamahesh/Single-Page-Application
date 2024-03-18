const router= async()=>{
    const router=[
        {path:"/",viwe:()=>console.log("viewing Dashboard")},
        {path:"/posts",viwe:()=>console.log("viewing posts")},
        {path:"/settings",viwe:()=>console.log("viewing settings")}
    ];
    //test each route for potential match
    const potentialMatches=router.map(route=>{
        return{
            route:route,
            isMatch:location.pathname===route.path
        };
    });

    let match=potentialMatches.find(potentialMatch=>potentialMatch.isMatch)

    console.log(potentialMatches);
};
document.addEventListener("DOMContentLoaded",()=>{
    router();
});