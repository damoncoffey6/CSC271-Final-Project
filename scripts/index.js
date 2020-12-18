const fish = [{
    name: "shark",
    picture: "../pictures/shark.jpg",
    info: "<h2> shark </h2> <p> This is a shark </p>"
},
{
    name: "mandarin-fish",
    picture: "../pictures/mandarinfish.jpg",
    info: "<h2> mandarin fish </h2> <p> This is a mandarin fish </p>" 
}]

function button(event)
{ 
    /*
    iterating through each fish in the array and passing the animal card that is clicked on
    */
    var animal = event.target.id
    var obj;
    fish.forEach(element => {
        if (animal == element.name){
            obj=element

        }
        
    });
    var displayInfo = document.querySelector(".display-info")
    displayInfo.innerHTML=obj.info
    var displayPicture = document.querySelector("#display-picture")
    displayPicture.src= obj.picture
} 



