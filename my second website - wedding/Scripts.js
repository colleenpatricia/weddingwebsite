var guestList = [];

function Guest(firstName, lastName, dietary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dietary = dietary;
    this.greeting = function() {
        if (this.dietary === "veggie") {
        alert("Hey there " + this.firstName + "! Thanks for RSVPing to our wedding! We can't wait to see you there. And we'll make sure there's some " + this.dietary + " options for you, don't worry. See you then!");
    } else {
        alert("Hey there " + this.firstName + "! Thanks for RSVPing to our wedding! We can't wait to see you there.");
    }
};
}

guestList.push(new Guest("Emma", "Henly", "veggie"));
guestList.push(new Guest("Gerard", "Fannon", "meat"));
guestList.push(new Guest("Cheryl", "Graham", "veggie"));

for (var index = 0; index < guestList.length; index++) {
    var guest = guestList[index];
    console.log(guest.greeting());
}

/*####NAV BAR SCRIPTS####*/

function dropdownMenu() {
    var document.getElementById("dropdownclick");
    if(x.className === "topnav") {
        x.className += " responsive";
        /*Change topnav to topnav responsive*/    
    } else {
        x.className = "topnav";
    }
}

/*####WHERE SCRIPTS####*/

function showTravel() {
    var x = document.getElementById("gettingthereclick");
    if(x.className === "hidetravel") {
        x.className += " appear";
        /*Change gettingthere to gettingthere responsive*/    
    } else {
        x.className = "hidetravel";
    }
}
    
    
function showToDo() {
    var x = document.getElementById("todoclick");
    if(x.className === "hidetodo") {
           x.className += " appear";
           /*Change gettingthere to gettingthere responsive*/    
    } else {
           x.className = "hidetodo";
    }
}