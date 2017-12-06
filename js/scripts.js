// Put all of your jQuery and JavaScript in this document.
/* globals $ */


function appendToPage( productObject ){
    var $newContent = $( "<div>" );
    var $sellingPoints = $( "<div>" );

    for( var i = 0; i < productObject.sellingPoints.length; i++ ){
        $sellingPoints.append( "<p>" + productObject.sellingPoints[i] + "</p>" );
    }

    $newContent
        .append( "<h1>" + productObject.name + "</h1>" )
        .append( "<h2>" + productObject.author + "</h2>" )
        .append( "<img src='" + productObject.pictureUrl + "'/>" )
        .append( "<h2>$" + productObject.price + "</h2>" )
        .append( $sellingPoints );

    $( "#content" ).append( $newContent );
}


for( var i = 0; i < products.length; i++ ){
    appendToPage( products[i] );
}

$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};

    event.preventDefault();

    formObject.id = products.length + 1;
    formObject.sellingPoints = [];

    data.forEach( ( field ) => {
        if( field.name === "sellingPoints" ){
            formObject.sellingPoints.push( ...field.value.split( "\n" ) );
        }
        else{
            formObject[ field.name ] = field.value;
        }
    } );

    products.push( formObject );

    appendToPage( formObject );
} );
