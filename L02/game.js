
var GuaGame = function (fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')

    g.canvas = canvas
    g.context = context

    //draw
    g.drawImage = function (guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y, guaImage.width, guaImage.height)
    }

    //events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })

    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })

    //register the events
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    //timer
    setInterval(function () {
        //events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                //if the key has been punch
                g.actions[key]()
            }
        }

        //update
        g.update()

        //clear
        g.context.clearRect(0, 0, canvas.width, canvas.height)

        //draw
        g.draw()
    }, 1000 / fps)
    return g
}