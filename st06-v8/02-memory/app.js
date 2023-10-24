let outter = null;
let run = function () {
    let inner = outter
    let unused = function () {
        if (inner) {

            console.log('hi')
        }

    }
    outter = {
        longStr: new Array(1000000).join('s'),
    };
};
setInterval(run, 1000);