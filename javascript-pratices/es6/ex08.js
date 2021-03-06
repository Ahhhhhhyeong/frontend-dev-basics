/**
 * class Rect
 * 
 */

class Rect{
    constructor(w, h) {
        this.w = w;
        this.h = h
    }
    draw() {
        console.log(`Rect(w=${this.w}, h=${this.h})를 그렸습니다.`);
    }
}

//test
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);

rect1.draw();
rect2.draw();

/**
 * cf. 생성자 함수(prototype) 기반
 * 
 */

const Circle = function(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
};

Circle.prototype.draw = function() {
    console.log(`Circle(w=${this.x}, h=${this.y}, r=${this.r})를 그렸습니다.`);
}

//test02
const circle01 = new Circle(10, 20, 5);
const circle02 = new Circle(100, 200, 50);

circle01.draw();
circle02.draw();


/**
 * extends(상속) & override(오버라이드)
 * 
 */
class Shape{
    constructor(bgColor, lnColor){
        this.bgColor = bgColor;
        this.lnColor = lnColor;
    }

    draw(){
        console.log('그릴 수 없습니다.');
    }

    area(){
        console.log('계산할 수 없습니다.');
    }
}

class Triangle extends Shape{
    constructor(w,h, bgColor, lnColor){
        super(bgColor, lnColor);
        this.w = w;
        this.h = h;
    }

    draw(){
        console.log(`Triganle(w=${this.w},h=${this.h},bgColros=${this.bgColor},lnColor=${this.lnColor})`)
    }
}

//test03
const t1 = new Triangle(10, 5, 'red', 'black');
t1.draw();
t1.area();