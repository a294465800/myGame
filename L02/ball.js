var Ball = function () {
    var image = imageFromPath('google.png')
    var o = {
        image: image,
        x: 280,
        y: 220,
        speedX: 5,
        speedY: 5,
        width: 30,
        height: 30,
        fired: false,
    }

    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x + o.width > 600) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y + o.height > 300) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }

    o.rebound = function () {
        o.speedY *= -1
    }
    return o
}
