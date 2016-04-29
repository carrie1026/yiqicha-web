define(['./mod'], function (mod) {
    mod.filter('myNum', function () {
        return function (input) {
            if (!input) {
                return 0;
            } else {
                return input;
            }
        }
    });
});
