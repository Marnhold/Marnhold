




function GetInstructions() {
    







    if(positionOn) {



        switch(numberCreateDivs) {
            
                x = Math.random();
                if(x > 0.66) {

                    document.getElementById("textDiv1").style.cssFloat = "left";
                    document.getElementById("textDiv1").style.width = restAsideWidth / 2 + "%";
    
                    document.getElementById("textDiv2").style.cssFloat = "left";
                    document.getElementById("textDiv2").style.width = restAsideWidth / 2 + "%";

                    document.getElementById("textDiv3").style.cssFloat = "left";
                    document.getElementById("textDiv3").style.width = restAsideWidth / 2 + "%";
                    
                    document.getElementById("textDiv4").style.cssFloat = "left";
                    document.getElementById("textDiv4").style.width = restAsideWidth / 2 + "%"; 

                }else if(x > 0.33) {

                    document.getElementById("textDiv1").style.cssFloat = "left";
                    document.getElementById("textDiv1").style.width = restAsideWidth / 3 + "%";

                    document.getElementById("textDiv2").style.cssFloat = "left";
                    document.getElementById("textDiv2").style.width = restAsideWidth / 3 + "%";

                    document.getElementById("textDiv3").style.cssFloat = "left";
                    document.getElementById("textDiv3").style.width = restAsideWidth / 3 + "%";

                    document.getElementById("textDiv4").style.cssFloat = "left";
                    document.getElementById("textDiv4").style.width = restAsideWidth + "%"; 

                }else{

                    document.getElementById("textDiv1").style.cssFloat = "left";
                    document.getElementById("textDiv1").style.width = restAsideWidth + "%";

                    document.getElementById("textDiv2").style.cssFloat = "left";
                    document.getElementById("textDiv2").style.width = restAsideWidth / 2 + "%";

                    document.getElementById("textDiv3").style.cssFloat = "left";
                    document.getElementById("textDiv3").style.width = restAsideWidth / 2 + "%";

                    document.getElementById("textDiv4").style.cssFloat = "left";
                    document.getElementById("textDiv4").style.width = restAsideWidth + "%"; 
            

                break;
        }
        

        
    }




    //creating table
    if (tableValue > 0){
        generateTable(tableValue);

        //cellcontents
        cellContentNumber = randomNumberIn(Math.ceil(cellsArray.length / 2), cellsArray.length);
        var randomCellsArray = new Array(cellContentNumber);
        randomCellsArray = getRandomNArray(cellsArray, cellContentNumber);

        for (i=0; i<randomCellsArray.length; i++){

            defineCellContents(randomCellsArray[i]);
        }

    
    }  
    //end of table
    //background
    if(backgroundOn)
        backImageChangeArray.push(document.getElementById("divHeader"));
    if(multipleOn) {
        if(imagesCount < Math.random() * 5){
            for(i=0; i<3; i++) {

                imagesCount++;
                newImage = document.createElement("img");
                newImage.id = "imageCell" + imagesCount;
                newImage.className= "cellImages";
                
                newImage.float= "left";
                y = randomNumberIn(1, 30);
                newImage.src = randomImage(y);


                boxChangeArray.push(newImage);
                borderChangeArray.push(newImage);
                shadowChangeArray.push(newImage);
                document.getElementById("divSection").apend(newImage);
            }

        }
    }else if(mediaOn) {
        imagesCount++;
        newImage = document.createElement("img");
        newImage.id = "imageCell" + imagesCount;
        newImage.className= "cellImages";
        
        y = randomNumberIn(1, 30);
        newImage.src= randomImage(y);
        boxChangeArray.push(newImage);
        borderChangeArray.push(newImage);
        shadowChangeArray.push(newImage);
        document.getElementById("divSection").prepend(newImage);

    }
    if(navigationValue > 0) {
        if(linkCount < Math.random() * 5) {

            target = document.getElementById("divSection");
            if (asideCreated == true)
                target = document.getElementById("createdAside");
            
                element = document.createElement("ul");
                target.append(element);
                target = element;

            switch(navigationValue) {
                default:

                    for (i = 0; i < 5; i++) {
                        element = document.createElement("li");
                        target.append(element);
                        target2 = element;

                        element = document.createElement("a");

                        z = randomNumberIn(1,102);
                        element.href = randomLink(z);

                        element.innerHTML = element.href;
                        target2.append(element);
                    }

                    break;
                case "2":

                    for (i = 0; i < 5; i++){
                        element = document.createElement("li");
                        target.append(element);
                        target2 = element;


                        element = document.createElement("a");

                        z = randomNumberIn(1,102);
                        element.href = randomLink(z);
                        element.innerHTML = randomLinkName(z);

                        target2.append(element);
                    }

                    break;
                case "3":
                for (i = 0; i < 5; i++){

                    element = document.createElement("li");
                    linkInterativeChangeStyle.push(element);
                    target.append(element);
                    target2 = element;


                    element = document.createElement("a");
                    element.target = "_blank";
                    linkChangeStyle.push(element);

                    z = randomNumberIn(1,102);
                    element.href = randomLink(z);
                    element.innerHTML = randomLinkName(z);

                    target2.append(element);
                    
                 }

                    break;
            }
            

        }
    }   


    //apply Styles
    /*

    linkChangeStyle = [];
    linkInterativeChangeStyle = [];
    */

    
    backImageChangeArray.forEach(each => {

        n = randomNumberIn(1,30);
        each.style.backgroundImage = "url(" + randomImage(n) + ")";
        each.innerHTML = ""
    });

    styleChangeArray.forEach(each => {
        
       giveRandomStyle(each);

    });

     
    borderChangeArray.forEach(each => {
        
        each.style.border = randomBorder();
 
    });

    boxChangeArray.forEach(each => {
        
        each.style.boxRadius = randomBox();
 
    });

    shadowChangeArray.forEach(each => {
        
        each.style.boxShadow = randomShadow();
 
    });

    
}