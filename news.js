// Initialize the news api parameters
// let apiKey = 'd5093af9b82fa9dbe80c2fcedefd1e57'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();

xhr.withCredentials = true;
xhr.open("GET", "https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=en&media=True");
xhr.setRequestHeader("x-rapidapi-key", "a88be3b532msh436d515e78b0c7ap104f31jsnfccd6e30053c");
xhr.setRequestHeader("x-rapidapi-host", "newscatcher.p.rapidapi.com");

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            // console.log(element)
            let news = `<div class="card mb-3">
                            <div class="row">
                                <div class="col-md-4 col-12">
                                <img
                                    src="${element["media"]}" 
                                    class="img-fluid"
                                />
                                </div>
                                <div class="col-md-8 col-12">
                                    <small class="text-muted my-2">${element["published_date"]}</small>
                                    <h4 class="card-title">${element["title"]}</h4>
                                    <p class="card-text">${element["summary"]}.. 
                                    <span class="text-gradient"> <a href="${element['link']}" target="_blank" >Read More</a> </span>
                                    </p>
                                </div>
                            </div>
                            </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()