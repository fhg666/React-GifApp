export const getGifs = async(category)  =>{



    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category)}&api_key=tTrTU3mbh1a2CCSQdZaqWufwmK2Ek2Gy&limit=10`
        const respu = await fetch(url);
        const {data} = await respu.json();

        const gifs = data.map(img => {
    return{
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url

    }

})

return gifs;


}