export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aJvdItgJiyM77zQF1GyPm8tcG1bYlRdJ&q=${category}&limit=10`

    const resp = await fetch(url)
    const { data } = await resp.json()
    console.log("data",data)
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs
    } 