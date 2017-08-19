var Borad = function () {
    var image = imageFromPath('borad.png')
    var o = {
        image: image,
        x: 200,
        y: 250,
        speed: 5,
        width: 200,
        height: 50,
    }
    o.moveLeft = function () {
        o.x -= o.speed
        if (o.x < 0) {
            o.x = 0
        }
    }
    o.moveRight = function (canvas) {
        o.x += o.speed
        if (o.x > canvas.width - o.width) {
            o.x = canvas.width - o.width
        }
    }
    o.collide = function (guaImage) {

        //相撞判断
        if (guaImage.y + guaImage.height > o.y) {
            if ((guaImage.x > o.x) && guaImage.x < o.x + o.width) {
                return 'success'
            }//失败判断
            else if (guaImage.y + guaImage.height >= o.y + o.height) {
                return 'lost'
            }
            return 'gaming'
        }

        return 'gaming'
    }
    return o
}
