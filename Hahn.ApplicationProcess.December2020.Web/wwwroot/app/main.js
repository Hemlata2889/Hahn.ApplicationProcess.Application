"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var Applicant_1 = require("./Applicant");
var Main = /** @class */ (function () {
    function Main() {
        this.applicant = new Applicant_1.Applicant("Katariya");
        ;
    }
    Main.prototype.sayHello = function () {
        this.applicant.sayHello();
        document.getElementById("applicant").innerHTML = "<h1>" + m.applicantName + "</h1>";
    };
    Object.defineProperty(Main.prototype, "applicantName", {
        get: function () {
            return this.applicant.applicantName;
        },
        enumerable: false,
        configurable: true
    });
    return Main;
}());
exports.Main = Main;
var m = new Main();
m.sayHello();
console.log(m.applicantName);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiJzcmMvYXBwLyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBd0M7QUFDeEM7SUFFSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDTCxDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxzQkFBSSwrQkFBYTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxvQkFBSTtBQWNqQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYW50IH0gZnJvbSBcIi4vQXBwbGljYW50XCI7XHJcbmV4cG9ydCBjbGFzcyBNYWluIHtcclxuICAgIHByaXZhdGUgYXBwbGljYW50OiBBcHBsaWNhbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFwcGxpY2FudCA9IG5ldyBBcHBsaWNhbnQoXCJLYXRhcml5YVwiKTtcclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICBzYXlIZWxsbygpIHtcclxuICAgICAgICB0aGlzLmFwcGxpY2FudC5zYXlIZWxsbygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwbGljYW50XCIpLmlubmVySFRNTCA9IFwiPGgxPlwiICsgbS5hcHBsaWNhbnROYW1lICsgXCI8L2gxPlwiO1xyXG4gICAgfVxyXG4gICAgZ2V0IGFwcGxpY2FudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhbnQuYXBwbGljYW50TmFtZTtcclxuICAgIH1cclxufVxyXG52YXIgbSA9IG5ldyBNYWluKCk7XHJcbm0uc2F5SGVsbG8oKTtcclxuY29uc29sZS5sb2cobS5hcHBsaWNhbnROYW1lKTsiXX0=