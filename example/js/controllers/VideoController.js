(function VideoController($angular) {

    /**
     * @module ngVideo
     * @author Adam Timberlake
     * @link https://github.com/Wildhoney/ngVideo
     * @controller VideoController
     * @param $scope {Object}
     */
    $angular.module(APP_NAME).controller('VideoController',

    function videoController($scope, $timeout, video, ngVideoOptions) {

        /**
         * @property playlistOpen
         * @type {Boolean}
         * @default false
         */
        $scope.playlistOpen = false;

        /**
         * @property videos
         * @type {Object}
         */
        $scope.videos = {
            first: 'http://www.previewstube.com/trailers/skyfall.mp4',
            second: 'http://www.w3schools.com/html/movie.mp4'
        };

        /**
         * @method videoName
         * @param videoModel {Object}
         * @return {String}
         */
        $scope.videoName = function videoName(videoModel) {

            switch (videoModel.src) {
                case ($scope.videos.first): return "Big Buck Bunny";
                case ($scope.videos.second): return "The Bear";
                default: return "Unknown Video";
            }

        };

        // Add some video sources for the player!
        video.addSource('mp4', $scope.videos.first);
        video.addSource('mp4', $scope.videos.second);

    });

})(window.angular);