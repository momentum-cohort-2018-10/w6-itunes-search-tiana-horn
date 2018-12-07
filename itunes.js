


$('#search-button').on('click', runSearch)


function runSearch(){
    let query = $('#search-field').val();



$.get('https://itunes.apple.com/search?term=beyonce', {q: query }, function (results) {
    
    var myResultsText = results;
    var myResults = JSON.parse(myResultsText);
    console.log(myResults.results[1].artistId);
    let $resultsDiv = $('#search-results')
    
    $resultsDiv
        .empty()
        .append(
            $('<p>')
            .text(`Number of Beyonce songs: ${myResults.results[1].artistId}`)
        )
//         .append(results.items.map(artistHtml))
//     })
// }

// function artistHtml () {
//     return ` 
//     <p><a href="${artist.html_url}">${artist.}</a> - ${artist.kind} || 'no description'}</p>
//     `
// }
