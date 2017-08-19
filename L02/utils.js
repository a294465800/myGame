var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}



//相撞函数
var rectIntersects = function (brick, ball) {

    //相撞判断
    if (ball.y > brick.y && ball.y < brick.y + brick.height) {
        if ((ball.x > brick.x) && ball.x < brick.x + brick.width) {
            return true
        }
    }
    return false
}