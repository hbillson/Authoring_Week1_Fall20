// import your packages here
import Team from "./modules/DataModule.js";
// import NavSystem from "./modules/TheNavSystem.js";

(() => {
    // stub * just a place for non-component-specific stuff
    
    let userSection = document.querySelector(".users-section"),
        userTemplate = document.querySelector("#profs-template").content;

    debugger;

    // select our user elements and load the content

    function handleDataSet(data) {
        for (let user in Team) {
            let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector('.user').children;
            
            currentUserText[1].textContent = Team[user].name;
            currentUserText[2].textContent = Team[user].role;
            currentUserText[3].textContent = Team[user].nickname;

            userSection.appendChild(currentUser);
        }


     
    }

    handleDataSet();

})();