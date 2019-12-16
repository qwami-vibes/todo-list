//Coding Challenge #1
/*
let mikeTeam, johnTeam, maryTeam, johnAvg, mikeAvg, maryAvg;

johnTeam = [89, 102, 103];
mikeTeam = [116, 94, 123];
maryTeam = [97, 134, 105];

// Loop for Johns Team
for(i = 0; i < johnTeam.length; i++) {
    johnTeam[i];
};

// Loop for Mikes Team
for(i = 0; i < mikeTeam.length; i++) {
    mikeTeam[i];
};

// Loop for Mary Team
for(i = 0; i < maryTeam.length; i++) {
    maryTeam[i];
};

johnAvg = Math.round((johnTeam[0] + johnTeam[1] + johnTeam[2] ) / johnTeam.length++);
mikeAvg = Math.round((mikeTeam[0] + mikeTeam[1] + mikeTeam[2] ) / mikeTeam.length++);
maryAvg = Math.round((maryTeam[0] + maryTeam[1] + maryTeam[2] ) / maryTeam.length++);

// PrintIng of Team averages
console.log(johnAvg, mikeAvg, maryAvg);

//Printing the highest average
if(johnAvg > mikeAvg) {
    console.log(`John's team had the highest average with ${johnAvg} whiles Mike's team had an average of ${mikeAvg} and an average difference ${johnAvg - mikeAvg}.`);
}else if(johnAvg < mikeAvg) {
    console.log(`Mike's team had the highest average with ${mikeAvg} whiles John's team had an average of ${johnAvg} and an average difference ${mikeAvg - johnAvg}.`);
} else {
    console.log(`Mike's and John's team drew with average ${mikeAvg} and ${johnAvg} respectively and an average difference ${mikeAvg - johnAvg}.`);
};

// Second part of the decision
if(johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log(`John's team had the highest average of ${johnAvg}`)
} if(mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log(`Mike's team had the highest average of ${mikeAvg}`)
} if(maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log(`Mary's team had the highest average of ${maryAvg}`)
} else {
    console.log(`All the three teams had the same average of ${johnAvg, mikeAvg, maryAvg}`)
};

*/

// Coding Challenge #2
/*
let bills, tips, totalBill;

bills = [124, 48, 268];

tips = [];

totalBill = [];
//Function for the bill calculator

let calTip = bill => {
    for(i = 0; i < bill.length; i++) {
        if(bill[i] <= 50) {
            tips[i] = Math.round((bill[i] * .2));
            totalBill[i] = tips[i] + bill[i];
        } else if( 50 < bill[i] < 200) {
            tips[i] = Math.round((bill[i] * .15));
            totalBill[i] = tips[i] + bill[i];
        } else if( bill[i] >= 200) {
            tips[i] = Math.round((bill[i] * .1));
            totalBill[i] = tips[i] + bill[i];
        }
    };
};

calTip(bills);

console.log(bills);
console.log(tips);
console.log(totalBill);

*/

