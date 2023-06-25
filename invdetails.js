function ListViewModel() {
    var self = this;

    var artworkData =  [ { 'id': '1', 'registrationNumber': '123', 'title': 'Shaker chair #1', 'artist': 'Bosse', }, { 'id': '2', 'registrationNumber': '456', 'title': 'Shaker chair #2', 'artist': 'Bosse', }, { 'id': '3', 'registrationNumber': '789', 'title': 'Shaker chair #3', 'artist': 'Bosse', } ];

    function exportArtworks() {
        var selectedArtworksList = [];
        
        for (var i = 0; i < self.artWorkList().length; i++) {
            var artwork = self.artWorkList()[i];
            
            if (artwork.isSelected()) {
                selectedArtworksList.push(artwork);
            }
        }
        
        console.log(selectedArtworksList);
    }
    
    function mapArtWorkData(artwork) {
        var a = artwork;
        a.isSelected = ko.observable(false);

        return a;
    }

    var artWorkList = ko.observableArray(artworkData.map(mapArtWorkData));
    
    this.exportArtworks = exportArtworks;
    this.artWorkList = artWorkList;
}

ko.applyBindings(new ListViewModel(), document.getElementById("container"));

function PopupViewModel() {
    var isOpen = ko.observable(false);
    
    this.isOpen = isOpen;
}

ko.applyBindings(new ListViewModel(), document.getElementById("popup"));
