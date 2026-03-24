// Fingering Chart
//
// Author: Phil Burk
// (C) 2009 Mobileer Inc

var g_NoteNames = [ 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B' ];
var g_DegreeNames = [ '1', '-2', '2', '-3', '3', '4', '+4', '5', '-6', '6', '-7', '7' ];

var g_MajorSemitones = [0, 2, 4, 5, 7, 9, 11];
var g_Scales = new Array();
    g_Scales['Major'] =          [0, 2, 4, 5, 7, 9, 11];
    g_Scales['Dorian'] =         [0, 2, 3, 5, 7, 9, 10];
    g_Scales['Phrygian'] =       [0, 1, 3, 5, 7, 8, 10];
    g_Scales['Lydian'] =         [0, 2, 4, 6, 7, 9, 11];
    g_Scales['Mixolydian'] =     [0, 2, 4, 5, 7, 9, 10];
    g_Scales['Aeolian'] =        [0, 2, 3, 5, 7, 8, 10];
    g_Scales['Locrian'] =        [0, 1, 3, 5, 6, 8, 10];
    g_Scales['Naturl Minor'] =   [0, 2, 3, 5, 7, 8, 10];
    g_Scales['Harm. Minor'] =    [0, 2, 3, 5, 7, 8, 11];
    g_Scales['Harm. Major'] =    [0, 2, 4, 5, 7, 8, 11];
    g_Scales['Blues Minor'] =    [0, 3, 5, 7, 10];
    g_Scales['Blues Major'] =    [0, 2, 4, 7, 9];
    g_Scales['Gypsy'] =          [0, 2, 3, 6, 7, 8, 10];
	
function ChordInfo(displayName, semitones) {
	this.displayName = displayName;
	this.semitones = semitones;
}

var g_Chords = new Array();
	g_Chords['Major']       = new ChordInfo('', [0, 4, 7]);
	g_Chords['Minor']       = new ChordInfo('m', [0, 3, 7]);
	g_Chords['Dom7']        = new ChordInfo('7', [0, 4, 7, 10]);
	g_Chords['Major7']      = new ChordInfo('maj7', [0, 4, 7, 11]);
	g_Chords['Minor7']      = new ChordInfo('m7', [0, 3, 7, 10]);
	g_Chords['Min/Maj7']    = new ChordInfo('m/maj7', [0, 3, 7, 11]);
	g_Chords['Augmented']   = new ChordInfo('+', [0, 4, 8]);
	g_Chords['Diminished']  = new ChordInfo('dim', [0, 3, 6]);
	g_Chords['Diminished7'] = new ChordInfo('dim7', [0, 3, 6, 9]);
	g_Chords['Suspended4']  = new ChordInfo('sus4', [0, 5, 7]);
	g_Chords['Suspended2']  = new ChordInfo('sus2', [0, 2, 7]);
	g_Chords['Fifth']       = new ChordInfo('5', [0, 7]);
	g_Chords['Dom7Sus4']    = new ChordInfo('7sus4', [0, 5, 7, 10]);
	g_Chords['Major6']      = new ChordInfo('6', [0, 4, 7, 9]);
	g_Chords['Minor6']      = new ChordInfo('m6', [0, 3, 7, 9]);
	g_Chords['Major9']      = new ChordInfo('maj9', [0, 2, 4, 7, 11]);
	g_Chords['Dominant9']   = new ChordInfo('9', [0, 2, 4, 7, 10]);
	g_Chords['Dom/Min9']    = new ChordInfo('7b9', [0, 1, 4, 7, 10]);

var g_DrawingPrefs = {
	width:240,
	height:770,
	stringSpacing:35,
	fretHeight:45,
	radiusFraction:0.40,
	font:"16px Arial, Helvetica, sans-serif",
	whiteColor:"#F8F8F8",
	blackColor:"#101010",
	lightBlueColor:"#40C0FF",
	darkBlueColor:"#2020D0",
	openChordColor:"#E0E0E0",
	fretColor:"#303030",
	stringColor:"#606010",
	specialFretColor:"#C0B0F0",
	woodColor:"#E0D0C0"
};

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

/**
 * Model for a set of notes in an octave.
 * @param root semitone offset from C
 * @param semitones array of offsets from the root
 */
function NoteGamut(root, semitones) {
	this.root = root;
	this.semitones = semitones;
	
	this.setRoot = function(root) {
		this.root = root;
	}
	
	this.getRoot = function() {
		return this.root;
	}
	
	// Set notes as an array of offsets from root, eg. major triad is [0,4,7]
	this.setSemitones = function(semitones) {
		this.semitones = semitones;
	}
	
	this.getSemitones = function() {
		return this.semitones;
	}
	
	// Is this pitch in the scale?
	this.isInGamut = function(pitch) {
		var offsetFromRoot = (12 + pitch - this.root) % 12;
		return getIndexOf(this.semitones, offsetFromRoot) >= 0;
	}
	
	this.getDegreeName = function(pitch) {
		var offsetFromRoot = (12 + pitch - this.root) % 12;
		return g_DegreeNames[offsetFromRoot];
	}
}

// ***************************************************************************************
// Display a fretboard with a scale and a chord.
function FingeringChart( strings, scaleModel, chordModel)
{
	this.strings = strings;  // array of pitches for open strings
	this.scaleModel = scaleModel;
	this.chordModel = chordModel;
	
	this.calculateNoteInOctave = function( fret, string )
	{
		// Add 12 to fix lowest notes not showing up.
		return ((12 + this.strings[string] + fret) % 12);
	}
	
	this.renderNote = function(context, fretIndex, x, y, noteInOctave) {
		var xCenter = x + (g_DrawingPrefs.stringSpacing / 2);
		var yCenter = y + (g_DrawingPrefs.fretHeight / 2);
		var radius = g_DrawingPrefs.stringSpacing * g_DrawingPrefs.radiusFraction;
		
		var inScale = this.scaleModel.isInGamut(noteInOctave);
		var inChord = this.chordModel.isInGamut(noteInOctave);
		context.fillStyle = g_DrawingPrefs.blackColor;
		if (fretIndex == 0) {
			if(inChord) {
				context.fillStyle = g_DrawingPrefs.openChordColor;
				context.beginPath();
				context.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
				context.fill();
				context.stroke();
			} else if (!inScale) {
				// draw X on open string not in scale or chord
				context.fillStyle = "green";
				context.beginPath();
				var delta = radius * Math.sin(Math.PI * 0.25);
				context.moveTo(xCenter - delta, yCenter - delta);
				context.lineTo(xCenter + delta, yCenter + delta);
				context.stroke();
				context.moveTo(xCenter - delta, yCenter + delta);
				context.lineTo(xCenter + delta, yCenter- delta);
				context.stroke();
			}
		} else {
			if( inChord ) {
				context.fillStyle = g_DrawingPrefs.blackColor;
				context.beginPath();
				context.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
				context.fill();
			} else if (inChord) {
				context.beginPath();
				context.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
				context.fill();
			} else if (inScale) {
				context.fillStyle = g_DrawingPrefs.woodColor;
				context.beginPath();
				context.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
				context.fill();
				//context.stroke();
			}
		}
	
		if (inScale || inChord) {
			context.font=g_DrawingPrefs.font;
			if (inChord) {
				if (fretIndex > 0) {
					context.fillStyle = (inScale)
							? g_DrawingPrefs.whiteColor
							: g_DrawingPrefs.lightBlueColor;
				} else {
					context.fillStyle = (inScale)
							? g_DrawingPrefs.blackColor
							: g_DrawingPrefs.darkBlueColor;
				}
			} else {
				// only in scale
				context.fillStyle = g_DrawingPrefs.blackColor;
			}
			context.textAlign = "center";
			context.textBaseline = "middle";
			var noteName = cellText = this.scaleModel.getDegreeName(noteInOctave);
			context.fillText(noteName, xCenter, yCenter);
		}
	}
	
	this.renderOpenString = function(context) {
		var x = 0.75 * g_DrawingPrefs.stringSpacing; // TODO prefs
		var y = 0;
		var fretIndex = 0;
		
		// Render notes on a fret.
		for( var stringIndex = 0; stringIndex < this.strings.length; stringIndex++ )
		{
			var noteInOctave = this.calculateNoteInOctave( fretIndex, stringIndex );
			var noteCell = this.renderNote(context, fretIndex, x, y, noteInOctave);
			x += g_DrawingPrefs.stringSpacing;
		}
	}
	
	this.renderFret = function(context, fretIndex) {
	    var x = 0;
		var fingerMargin = 0.75 * g_DrawingPrefs.stringSpacing;
		var y = fretIndex * g_DrawingPrefs.fretHeight;
		
		if ((fretIndex == 3) || (fretIndex == 5) || (fretIndex == 7) || (fretIndex == 12)) {		
			context.fillStyle = g_DrawingPrefs.specialFretColor;
			context.beginPath();
			context.fillRect(x, y, fingerMargin, g_DrawingPrefs.fretHeight);
			
			context.font=g_DrawingPrefs.font;
			context.fillStyle = g_DrawingPrefs.blackColor;
			context.textAlign = "center";
			context.textBaseline = "middle";
			var xCenter = x + fingerMargin / 2;
			var yCenter = y + g_DrawingPrefs.fretHeight / 2;
			var noteName = fretIndex.toString();
			context.fillText(fretIndex.toString(), xCenter, yCenter);
		}
		
		x = fingerMargin;
		var fingerBoardWidth = this.strings.length * g_DrawingPrefs.stringSpacing;
		// Draw wooden background.
		context.fillStyle = g_DrawingPrefs.woodColor;
		context.beginPath();
		context.fillRect(x, y, fingerBoardWidth, g_DrawingPrefs.fretHeight);
		// Draw metal
		context.strokeStyle = g_DrawingPrefs.fretColor;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x + fingerBoardWidth, y);
		context.stroke();
		
		// Render notes on a fret.
		for( var stringIndex = 0; stringIndex < this.strings.length; stringIndex++ )
		{
			// draw string
			context.strokeStyle = g_DrawingPrefs.stringColor;
			context.beginPath();
			var xString = x + (g_DrawingPrefs.stringSpacing / 2);
			context.moveTo(xString, y);
			context.lineTo(xString, y + g_DrawingPrefs.fretHeight);
			context.stroke();
		
			var noteInOctave = this.calculateNoteInOctave( fretIndex, stringIndex );
			var noteCell = this.renderNote(context, fretIndex, x, y, noteInOctave);
			x += g_DrawingPrefs.stringSpacing;
		}
	}
	
	// @return Element containing a table showing one fingering.
	this.render = function()
	{		
		var canvas = document.createElement('canvas');
		canvas.setAttribute("width", g_DrawingPrefs.width.toString());
		canvas.setAttribute("height", g_DrawingPrefs.height.toString());
		var context = canvas.getContext("2d");
		
		this.renderOpenString(context);
		
		for( var fretIndex = 1; fretIndex < (12 + 5); fretIndex++ )
		{
			this.renderFret(context, fretIndex);
		}
		return canvas;
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
			keyPickerListener.setKey(this.selectedIndex);
		};
		return selectElement;
	}
}

