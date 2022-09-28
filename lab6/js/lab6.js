//PUT YOUR FUNCTIONS UP HERE
function addToWebPage(text)
{
	document.querySelector('#content').innerHTML += text + '<br /><br />'
}


//YOU CAN ADD MORE FUNCTIONS HERE

//END FUNCTIONS SECTION

function formatAndSortNames() {

	let arrayOfNames, splitNames, firstName, lastName, fixedName,
		finalName, combinedString, newArray, combinedFixedString;

	arrayOfNames = ["Kizzmekia Corbett", "Ada Lovelace", "Levar Burton" ];

	//Reminder: Google what "javscript pop" does if you do not remember!
	finalName = arrayOfNames.pop();
	//Reminder: Google what "join" does!
	combinedString = arrayOfNames.join('; ');
	combinedString = combinedString + ' and ' + finalName;

	addToWebPage('Before, the names were: ' + combinedString);


	newArray = [];

	//Remember to Google what "split" does

	//nameSplit takes the code from the original but make the "arrayOfNames" 
	//into a parameter since that was the only thing that needed to me changed
	
    function nameSplit(arrayOfNames) {
        splitNames = arrayOfNames.split(' ');
        firstName = splitNames[0];
        lastName = splitNames[1];
        fixedName = lastName + ', ' + firstName;
        newArray.push(fixedName);
    }

    nameSplit(arrayOfNames[0]);
    nameSplit(arrayOfNames[1]);
    nameSplit(finalName);
    
//-----------------------------------------------------//

	// splitNames = arrayOfNames[0].split(' ');
	// firstName = splitNames[0];
	// lastName = splitNames[1];
	// fixedName = lastName + ', ' + firstName;
	// newArray.push(fixedName);

	// splitNames = arrayOfNames[1].split(' ');
	// firstName = splitNames[0];
	// lastName = splitNames[1];
	// fixedName = lastName + ', ' + firstName;
	// newArray.push(fixedName);

	// splitNames = finalName.split(' ');
	// firstName = splitNames[0];
	// lastName = splitNames[1];
	// fixedName = lastName + ', ' + firstName;
	// newArray.push(fixedName);

	newArray.sort();
	finalFixedName = newArray.pop();
	//Reminder: Google what "join" does!
	combinedFixedString = newArray.join('; ');
	combinedFixedString = combinedFixedString + ' and ' + finalFixedName;

	addToWebPage('Afterwards, the names are: ' + combinedFixedString);

}





