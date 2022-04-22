
export const getGifs = async( category ) => {

  // const url = 'https://api.giphy.com/v1/gifs/search?q=superman&limit=10&api_key=mbZCfxFSrDgzEa2L9HbPXF9NQiOIn71P'
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=mbZCfxFSrDgzEa2L9HbPXF9NQiOIn71P`  /* encodeURI: reeemplaza espacios */
  const resp =  await fetch(url)
  const { data } =  await resp.json()

  const gifs = data.map( img => { 

    return{
      id: img.id,
      title: img.title,
      url: img.images?.downsized_large.url /* ? condicion para que use las imagenes */
    }

  })

  return gifs
  // setImages( gifs )

}