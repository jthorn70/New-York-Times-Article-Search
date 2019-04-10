$(document).ready($(document).on("click", "#submit", function(){
    $(".remove").remove()
    event.preventDefault()
    
    search = $("#searchTerms").val()
    numberRecords = $("#selectNum").val()
    startYear = $("#startYear").val()
    endYear = $("#endYear").val()
    console.log(startYear)
    console.log(endYear)
    if (startYear === "") {
        startYear = 2019
        console.log("check!")
    }
    if (endYear === "") {
        endYear = 2019
        console.log("check")
    }
    
    $.ajax({
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + '&begin_date=' + startYear + '0101&end_date=' + endYear + '0101&api-key=dPBQL9tqUvR0qSHGJ5AhpKAsAxXiHlDC',
        method: "GET",
    }).then(function(response) {
        
        if (response.response.meta.hits === 0){
            alert("No articles found!");
        }
        
        if (numberRecords > 0) {
            for (var i = 0; i < parseInt(numberRecords); i++) {
        
                var newDiv = $('<div class="remove"></div>')
    
                var title = $('<h1 class="remove">' + response.response.docs[i].headline.main + '</h1>')
                newDiv.append(title)
    
                var byline = $('<h4 class="remove">' + response.response.docs[i].byline.original + "</h4>")
                newDiv.append(byline)
    
                var section = $('<h5 class="remove">' + response.response.docs[i].section_name + '</h5>')
                newDiv.append(section)
    
                var date = $('<p class="remove">' + response.response.docs[i].pub_date + '</p>')
                newDiv.append(date)
    
                var webUrl = $('<a href="' + response.response.docs[i].web_url + '" class="remove">Go to Article</a>')
                newDiv.append(webUrl)
    
                $("#top").append(newDiv)
                }   
            } else {
                for (var i = 0; i < response.response.docs.length; i++) {
            
                    var newDiv = $('<div class="remove"></div>')
        
                    var title = $('<h1 class="remove">' + response.response.docs[i].headline.main + '</h1>')
                    newDiv.append(title)
        
                    var byline = $('<h4 class="remove">' + response.response.docs[i].byline.original + "</h4>")
                    newDiv.append(byline)
        
                    var section = $('<h5 class="remove">' + response.response.docs[i].section_name + '</h5>')
                    newDiv.append(section)
        
                    var date = $('<p class="remove">' + response.response.docs[i].pub_date + '</p>')
                    newDiv.append(date)
        
                    var webUrl = $('<a href="' + response.response.docs[i].web_url + '">Go to Article</a>')
                    newDiv.append(webUrl)
        
                    $("#top").append(newDiv)
                    }   
    
        }
        
    })
}));
$(document).ready($(document).on("click", "#clear", function(){
    $(".remove").remove()
}));