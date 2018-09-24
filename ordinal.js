"use strict";

//Array to hold on to ordinals
const ordinalsArray = ["th", "st", "nd", "rd"];

// Function will check if number is valid and return false if not.
const validateNumber = (num) => {
    return !isNaN(parseFloat( num )) && isFinite( num );
};

const ordinal = {

    ordinalSuffix (num) {
        //Get reminder of number by hundred so that we can counter number between 11-19
        let offset = num % 100;
      
        // Calculate position of ordinal to be used. Logic : Array index is calculated based on defined values.
        let ordinalPos = ordinalsArray[ ( offset-20 )%10 ] || ordinalsArray[ offset ] || ordinalsArray[0];
    
        //Return suffix
        return ordinalPos;
    },

    toOrdinal (num) {

        //Check if number is valid
        if( !validateNumber(num) ) {
            return `${num} is not a valid number`;
        }

        //If number is zero no need to spend time on calculation
        if(num === 0) {
            return num.toString();
        }
        
        return num.toString() + this.ordinalSuffix(num);
    }
};

module.exports = ordinal;