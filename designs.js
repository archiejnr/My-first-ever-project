// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function () {
	
//code goes here
const gridHeight=$('#input_height');//tested and working
const gridWidth=$('#input_width');//tested and working
const generateGrid=$('.submitButton');//tested and working
const refreshGrid=$('.refreshButton');
const box=$('#pixel_canvas');//tested and working
const row='<tr></tr>';//tested and working
const column='<td class="pixel"></td>';//tested and working
const colorPicker=$('#colorPicker');

//this function contains the nested loops that generates the grid
function makeGrid() {
	
	$('table').empty();
	var height=gridHeight.val();
	var width=gridWidth.val();
	//alert('height: '+height+' width: '+width);
	for (let x=1;x<=height;x++) 
	{
		box.append(row);
			for(let y=1;y<=width;y++)
				$('tr').last().append(column);
	}
	
	
}
//the click event that generates the grid
generateGrid.click(makeGrid);

//making the art
//box.on('click','td',Artist);

//placing the color on the color
box.on('click','td',function(){
	
 	let color=colorPicker.val();
	let test=$('td').css('backgroundColor');
	if (test===color) {
		$(this).css('background','white');
	}
	else $(this).css('background',color);
});

//removing the color
box.on('dblclick','td',function () {
	
	 $(this).css('background','white');
	 });
	 

});