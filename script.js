//your JS code here. If required.

	let list= document.getElementById("colorSelect");
	let removeBtn= document.getElementsByTagName("input")[0];
	removeBtn.addEventListener("click", function(){
		let opt=list.options[list.selectedIndex];
		list.removeChild(opt);
	});

// const colorSelect = document.getElementById("colorSelect");
//     const removeColorButton = document.getElementById("removeColorButton");

//     // Add a click event listener to the remove color button
//     removeColorButton.addEventListener("click", function() {
//       // Get the selected color option
//       const selectedOption = colorSelect.options[colorSelect.selectedIndex];

//       // Remove the selected color option
//       colorSelect.removeChild(selectedOption);
//     });