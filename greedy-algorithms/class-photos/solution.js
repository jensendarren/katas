// O(nlog(n)) Time | O(1) Space - where n is the number of students

function classPhotos(redShirtHeights, blueShirtHeights) {
    // Sort both arrays by height in decending order
    redShirtHeights.sort((a,b) => b - a)
    blueShirtHeights.sort((a,b) => b - a)

    // Determine the color of the shirt that goes in the front row by comparing the tallest student in both sets
    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

    // Loop through both arrays by using the index of one of the arrays
    for (let idx = 0; idx < redShirtHeights.length; idx++) {
        // Get the hight of the red / blue student from each array
        const redShirtHeight = redShirtHeights[idx];
        const blueShirtHeight = blueShirtHeights[idx];

        // When the red shirst are in the front row
        if(shirtColorInFirstRow === 'RED') {
            // then if the current red shirt is same hight or taller than the blue shirt
            // student then the photo will be impossible to take
            if(redShirtHeight >= blueShirtHeight) return false;
            // similiary when blue is in the front row then its the opposite comarrison
        } else if(blueShirtHeight >= redShirtHeight) return false;
    }

    return true;
}

module.exports = classPhotos