// Coding Challenge #3
/*
// John properties
let john = {
    name: prompt('Player 1 | What is your name?'),
    mass: prompt('Player 1 | What is your mass in kg?'),
    height: prompt('Player 1 | What is your height in meters?'),
    calBmi : function() {
        this.bmi = this.mass / this.height**2;
        this.bmi = Math.round((this.bmi + 0.00001) * 100) / 100;
    }
}

// Mike properties
let mike = {
    name: prompt('Player 2 | What is your name?'),
    mass: prompt('Player 2 | What is your mass in kg?'),
    height: prompt('Player 2 | What is your height in meters?'),
    calBmi : function() {
        this.bmi = this.mass / this.height**2;
        this.bmi = Math.round((this.bmi + 0.00001) * 100) / 100;
    }
}

john.calBmi();
mike.calBmi();

//Decision for highest BMI
if(john.bmi > mike.bmi) {
    console.log(`${john.name} had the highest BMI of ${john.bmi}`);
}else if(mike.bmi > john.bmi) {
    console.log(`${mike.name} had the highest BMI of ${mike.bmi}`);
} else if(john.bmi === mike.bmi) {
    console.log(`${mike.name} and ${john.name} had the same BMI of ${john.bmi, mike.bmi}`);
};
*/
/*
// Coding challenge #3
//John's family object with the tip method
let john = {
    name: 'John',
    bill: [124, 48, 268, 180, 42],
    tip: [],
    total: [],
    calTip: function() {
        for(i = 0; i < this.bill.length; i++) {
            if(this.bill[i] < 50) {
                this.tip[i] = Math.round(((this.bill[i] * .2) + 0.00001) * 100) / 100;
                this.total[i] = this.bill[i] + this.tip[i];
            }else if(50 <= this.bill[i] <= 200) {
                this.tip[i] = Math.round(((this.bill[i] * .15) + 0.00001) * 100) / 100;
                this.total[i] = this.bill[i] + this.tip[i];
            }else if(this.bill[i] > 200) {
                this.tip[i] = Math.round(((this.bill[i] * .1) + 0.00001) * 100) / 100;
                this.total[i] = this.bill[i] + this.tip[i];
            }
        }
    }
};

//Mary's family object with the tip method
let mary = {
    name:'Mary',
    bill: [77, 375, 110, 45],
    tip: [],
    total: [],
    calTip: function() {
        for(i = 0; i < this.bill.length; i++) {
            if(this.bill[i] < 100) {
                this.tip[i] = Math.round(((this.bill[i] * .2) + 0.00001) * 100) / 100;
                this.total[i] = this.bill[i] + this.tip[i];
            }else if(100 <= this.bill[i] <= 300) {
                this.tip[i] = Math.round(((this.bill[i] * .1) + 0.00001) * 100) / 100;
                this.total[i] = this.bill[i] + this.tip[i];
            }else if(this.bill[i] > 300) {
                this.tip[i] = Math.round(((this.bill[i] * .25) + 0.00001) * 100) / 100;
                this.total[i] = this.bill[i] + this.tip[i];
            }
        }
    }
};

//Function to calculate the average tip 
let avgTip = tip => {
    for(i = 0; i < tip.length; i++) {
        if(tip.length === 5) {
            return (tip[0] + tip[1] + tip[2] + tip[3] + tip[4]) / tip.length;
        }else if(tip.length === 4) {
            return (tip[0] + tip[1] + tip[2] + tip[3]) / tip.length;
        }
    }
};

//Function to calculate the average total bill [bill + tip]
let avgCal = (total) => {
    for(i = 0; i < total.length; i++) {
        if(total.length === 5) {
            return (total[0] + total[1] + total[2] + total[3] + total[4]) / total.length;
        }else if(total.length === 4) {
            return (total[0] + total[1] + total[2] + total[3]) / total.length;
        }
    }  
    
};

//Call the method to calculate the tip
john.calTip(), mary.calTip();

//Declaring the variable for the tip averages into the object
john.avgTip = avgCal(john.tip);
mary.avgTip= avgCal(mary.tip);

//Declaring the variable for the total averages into the object
john.avgTotal = avgCal(john.total);
mary.avgTotal = avgCal(mary.total);

//outputing the results to the console
console.log(john, mary);

//Decision on which family had the highest tip to pay
if(john.avgTip > mary.avgTip ) {
    console.log(`${john.name}'s family had the highest tip average of ${john.avgTip} to pay!!`);
}else if(john.avgTip < mary.avgTip) {
    console.log(`${mary.name}'s family had the highest tip average of ${mary.avgTip} to pay!!`);
};

//Decision on which family had the highest total to pay
if(john.avgTotal > mary.avgTotal) {
    console.log(`${john.name}'s family had the highest total average of ${john.avgTotal} to pay!!`);
}else if(john.avgTotal < mary.avgTotal) {
    console.log(`${mary.name}'s family had the highest total average of ${mary.avgTotal} to pay!!`);
};
*/