const apiKey = '9E3ZHjZTGJisNCWJ6K86pI8E8I63PtEe';
const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
.then((resp) => resp.json())
.then(({data}) => {
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch((err) => {
    console.error(err);
});