// ***************************************************************************************
function FingeringScalePicker( scalePickerListener )
{
	this.scalePickerListener = scalePickerListener;
	
	this.createOption = function( value )
	{
		var optionElement = document.createElement('option');
		optionElement.setAttribute("value", "" + value);
		optionElement.innerHTML = value;
		return optionElement;
	}
		
	// @return Element containing a form for picking a scale.
	this.render = function()
	{
		var selectElement = document.createElement('select');
		selectElement.id = "scaleSelector";
		for( key in g_Scales )
		{
			selectElement.appendChild( this.createOption( key ) );
		}
		
		selectElement.onchange = function()
		{
			var scaleOption = this.options[this.selectedIndex];
			scalePickerListener.setScale( g_Scales[scaleOption.value] );
		};
		return selectElement;
	}
}

// ***************************************************************************************
function FingeringKeyScalePicker( keyScaleListener, key )
{
	this.keyPicker = new FingeringKeyPicker( keyScaleListener, key );
	this.scalePicker = new FingeringScalePicker( keyScaleListener );
	
	// @return Element containing a form for picking a chord.
	this.render = function()
	{
		var spanElement = document.createElement('span');
		spanElement.id = "chordSpan";
		spanElement.appendChild( this.keyPicker.render() );
		spanElement.appendChild( this.scalePicker.render() );
		return spanElement;
	}
}

