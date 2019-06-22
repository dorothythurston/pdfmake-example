module.exports = {
	content: [
		{
			text: 'This is a page reference example. Page number of text element marked id property will be located in pageReference element. See below.\n\n'
		},
		{
			table: {
				body: [
					[{ text: 'page #', bold: true }, { text: 'title', bold: true }],
					[{ pageReference: 'header1', alignment: 'right' }, 'Header one'],
					[{ pageReference: 'subheader1', alignment: 'right' }, 'Subheader one'],
					[{ pageReference: 'subheader2', alignment: 'right' }, 'Subheader two'],
					[{ pageReference: 'subheader3', alignment: 'right' }, 'Subheader three']
				]
			}
		},
		{
			text: '\nAnd text can be referenced by textReference:\n'
		},
		{
			table: {
				body: [
					[{ text: 'page #', bold: true }, { text: 'title', bold: true }],
					[{ pageReference: 'header1', alignment: 'right' }, { textReference: 'header1' }],
					[{ pageReference: 'subheader1', alignment: 'right' }, { textReference: 'subheader1' }],
					[{ pageReference: 'subheader2', alignment: 'right' }, { textReference: 'subheader2' }],
					[{ pageReference: 'subheader3', alignment: 'right' }, { textReference: 'subheader3' }]
				]
			}
		},
		{
			text: '\nAnd all can be in inline texts:\n'
		},
		{
			text: [
				'Chapter "',
				{ textReference: 'header1' },
				'" is on page number ',
				{ pageReference: 'header1' }
			]
		},
		{
			text: [
				'Chapter "',
				{ textReference: 'subheader1' },
				'" is on page number ',
				{ pageReference: 'subheader1' }
			]
		},
		{
			text: [
				'Chapter "',
				{ textReference: 'subheader2' },
				'" is on page number ',
				{ pageReference: 'subheader2' }
			]
		},
		{
			text: [
				'Chapter "',
				{ textReference: 'subheader3' },
				'" is on page number ',
				{ pageReference: 'subheader3' }
			]
		},
		{
			text: 'This is a header, using header style',
			style: 'header',
			id: 'header1',
			pageBreak: 'before'
		},
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
		{
			text: 'Subheader 1 - using subheader style',
			style: 'subheader',
			id: 'subheader1',
			pageBreak: 'before'
		},
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
		{
			text: 'Subheader 2 - using subheader style',
			style: 'subheader',
			id: 'subheader2',
			pageBreak: 'before'
		},
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
		{
			text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
			style: ['quote', 'small']
		},
		{
			text: [
				{
					text: 'Subheader 3 - using inline text',
					style: 'subheader',
					id: 'subheader3',
					tocItem: true
				},
				{
					text: '; and this text not be displayed in ToC',
					italics: true
				}
			],
			pageBreak: 'before'
		},
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
	    {text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
	    {text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
	  {text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},	    		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
	    {text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{text: 'Tables', style: 'header'},
		'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
		{text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
		'The following table has nothing more than a body array',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					['One value goes here', 'Another one here', 'OK?']
				]
			}
		},
		{text: 'A simple table with nested elements', style: 'subheader'},
		'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
		{
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{text: [
								'Inlines can be ',
								{text: 'styled\n', italics: true},
								{text: 'easily as everywhere else', fontSize: 10}]
						}
					]
				]
			}
		},
		{text: 'Defining column widths', style: 'subheader'},
		'Tables support the same width definitions as standard columns:',
		{
			bold: true,
			ul: [
				'auto',
				'star',
				'fixed value'
			]
		},
		{
			style: 'tableExample',
			table: {
				widths: [100, '*', 200, '*'],
				body: [
					['width=100', 'star-sized', 'width=200', 'star-sized'],
					['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				widths: ['*', 'auto'],
				body: [
					['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
				]
			}
		},
		{text: 'Defining row heights', style: 'subheader'},
		{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
		},
		'With same height:',
		{
			style: 'tableExample',
			table: {
				heights: 40,
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		'With height from function:',
		{
			style: 'tableExample',
			table: {
				heights: function (row) {
					return (row + 1) * 25;
				},
				body: [
					['row 1', 'column B'],
					['row 2', 'column B'],
					['row 3', 'column B']
				]
			}
		},
		{text: 'Column/row spans', pageBreak: 'before', style: 'subheader'},
		'Each cell-element can set a rowSpan or colSpan',
		{
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
		{text: 'Headers', pageBreak: 'before', style: 'subheader'},
		'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
		{text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					]
				]
			}
		},
		{text: 'Styling tables', style: 'subheader'},
		'You can provide a custom styler for the table. Currently it supports:',
		{
			ul: [
				'line widths',
				'line colors',
				'cell paddings',
			]
		},
		'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
		{text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'noBorders'
		},
		{text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'headerLineOnly'
		},
		{text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: 'lightHorizontalLines'
		},
		{text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},
		{text: 'zebra style', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				body: [
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
				}
			}
		},
		{text: 'and can be used dash border', margin: [0, 20, 0, 8]},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					[{text: 'Header 1', style: 'tableHeader'}, {text: 'Header 2', style: 'tableHeader'}, {text: 'Header 3', style: 'tableHeader'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return 'black';
				},
				vLineColor: function (i, node) {
					return 'black';
				},
				hLineStyle: function (i, node) {
					if (i === 0 || i === node.table.body.length) {
						return null;
					}
					return {dash: {length: 10, space: 4}};
				},
				vLineStyle: function (i, node) {
					if (i === 0 || i === node.table.widths.length) {
						return null;
					}
					return {dash: {length: 4}};
				},
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (i, node) { return null; }
			}
		},
		{text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]},
		'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, true, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, true, false, false]'
						},
						{
							border: [false, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, false, false]'
						},
						{
							border: [true, true, true, true],
							fillColor: '#eeeeee',
							text: 'border:\n[true, true, true, true]'
						}
					],
					[
						{
							rowSpan: 3,
							border: [true, true, true, true],
							fillColor: '#eeeeff',
							text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, false, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, false, false, false]'
						}
					],
					[
						'',
						{
							colSpan: 2,
							border: [true, true, true, true],
							fillColor: '#eeffee',
							text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
						},
						''
					],
					[
						'',
						{
							border: undefined,
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [false, false, true, true],
							fillColor: '#dddddd',
							text: 'border:\n[false, false, true, true]'
						}
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							border: [false, false, false, false],
							fillColor: '#eeeeee',
							text: 'border:\n[false, false, false, false]'
						},
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
					],
					[
						{
							fillColor: '#dddddd',
							text: 'border:\nundefined'
						},
						{
							fillColor: '#eeeeee',
							text: 'border:\nundefined'
						},
						{
							border: [true, true, false, false],
							fillColor: '#dddddd',
							text: 'border:\n[true, true, false, false]'
						},
					]
				]
			}
		},
		'And some other examples with rowSpan/colSpan...',
		{
			style: 'tableExample',
			table: {
				body: [
					[
						'',
						'column 1',
						'column 2',
						'column 3'
					],
					[
						'row 1',
						{
							rowSpan: 3,
							colSpan: 3,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
						},
						'',
						''
					],
					[
						'row 2',
						'',
						'',
						''
					],
					[
						'row 3',
						'',
						'',
						''
					]
				]
			},
			layout: {
				defaultBorder: false,
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{
							colSpan: 3,
							text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
							fillColor: '#eeeeee',
							border: [false, false, false, false]
						},
						'',
						''
					],
					[
						'border:\nundefined',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			style: 'tableExample',
			table: {
				body: [
					[
						{rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false]},
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					],
					[
						'',
						'border:\nundefined',
						'border:\nundefined'
					]
				]
			}
		},
		{
			image: 'bee',
			width: 50,
			height: 50,
			absolutePosition: { x: 100, y: 100 }
		},
		{
			image: 'bee',
			width: 50,
			height: 50,
			absolutePosition: { x: 150, y: 150 }
		},
		{
			image: 'bee',
			width: 50,
			height: 50,
			absolutePosition: { x: 200, y: 200 }
		},
		{
			image: 'bee',
			width: 50,
			height: 50,
			absolutePosition: { x: 250, y: 150 }
		},
		{
			image: 'bee',
			width: 50,
			height: 50,
			absolutePosition: { x: 300, y: 100 }
		},

		{
			text: 'You can put images at any position',
			pageBreak: 'after'
		},

		{
			text: 'As',
			absolutePosition: { x: 100, y: 100 }
		},
		{
			text: 'well',
			absolutePosition: { x: 150, y: 150 }
		},
		{
			text: 'as',
			absolutePosition: { x: 200, y: 200 }
		},
		{
			text: 'text',
			absolutePosition: { x: 250, y: 150 }
		},
		{
			text: '!!!',
			absolutePosition: { x: 300, y: 100 },
			pageBreak: 'after'
		},

		{
			text: 'And this is a table on top of an image at x:100 y:100',
		},
		{
			image: 'bee',
			width: 100,
			height: 100,
			absolutePosition: { x: 100, y: 100 }
		},
		{
			absolutePosition: { x: 100, y: 100 },
			style: 'tableExample',
			table: {
				body: [
					['Column 1', 'Column 2', 'Column 3'],
					[
						{
							stack: [
								'Let\'s try an unordered list',
								{
									ul: [
										'item 1',
										'item 2'
									]
								}
							]
						},
						/* a nested table will appear here as soon as I fix a bug */
						[
							'or a nested table',
							{
								table: {
									body: [
										['Col1', 'Col2', 'Col3'],
										['1', '2', '3'],
										['1', '2', '3']
									]
								},
							}
						],
						{
							text: [
								'Inlines can be ',
								{ text: 'styled\n', italics: true },
								{ text: 'easily as everywhere else', fontSize: 10 }]
						}
					]
				]
			}
		}
	],
	images: {
		bee: 'data:image/png;base64,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'
	},
	styles: {
		header: {
			fontSize: 18,
			bold: true,
			margin: [0, 0, 0, 10]
		},
		subheader: {
			fontSize: 16,
			bold: true,
			margin: [0, 10, 0, 5]
		},
		tableExample: {
			margin: [0, 5, 0, 15]
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black'
		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 8
		}
	},
	defaultStyle: {
		// alignment: 'justify'
	}
};