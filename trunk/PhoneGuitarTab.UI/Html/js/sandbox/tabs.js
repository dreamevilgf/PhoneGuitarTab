
var scales = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3];
var trackCount = 0;
    clearTab();
    var width = $(document).width();
    (new MusicTab.Utils.FileReader()).read(base64File, function (data) {
        MusicTab.Tablatures.TabFactory.create({
                data: data,
                helper: staveHelper
            },
            function (tablature) {
                currentTrackIndex = 0;
                tab = tablature;
                processTab();
            });
    });
    MusicTab.Tablatures.TabFactory.create({
            data: jsonFile,
            helper: staveHelper,
            type: "ug_json"
        },
        function (tablature) {
            currentTrackIndex = 0;
            tab = tablature;
            processTab();
        });
}

function nextTrack() {
    currentTrackIndex++;
    if (currentTrackIndex == trackCount)
        currentTrackIndex = 0;

    showTab();
}
    currentTrackIndex--;
    if (currentTrackIndex < 0)
        currentTrackIndex = trackCount - 1;

    showTab();
}
    var i = 0;
    for(;i< scales.length;) {
        if(scales[i++] == scale) break;
    }
    
    if (i == scales.length) i = 0;
    scale = scales[i];
    
    showTab();
}

function clearTab(){
    trackCount = tracks.length;
    //insertTitle();

    var tracks = [{
        artist: tab.header.artist,
        album: tab.header.album,
        title: tab.header.title,
        music: tab.header.music,
        words: tab.header.words,
        notice: tab.header.notice,
        instrument: tab.tracks[currentTrackIndex].instrument
    }];
    
    $("#trackTmpl").tmpl(tracks).appendTo("#body");
}