// ***************************************************************************************
function FingeringRootChordPicker(fingeringChord, defaultRoot, defaultChordType )
{	
	this.fingeringChord = fingeringChord;
	this.defaultRoot = defaultRoot;
	this.defaultChordType = defaultChordType;
	
	this.createOption = function( value, defaultValue )
	{
		var optionElement = document.createElement('option');
		optionElement.setAttribute("value", "" + value);
		optionElement.innerHTML = value;
		// Set selection to default value.
		if( value == defaultValue )
		{
			optionElement.setAttribute('selected', 'selected');
		}
		// So we can refer back to this object in the onchange callback.
		optionElement.picker = this;
		return optionElement;
	}
	
	// @return Element containing a form for picking a chord.
	this.render = function()
	{
		var spanElement = document.createElement('span');
		spanElement.id = "chordSpan";
		
		var selectRootElement = document.createElement('select');
		selectRootElement.id = "rootSelector";
		
		var defaultNoteName = g_NoteNames[this.defaultRoot];
		for( var i=0; i<g_NoteNames.length; i++)
		{
			var optionElement = this.createOption(g_NoteNames[i], defaultNoteName);
			selectRootElement.appendChild( optionElement );
		}
		
		selectRootElement.onchange = function()
		{
			fingeringChord.setRoot( this.selectedIndex );
		};
		
		this.selectRootElement = selectRootElement;
		spanElement.appendChild( selectRootElement );
		
		var selectChordElement = document.createElement('select');
		selectChordElement.id = "chordSelector";
		
		var index = 0;
		for( key in g_Chords )
		{
			var optionElement = this.createOption( key, defaultChordType );
			selectChordElement.appendChild( optionElement );
			index += 1;
		}
		
		selectChordElement.onchange = function()
		{
			var chosenOption = this.options[this.selectedIndex];
			fingeringChord.setChordType( chosenOption.value );
		};
		
		this.selectChordElement = selectChordElement;
		spanElement.appendChild( selectChordElement );
		
		return spanElement;
	}
}


