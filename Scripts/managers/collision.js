var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (player, other) {
            //check to see if object is colliding
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if player collides with enemy1
                    if (other.name === "enemy1") {
                        createjs.Sound.play("dung_sound");
                        core.lives -= 1;
                    }
                    // if player collides with diamond
                    if (other.name === "diamond") {
                        createjs.Sound.play("gold_sound");
                        core.score += 100;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map