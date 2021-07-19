// Your API key is: e5e52d313b364608a5756c01ee84f05d

// Initialize the news api parameters
let source = 'google-news';
let apiKey = 'e5e52d313b364608a5756c01ee84f05d'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<p>
                            <a class="btn btn-primary" id="heading${index}" data-bs-toggle="collapse" href="#collapseExample${index}"
                                role="button" aria-expanded="false" aria-controls="collapse${index}">
                                <b>Breaking News ${index + 1}:</b> ${element["title"]}
                            </a>
                        </p>
                        <div class="collapse" id="collapseExample${index}">
                            ${element["publishedAt"]} <br>
                           ${element["content"]} <br>
                            <a href="${element.url}">.....For continue reading right-click here and one in new window!</a>                            
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
