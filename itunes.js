


$('#search-button').on('click', runSearch)


function runSearch(){
    let query = $('#search-field').val();
    console.log(query)



$.get('https://itunes.apple.com/search?', {media:'music', term: query }, function (results) {
    
    let myResultsText = results;
    let myResults = JSON.parse(myResultsText);
    //console.log(myResults.results[1].trackName);
    console.log(results)
    
    let $resultsDiv = $('#search-results')
    
    $resultsDiv
        .empty()
        .append(
            $('<h2>')
        )
        .append(myResults.results.map(artistHtml))
    })
}

function artistHtml (artist) {
    return ` 
    <p><a href="${artist.artistViewUrl}">${artist.artistName}</a> - ${artist.trackName}</p>
    `
}
