class ImageReaper {
    constructor(keyWord) {
        this.search = keyWord;
    }

    load() {
        var word = this.search;
        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON(flickrAPI,
            {
                tags: this.search,
                tagmode: "any",
                format: "json",
                min_upload_date: "1990-01-01 00:00:00",
                sort: "relevance",
                content_type: "1"
            })


            .done(function (data) {

                const myNode = document.getElementById("images");
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.lastChild);
                }

                $('#images').append('<p>SHOWING REAPS FROM <a href="https://flicker.com" target="_blank">FLICKR</a> FOR KEYWORD <strong>"' + word.toUpperCase() + '"</strong>: </p><br/>');

                console.log(data);

                $.each(data.items, function (i, item) {
                    // console.log(item.media);
                    // $('#images').append('img src="' + item.media.m);
                    $("<img>").attr("src", item.media.m).attr("alt", item.title).appendTo("#images");
                    if (i === 20) {
                        return false;
                    }
                });
            });
    }

    newSearch() {
        this.search = document.getElementById('inputText').value;
        this.load();
    }

}

var imageReaper = new ImageReaper("Golf G60");