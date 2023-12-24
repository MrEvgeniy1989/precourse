const Playlist = {
    imageUrl: 'assets/images/1685356316_square250.webp',
    title: "Макс Корж",
    info: {
        trackCount: 2,
        playlistDurationInSeconds: 491,
    },
    tracks: [
        {
            imageForTrackUrl: 'assets/images/1685356316_square100.webp',
            artistName: 'Макс Корж',
            trackTitle: 'Слово Пацана',
            fileUrl: 'assets/mp3/Макс Корж - Слово Пацана.mp3',
            isHot: false,
        },
        {
            imageForTrackUrl: 'assets/images/1685356316_square100.webp',
            artistName: 'Макс Корж',
            trackTitle: 'Малиновый закат',
            fileUrl: 'assets/mp3/Макс Корж - Малиновый закат.mp3',
            isHot: true,
        },
        {
            imageForTrackUrl: 'assets/images/1685356316_square100.webp',
            artistName: 'Макс Корж',
            trackTitle: '2 типа людей',
            fileUrl: 'assets/mp3/Макс Корж - 2 типа людей.mp3',
            isHot: true,
        },
    ]
}
const renderPlaylistHeader = (playlistForRender, mainDiv) => {
    const playlistInfoDiv = document.createElement("div");
    playlistInfoDiv.classList.add('playlistInfoDiv')
    mainDiv.append(playlistInfoDiv)

    const imageDiv = document.createElement("div");
    imageDiv.classList.add('imageDiv')
    const img = document.createElement("img");
    img.src = playlistForRender.imageUrl;
    playlistInfoDiv.append(imageDiv);
    imageDiv.append(img);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add('contentDiv')
    playlistInfoDiv.append(contentDiv);

    const h1 = document.createElement('h1');
    h1.textContent = playlistForRender.title;
    contentDiv.append(h1);

    const spanDiv = document.createElement("div");
    contentDiv.append(spanDiv);

    const spanForInfo = document.createElement('span');
    spanForInfo.textContent = `${playlistForRender.info.trackCount} tracks, ${Math.ceil(playlistForRender.info.playlistDurationInSeconds / 60)}m ${Math.ceil(playlistForRender.info.playlistDurationInSeconds % 60)}s`;
    spanForInfo.classList.add('playlist-info');
    spanDiv.append(spanForInfo);
}

const renderTrack = (track, tracksDiv) => {
    const trackDiv = document.createElement("div");
    trackDiv.classList.add('trackDiv')
    tracksDiv.append(trackDiv)

    const imageForTrackDiv = document.createElement("div");
    trackDiv.append(imageForTrackDiv)

    const trackImg = document.createElement("img");
    trackImg.src = track.imageForTrackUrl;
    imageForTrackDiv.append(trackImg)

    const trackContentDiv = document.createElement("div");
    trackContentDiv.classList.add('trackContentDiv')
    trackDiv.append(trackContentDiv)

    const trackInfoDiv = document.createElement("div");
    trackContentDiv.append(trackInfoDiv)

    const spanForTrackInfo = document.createElement('span');
    spanForTrackInfo.classList.add('spanForTrackInfo')
    spanForTrackInfo.textContent = `${track.artistName} - ${track.trackTitle}`;
    trackInfoDiv.append(spanForTrackInfo)

    const trackPlayerDiv = document.createElement("div");
    trackContentDiv.append(trackPlayerDiv)

    const playerElement = document.createElement('audio')
    playerElement.classList.add('playerElement')
    playerElement.controls = true
    playerElement.src = track.fileUrl
    trackPlayerDiv.append(playerElement)
}

const renderPlaylist = (playlistForRender) => {
    const appDiv = document.createElement("div");
    appDiv.classList.add('appDiv')
    document.body.append(appDiv);

    const mainDiv = document.createElement("div");
    mainDiv.classList.add('mainDiv')
    appDiv.append(mainDiv);

    renderPlaylistHeader(playlistForRender, mainDiv)

    const tracksDiv = document.createElement("div");
    tracksDiv.classList.add('tracksDiv')
    mainDiv.append(tracksDiv)

    playlistForRender.tracks.map(track => renderTrack(track, tracksDiv))
}

renderPlaylist(Playlist)