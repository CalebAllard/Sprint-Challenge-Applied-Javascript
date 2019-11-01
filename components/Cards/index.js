// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const entryPoint = document.querySelector('.cards-container');

// Axios get
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    // console.log(response);
    const dataStream = response.data.articles;

    for(let key in dataStream){
        // console.log(dataStream[key]);
        dataStream[key].forEach(e => {
            // console.log(e);
            entryPoint.appendChild(createCard(e));
        })
    }

}).catch(error => {
    console.log(`error: ${error}`);
})

// create card
function createCard(obj){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.innerText = obj.headline;
    const divAuthor = document.createElement('div');
    divAuthor.classList.add('author');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const authorsImg = document.createElement('img');
    authorsImg.setAttribute('src',obj.authorPhoto);
    const authorsName = document.createElement('span');
    authorsName.innerText = `By ${obj.authorName}`;
    // nest elements
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(divAuthor);
    divAuthor.appendChild(imgContainer);
    imgContainer.appendChild(authorsImg);
    divAuthor.appendChild(authorsName);


    //
    return cardDiv;
}
