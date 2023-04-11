let clouds = []

function jumpingOnClouds(c) {

    var current;
    var next;
    var jumps = 0;
    let potentialNext;
  
    let i = 0;
  
    while(i < c.length){                          //Use a while loop, since it gives more control on adding a dynamic value to a variable. 
      current = c[i];
      if(i+2 < c.length && c[i+2] == 0){          //check if 2 clouds ahead from current index is jumpable or not 
        i+=2;                                     //Set the current index to 2 places ahead
        jumps += 1;                               //Make one jump 
      } else if(i+1 < c.length && c[i+1] == 0){   //Else Check if next cloud is jumpable or not 
        i+=1;                                     //set current index to index of next cloud
        jumps += 1;                               //Again, make one jump
      } else i+= 1;                               //If none of above if conditions are satisfied, add 1 to index. 
    }
  
  
    return jumps;
  
  }

  console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));