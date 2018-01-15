var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Billy');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTU2OTAxOTAz/albert-einstein-9285408-1-402.jpg');
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel())