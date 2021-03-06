
import Artists from './components/Artists';
import Albums from './components/Albums';
import Songs from './components/Songs';
import api from './utils/api/api-actions';
import events from './utils/events/event-actions';
import SingleArtist from './components/SingleArtist';
import SingleAlbum from './components/SingleAlbum';
import SingleSong from './components/SingleSong';


// import '../css/styles.css'

main()

function main() {
    api.getRequest('/artists', artists => {
        getAppContext().innerHTML = Artists(artists)
    })

    events.on(getAppContext(), 'click', () => {
        if(event.target.classList.contains('artist__image')) {
            api.getRequest(`/artists/${event.target.id}`, artist => {
                getAppContext().innerHTML = SingleArtist(artist)
            })
        }
    })

    events.on(getAppContext(), 'click', () => { 
        if(event.target.classList.contains('album__image')) {
            api.getRequest(`/albums/${event.target.id}`, album => {
                getAppContext().innerHTML = SingleAlbum(album)
            })
        }
    })

    events.on(getAppContext(), 'click', () => { 
        if(event.target.classList.contains('song__title')) {
            api.getRequest(`/songs/${event.target.id}`, song => {
                getAppContext().innerHTML = SingleSong(song)
            })
        }
    })

    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('add-artist__submit')) {
            const artistName = document.querySelector('.add-artist__name').value
            const artistImage = document.querySelector('.add-artist__image').value
            const age = document.querySelector('.add-artist__age').value
            const hometown = document.querySelector('.add-artist__hometown').value
            const rating = document.querySelector('.add-artist__rating').value
    
            api.postRequest('/artists/add', {
                artistName: artistName,
                artistImage: artistImage,
                age: age,
                hometown: hometown,
                rating: rating
            }, (artists) => getAppContext().innerHTML = Artists(artists))
    
        }
    
    })
    
    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('add-album__submit')) {
            const albumTitle = document.querySelector('.add-album__title').value
            const albumImage = document.querySelector('.add-album__image').value
            const rating = document.querySelector('.add-album__rating').value
            
            api.postRequest(`/artists/${event.target.id}`, {
                albumTitle: albumTitle,
                albumImage: albumImage,
                rating: rating
            }, (artist) => getAppContext().innerHTML = SingleArtist(artist))
            
        }
        
    })

    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('add-song__submit')) {
            const songTitle = document.querySelector('.add-song__title').value
            const duration = document.querySelector('.add-song__duration').value
            const rating = document.querySelector('.add-song__rating').value
            
            api.postRequest(`/albums/${event.target.id}`, {
                songTitle: songTitle,
                duration: duration,
                rating: rating
            }, (album) => getAppContext().innerHTML = SingleAlbum(album))
            
        }
        
    })
    // Adding Comments to Single Artist // 
    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('add-comment__singleArtist')) {
            const content = document.querySelector('.add-comment__box').value
 
    
            api.postRequest(`/artists/add/${event.target.id}`, {
              content: content

            }, (artist) => getAppContext().innerHTML = SingleArtist(artist))
    
        }
    
    })

    // Add Comments to Album //
    events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('add-comment__singleAlbum')) {
        const content = document.querySelector('.add-comment__box').value


        api.postRequest(`/albums/add/${event.target.id}`, {
          content: content

        }, (album) => getAppContext().innerHTML = SingleAlbum(album))

    }

})

// Add Comments to Song //
events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('add-comment__singleSong')) {
        const content = document.querySelector('.add-comment__box').value


        api.postRequest(`/songs/add/${event.target.id}`, {
          content: content

        }, (song) => getAppContext().innerHTML = SingleSong(song))

    }

})

// Add Comments to Song //
events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('add-comment__singleSong')) {
        const content = document.querySelector('.add-comment__box').value


        api.postRequest(`/songs/add/${event.target.id}`, {
          content: content

        }, (album) => getAppContext().innerHTML = SingleAlbum(album))

    }

})

// Add Tags to Song //
events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('add-tag__singleSong')) {
        const content = document.querySelector('.add-tag__box').value


        api.postRequest(`/songs/add/tags/${event.target.id}`, {
          content: content

        }, (song) => getAppContext().innerHTML = SingleSong(song))

    }

})

// Add Tags to Album //
events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('add-tag__singleAlbum')) {
        const content = document.querySelector('.add-tag__box').value


        api.postRequest(`/albums/add/tags/${event.target.id}`, {
          content: content

        }, (album) => getAppContext().innerHTML = SingleAlbum(album))

    }

})

// Add Tags to Artist //
events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('add-tag__singleArtist')) {
        const content = document.querySelector('.add-tag__box').value


        api.postRequest(`/artists/add/tags/${event.target.id}`, {
          content: content

        }, (artist) => getAppContext().innerHTML = SingleArtist(artist))

    }

})

function addSong() {
    events.on(getAppContext(), 'click', () => {
        if (event.target.classList.contains('add-song__submit')) {
            const songTitle = document.querySelector('.add-song__title').value
            const duration = document.querySelector('.add-song__duration').value
            const rating = document.querySelector('.add-song__rating').value
            const album = document.querySelector('.add-song__album').value

            api.postRequest('/songs/add', {
                songTitle: songTitle,
                duration: duration,
                rating: rating,
                album: album
            }, (artists) => getAppContext().innerHTML = Artists(artists))

        }
    })
}


function getAppContext() {
    return document.querySelector("#app")
}


   
}