var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

function addCatPeter() {
    var Cat = mongoose.model('Cat', {
        name: String,
        age: Number
    });

    var peter = new Cat({
        name: 'peter',
        age: 5
    });

    peter.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('meow');
    });

    Cat.find(function(err, cats) {
        for (var index in cats) {
            var cat = cats[index];
            console.log(cat);
        }
    });
}


module.exports = addCatPeter;