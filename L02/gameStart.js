var loadLevel = function (n) {
    var bricks = []
    n = n - 1
    var level = levels[n]
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Brick(p)
        bricks.push(b)
    }
    return bricks
}

var __main = function () {

    var score = document.getElementById('score')
    var currentLevel = document.getElementById('level')
    currentLevel.innerHTML = localStorage.currentLevel
    var game = GuaGame(60)
    var borad = Borad()
    var ball = Ball()

    var reset = document.getElementById('reset')
    reset.addEventListener('click', function(){
        localStorage.currentLevel = 1
        window.location.reload()
    })

    var bricks = loadLevel(localStorage.currentLevel)

    game.registerAction('a', function () {
        borad.moveLeft()
    })

    game.registerAction('d', function () {
        borad.moveRight(game.canvas)
    })

    game.registerAction('f', function () {
        ball.fire()
    })

    game.update = function () {
        ball.move()

        if (ball.fired) {
            var boradStatus = borad.collide(ball)
            //判断相撞
            if (boradStatus === 'success') {
                ball.rebound()
            } else if (boradStatus === 'lost') {
                ball.fired = false
                if (confirm('你输了！要重新来吗？')) {
                    window.location.reload()
                }
            } else if (boradStatus === 'gaming') {
            }

            //判断 ball 和 bricks 相撞
            for (var i = 0; i < bricks.length; i++) {
                var brickStatus = bricks[i].collide(ball)
                var brick = bricks[i]
                if (brickStatus) {
                    score.innerHTML = Number(score.innerHTML) + 100
                    brick.kill()
                    ball.rebound()
                    if (Number(score.innerHTML) === bricks.length * 100) {
                        setTimeout(function () {
                            ball.fired = false
                            if (confirm('你赢啦，要去下一关吗？')) {
                                if (levels.length == localStorage.currentLevel) {
                                    alert('没有下一关啦！')
                                } else {
                                    ++localStorage.currentLevel
                                    window.location.reload()
                                }
                            }
                        }, 100)
                    }
                } else { }
            }
        }
    }

    game.draw = function () {
        game.drawImage(borad)
        game.drawImage(ball)
        for (var i = 0; i < bricks.length; i++) {
            var brick = bricks[i]
            if (brick.alive) {
                game.drawImage(brick)
            }
        }

    }
}

__main()
