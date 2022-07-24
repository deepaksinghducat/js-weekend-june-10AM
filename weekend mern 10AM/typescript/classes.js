// Class inheritance
var Alto = /** @class */ (function () {
    function Alto() {
        this.model = "alto";
        this.brand = "Maruti";
    }
    Alto.prototype.hasFourwheel = function () {
        return true;
    };
    return Alto;
}());
var alto = new Alto();
console.log(alto.hasFourwheel());
