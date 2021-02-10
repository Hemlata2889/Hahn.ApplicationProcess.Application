"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicant = void 0;
var Applicant = /** @class */ (function () {
    function Applicant(name) {
        this.name = name;
    }
    Applicant.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    Object.defineProperty(Applicant.prototype, "applicantName", {
        get: function () {
            return "Hello " + this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Applicant;
}());
exports.Applicant = Applicant;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYW50LmpzIiwic291cmNlUm9vdCI6InNyYy9hcHAvIiwic291cmNlcyI6WyJhcHBsaWNhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUM7SUFDRyxtQkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFFaEMsQ0FBQztJQUNELDRCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxzQkFBSSxvQ0FBYTthQUFqQjtZQUNJLE9BQU8sV0FBUyxJQUFJLENBQUMsSUFBTSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBVkEsSUFVQTtBQUNPLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiIGNsYXNzIEFwcGxpY2FudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZykge1xyXG5cclxuICAgIH1cclxuICAgIHNheUhlbGxvKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBIZWxsbyAke3RoaXMubmFtZX1gKTtcclxuICAgIH1cclxuICAgIGdldCBhcHBsaWNhbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBIZWxsbyAke3RoaXMubmFtZX1gO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7QXBwbGljYW50fSJdfQ==