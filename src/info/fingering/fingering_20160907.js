// Fingering Chart
//
// Author: Phil Burk
// (C) 2009 Mobileer Inc

var g_NoteNames = [ 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B' ];
var g_DegreeNames = [ '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7' ];


// Generate a typical triad with notes two degrees apart.
function generateTriad( root )
{
	var chord = [];
	chord.push( root );
	var degree = ((root + 1) % 7) + 1;
	chord.push( degree );
	degree = ((degree + 1) % 7) + 1;
	chord.push( degree );
	return chord;
}

// Generate an array with values assigned to the notes in a scale.
// For example if input is:
//   [ 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ]
// Then the output is:
//   [ 1, 0, 2, 0, 3, 4, 0, 5, 0, 6, 0, 7]
function calculateScaleDegrees( notesInScale )
{
	var degrees = [];
	var degree = 1;
	for( var i=0; i<notesInScale.length; i++ )
	{
		if( notesInScale[i] > 0 )
		{
			degrees[i] = degree;
			degree += 1;
		}
	}
	return degrees;
}

// Generate an array with values assigned to the notes in a chord
// that are part of a scale.
// For example if notesInScale is:
//   [ 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ]
// And chord is:
//   [ 2, 4, 6 ]
// Then the output is:
//   [ 0, 0, 2, 0, 0, 4, 0, 0, 0, 6, 0, 0]
// @param chord array containing degrees of scale that are in chord. eg. major is [1,3,5].
function calculateNotesInChord( notesInScale, chord )
{
	if( !chord )
	{
		return [];
	}
	
	var notesInChord = new Array();
	var degree = 1;
	var chordIndex = 0;
	for( var i=0; (i<notesInScale.length) && (chordIndex<chord.length); i++ )
	{
		if( notesInScale[i] == 0 )
		{
			notesInChord[i] = 0;
		}
		else
		{
			if( chord[chordIndex] == degree )
			{
				notesInChord[i] = 1;
				chordIndex += 1;
			}
			degree += 1;
		}
	}
	return notesInChord;
}

function getIndexOf( myArray, value )
{
	var result = -1;
	for( var i=0; i<myArray.length; i++ )
	{
		if( myArray[i] === value )
		{
			return i;
		}
	}
	return result;
}

// ***************************************************************************************
// Define a "class" for a chart of fingering.
function FingeringChart( strings, key, root )
{
	this.strings = strings;
	this.key = key;
	this.root = root;
	this.chord = [];
	this.notesInScale = [ 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1 ];
	// Initialize chart.
	this.scaleDegrees = calculateScaleDegrees( this.notesInScale );
	
	
	this.calculateNoteInOctave = function( fret, string )
	{
		// Add 12 to fix lowest notes not showing up.
		return ((12 + this.strings[string] + fret - this.key)%12);
	}
	
	// Figure out whether this is a minor, major, diminished or augmented chord.
	this.getChordType = function()
	{
		if( this.chord.length == 3 )
		{
			// Convert to semitones.
			var offset0 = getIndexOf( this.scaleDegrees, this.chord[0] );
			var offset1 = getIndexOf( this.scaleDegrees, this.chord[1] );
			if( offset1 < offset0 )
			{
				offset1 += 12;
			}
			var offset2 = getIndexOf( this.scaleDegrees, this.chord[2] );
			if( offset2 < offset1 )
			{
				offset2 += 12;
			}
			// Convert to intervals.
			var interval0 = offset1 - offset0;
			var interval1 = offset2 - offset1;
			if( interval0 == 3 )
			{
				if( interval1 == 3 )
				{
					return 'dim';
				}
				else if( interval1 == 4 )
				{
					return 'min';
				}
			}
			else if( interval0 == 4 )
			{
				if( interval1 == 3 )
				{
					return '';
				}
				else if( interval1 == 4 )
				{
					return 'aug';
				}
			}
		}
		return '?';
	}
	
	
	this.getChordName = function()
	{
		if( this.chord.length == 0 )
		{
			return g_NoteNames[ this.key ] + ' scale';
		}
		else
		{
			var rootOffset = getIndexOf( this.scaleDegrees, this.root );
			if( rootOffset >= 0 )
			{
				var chordRootName = g_NoteNames[ (this.key + rootOffset) % 12 ];
				var chordType = this.getChordType();
				return chordRootName + chordType;
			}
			else
			{
				return "?";
			}
		}
	}
	
	this.renderFretCell = function( fretIndex )
	{
		var fretCell = document.createElement('td');
		var fretClass = 'fretIndex'
		if( (fretIndex==3) || (fretIndex==5) || (fretIndex==7) || (fretIndex==12) )
		{
			fretCell.innerHTML = +fretIndex;
			fretClass = fretClass + ' special';
		}
		else
		{
			fretCell.innerHTML = "&nbsp;";
		}
		fretCell.setAttribute( "class", fretClass );
		return fretCell;
	}
	
	this.renderNoteCell = function( noteInOctave, markAsSpecial, fretIndex )
	{
		var noteCell = document.createElement('td');
		noteCell.width=34;
		noteCell.height=44;
		var fretClass = markAsSpecial ? "special" : "";
		var openStringClass = (fretIndex == 0) ? " openString" : "";
		var cellClass;
		//noteCell.setAttribute("class","inScale");
		var noteScaleDegree = this.scaleDegrees[noteInOctave];
		if( noteScaleDegree )
		{
			// TODO make a switch between these modes.
			//noteCell.innerHTML = "" + g_NoteNames[(noteInOctave + this.key) % 12]; // show note names, C, D, E, etc,
			noteCell.innerHTML = "" + g_DegreeNames[noteInOctave];
			if( this.chord.length == 0 )
			{
				cellClass = 'inChord';
			}
			else
			{
				var index = getIndexOf( this.chord, noteScaleDegree );
				if( index >= 0 )
				{
					if( index == 0 )
					{
						cellClass = 'inChord root';
					}
					else if( (index > 2) )
					{
						cellClass = 'inChord extra';
					}
					else
					{
						cellClass = 'inChord';
					}
				}
				else if( this.notesInScale[noteInOctave] == 1)
				{
					cellClass = 'inScale';
				}
			}
		}
		else
		{
			noteCell.innerHTML = "&nbsp;";
			cellClass = "notInScale";
		}
		var finalClass = 'fret ' + cellClass + ' ' + fretClass + ' ' + openStringClass;
		noteCell.setAttribute( "class", finalClass );
		return noteCell;
	}

	this.updateNotes = function()
	{
		this.notesInChord = calculateNotesInChord( this.notesInScale, this.chord );
	}
	
	// Set Key for scale. 0 is C, 1 is C#, etc.
	this.setKey = function( key )
	{
		this.key = key;
		this.updateNotes();
	}
	
	this.setRoot = function( root )
	{
		this.root = root;
		this.updateNotes();
	}
	
	this.setChord = function()
	{
		this.chord = arguments;
		this.updateNotes();
	}
	
	this.setChordArray = function( chordArray )
	{
		this.chord = chordArray;
		this.notesInChord = calculateNotesInChord( this.notesInScale, this.chord );
	}
	
	this.setChordArray( generateTriad( root ) );
	
	// @return Element containing a row that shows a bar.
	this.createBar = function()
	{
		var rowElement = document.createElement('tr');
		var cellElement = document.createElement('td');
		cellElement.setAttribute("colSpan", this.strings.length );
		cellElement.setAttribute("class", "majorFret" );
		rowElement.setAttribute("class", "majorFret" );
		rowElement.appendChild( cellElement );
		return rowElement;
	}
	
	// @return Element containing a table showing one fingering.
	this.render = function()
	{
		var tableElement = document.createElement('table');
		tableElement.setAttribute("cellSpacing","0");
		tableElement.setAttribute('class','fretboard');
		for( var i=0; i<(12+5); i++ )
		{
			var rowElement = document.createElement('tr');
			
			var markAsSpecial = ( (i==5) || (i==7) || (i==12) );
			// Render fret numbers.
			var fretCell = this.renderFretCell( i );
			rowElement.appendChild( fretCell );
			// Render notes on a fret.
			for( var j=0; j<this.strings.length; j++ )
			{
				var noteInOctave = this.calculateNoteInOctave( i, j );
				var noteCell = this.renderNoteCell( noteInOctave, markAsSpecial, i );
				rowElement.appendChild( noteCell );
			}
			tableElement.appendChild( rowElement );
		}
		return tableElement;
	}
}

// ***************************************************************************************
function FingeringKeyPicker( keyPickerListener, key )
{
	this.keyPickerListener = keyPickerListener;
	this.key = key;
	
	this.createOption = function( value, text )
	{
		var optionElement = document.createElement('option');
		optionElement.setAttribute("value", "" + value);
		// Default to current value.
		if( value == this.key )
		{
			optionElement.setAttribute('selected', 'selected');
		}
		optionElement.innerHTML = text;
		return optionElement;
	}
		
	// @return Element containing a form for picking a note.
	this.render = function()
	{
		var selectElement = document.createElement('select');
		selectElement.id = "noteSelector";
		for( var i=0; i<g_NoteNames.length; i++ )
		{
			selectElement.appendChild( this.createOption( i, g_NoteNames[i] ) );
		}
		
		selectElement.onchange = function()
		{
			var noteIndex = this.options[this.selectedIndex];
			keyPickerListener.keySelected( +noteIndex.value );
		};
		return selectElement;
	}
}

// ***************************************************************************************
function FingeringChordPicker(fingeringChord, defaultChordIndex )
{	
	this.fingeringChord = fingeringChord;
	this.defaultChordIndex = defaultChordIndex;
	
	this.buildTable = function()
	{
		var ct = new Array();
		ct['I'] = [ 1, 3, 5 ];
		ct['II'] = [ 2, 4, 6 ];
		ct['III'] = [ 3, 5, 7 ];
		ct['IV'] = [ 4, 6, 1 ];
		ct['V'] = [ 5, 7, 2 ];
		ct['VI'] = [ 6, 1, 3 ];
		ct['VII'] = [ 7, 2, 4 ];
		ct['Isus2'] = [ 1, 2, 5 ];
		ct['Isus4'] = [ 1, 4, 5 ];
		ct['Imaj7'] = [ 1, 3, 5, 7 ];
		ct['V7'] = [ 5, 7, 2, 4 ];
		ct['Scale'] = [];
		return ct;
	}
	
	this.chordTable = this.buildTable();
	
	
	this.createOption = function( value )
	{
		var optionElement = document.createElement('option');
		optionElement.setAttribute("value", "" + value);
		optionElement.innerHTML = value;
		// So we can refer back to this object in the onchange callback.
		optionElement.picker = this;
		return optionElement;
	}
	
	
	// @return Element containing a form for picking a chord.
	this.render = function()
	{
		var selectElement = document.createElement('select');
		selectElement.id = "chordSelector";
		
		var index = 0;
		for( key in this.chordTable )
		{
			var optionElement = this.createOption( key );
			selectElement.appendChild( optionElement );
			if( index == this.defaultChordIndex )
			{
				optionElement.setAttribute( 'selected', 'selected' );
			}
			index += 1;
		}
		
		selectElement.onchange = function()
		{
			var chosenOption = this.options[this.selectedIndex];
			var chord = chosenOption.picker.chordTable[ chosenOption.value ];
			fingeringChord.setChord( chord );
		};
		this.selectElement = selectElement;
		return selectElement;
	}
}


// ***************************************************************************************
// Multiple components for one chord chart.
// key is 0 for C, 1 for C#, etc
// root is degree of chord, eg. 1,2,3,etc TODO use semitone
// chordIndex is index into the chord table
function FingeringChord( strings, key, root, chordIndex )
{
	this.root = root;
	this.key = key;
	this.chord = generateTriad( root );
	this.notePicker = new FingeringKeyPicker( this, key );
	this.picker = new FingeringChordPicker( this, chordIndex );
	this.chart = new FingeringChart( strings, key, root );
	
	this.keySelected = function( key )
	{
		this.key = key;
		this.updateChart();
	}
	
	this.setChordByRoot = function( root )
	{
		this.setChord( generateTriad( root ) );
	}
	
	this.setChord = function( chordArray )
	{
		this.chord = chordArray;
		this.root = chordArray[0];
		this.updateChart();
	}
	
	this.updateChart = function()
	{
		//alert("Picked chord " + root );
		this.chordHolder.removeChild( this.renderedChart );
		this.chart.setKey( this.key );
		this.chart.setRoot( this.root );
		this.chart.setChordArray( this.chord );
		this.renderedChart = this.chart.render();
		this.chordHolder.appendChild( this.renderedChart );
		// update name
		this.nameHolder.innerHTML = this.chart.getChordName();
	}
	
	// One cell in the chord chart header form.
	this.renderCell = function( label, content )
	{
		var rowElement = document.createElement('tr');
		var cellElement = document.createElement('td');
		rowElement.appendChild( cellElement );
		cellElement.appendChild( document.createTextNode(label) );
		cellElement.appendChild( content );
		return rowElement;
	}
	
	// @return Element containing a table showing one fingering.
	this.render = function()
	{
		var rowElement;
		var cellElement;
		
		var tableElement = document.createElement('table');
		
		var formElement = document.createElement('form');
		formElement.name = "pickChord";
		tableElement.appendChild( formElement );
				
		rowElement = this.renderCell( "Key: ", this.notePicker.render() );
		tableElement.appendChild( rowElement );
		
		rowElement = this.renderCell( "Chord: ", this.picker.render() );
		tableElement.appendChild( rowElement );
								 
		rowElement = document.createElement('tr');
		this.nameHolder = document.createElement('td');
		this.nameHolder.innerHTML = this.chart.getChordName();
		rowElement.appendChild( this.nameHolder );
		tableElement.appendChild( rowElement );
		
		rowElement = document.createElement('tr');
		this.chordHolder = document.createElement('td');
		this.renderedChart = this.chart.render();
		this.chordHolder.appendChild( this.renderedChart );
		rowElement.appendChild( this.chordHolder );
		tableElement.appendChild( rowElement );
				
		return tableElement;
	}
}

// ***************************************************************************************
function FingeringApp( numCharts, strings )
{
	this.charts = new Array();
	
	for( var i=0; i<numCharts; i++ )
	{
		var key = 0;
		var root = i + 1;
		this.charts.push( new FingeringChord( strings, key, root, i ) );
	}
	
	// @return Element containing a table showing several fingering chord charts.
	this.render = function()
	{
		var tableElement = document.createElement('table');
		var rowElement = document.createElement('tr');
		for( var i=0; i<numCharts; i++ )
		{
			var cellElement = document.createElement('td');
			cellElement.appendChild( this.charts[i].render() );
			rowElement.appendChild( cellElement );
			
			// Space between charts.
			var spacer = document.createElement('td');
			spacer.width="1px";
			rowElement.appendChild( spacer );
		}
		tableElement.appendChild( rowElement );
		return tableElement;
	}
}
