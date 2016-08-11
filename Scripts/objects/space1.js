var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Space1 object used in the game
     *
     * @export
     * @class Space1
     * @extends {objects.GameObject}
     */
    var Space1 = (function (_super) {
        __extends(Space1, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Space1.
         *
         * @constructor
         * @param {string} imageString
         */
        function Space1(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Space1.prototype._reset = function () {
            this.x = 0;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Space1.prototype._checkBounds = function () {
            if (this.x <= -1108) {
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Space1.prototype.start = function () {
            this._reset();
            this._dx = 3; // 5px per frame down
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Space1.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
            if (this.x < -200) {
                objects.Player.isActivate = true;
            }
        };
        return Space1;
    }(createjs.Bitmap));
    objects.Space1 = Space1;
})(objects || (objects = {}));
//# sourceMappingURL=space1.js.map