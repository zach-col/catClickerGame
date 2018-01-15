var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Billy');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTU2OTAxOTAz/albert-einstein-9285408-1-402.jpg');
    this.nicknames = ko.observableArray(['Bill','Billy Bob', 'Baller']);
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.title = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = 'Ninja';
        }
        return title;
    }, this);

}

ko.applyBindings(new ViewModel())