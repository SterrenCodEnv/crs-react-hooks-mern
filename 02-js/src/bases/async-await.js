const getImage = async () => {
    try {
        const apiKey = "9E3ZHjZTGJisNCWJ6K86pI8E8I63PtEe";
        const resp = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(`¡Upss!, Algo no ha salido bien: ${error}`);
    }
};

getImage();
