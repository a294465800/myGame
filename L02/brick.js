var Brick = function (position) {
    //position是[0, 0]格式
    var p = position
    var image = imageFromPath('brick.png')
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        width: 24,
        height: 24,
        alive: true,
    }

    o.kill = function () {
        o.alive = false
    }

    o.collide = function (ball) {
        //留个疑问，为什么：要判断球在砖块里面或者砖块在球里面
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }

    return o
}