// ***************************************************************************************
// Multiple components for one chord chart.
// key is 0 for C, 1 for C#, etc
// rootIndexInScale is 0 for tonic, 1 for second, etc
// chordIndex is index into the chord table
function FingeringScaleChord( strings, key, rootIndexInScale, defaultChordType )
{
	this.scaleModel = new NoteGamut(key, g_Scales['Major']);
	var root = this.scaleModel.getSemitones()[rootIndexInScale];
	this.chordModel = new NoteGamut(root, g_Chords[defaultChordType].semitones);
    this.chordType = defaultChordType;
	
	// View
	this.keyScalePicker = new FingeringKeyScalePicker( this, key );
	this.rootChordPicker = new FingeringRootChordPicker( this, root, defaultChordType );
	this.chart = new FingeringChart(strings, this.scaleModel, this.chordModel);
	
	// key is pitch of the tonic, eg C=0, D=2
	this.setKey = function( key )
	{
		this.scaleModel.setRoot(key);
		this.updateChart();
	}
	
	this.getKey = function()
	{
		return this.scaleModel.getRoot();
	}
	
	this.setScale = function( scale )
	{
		this.scaleModel.setSemitones(scale);
		this.updateChart();
	}
	
	// root is pitch of the chord, eg C=0, D=2
	this.setRoot = function( root )
	{
		this.chordModel.setRoot(root);
		this.updateChart();
	}
		
	this.setChordType = function( chordType )
	{
		this.chordType = chordType;
		this.chordModel.setSemitones(g_Chords[chordType].semitones);
		this.updateChart();
	}
	
	this.getChordName = function() {
		//var pitch = (12 + this.chordModel.getRoot() - this.scaleModel.getRoot()) % 12;
		var pitch = this.chordModel.getRoot();
		var typeName = g_Chords[this.chordType].displayName;
		return g_NoteNames[pitch] + typeName;
	}
	
	this.updateChart = function()
	{
		//alert("Picked chord " + root );
		this.chordHolder.removeChild( this.renderedChart );
		this.renderedChart = this.chart.render();
		this.chordHolder.appendChild( this.renderedChart );
		// update name
		this.nameHolder.innerHTML = this.getChordName();
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
					
		rowElement = this.renderCell( "Scale ", this.keyScalePicker.render() );
		tableElement.appendChild( rowElement );
		
		rowElement = this.renderCell( "Chord ", this.rootChordPicker.render() );
		tableElement.appendChild( rowElement );
								 
		rowElement = document.createElement('tr');
		this.nameHolder = document.createElement('td');
		this.nameHolder.setAttribute("class", "chordName" );
		this.nameHolder.innerHTML = this.getChordName();
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
	var chordTypesForMajorKey = ['Major', 'Minor', 'Minor', 'Major', 'Major', 'Minor', 'Diminished'];
	
	for( var i=0; i<numCharts; i++ )
	{
		var key = 0;
		var rootIndexInScale = i;
		this.charts.push( new FingeringScaleChord( strings, key, rootIndexInScale, chordTypesForMajorKey[i]) );
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
