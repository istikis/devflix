const express = require('express');
const { VideosService } = require('../services/videos');

function videosApi(app) {
    const router = express.Router();
    const videosService = new VideosService();

    app.use('/api/videos', router);

    router.get('/', async(req, res, next) => {
        const { tags } = req.query;

        try {
            const videos = await videosService.getVideos({ tags });
            res.status(200).json({
                data: videos,
                message: 'videos listed',
            });
        } catch (err) {
            next(err);
        }
    });

    router.get('/:videoId', async(req, res, next) => {
        const { videoId } = req.params;

        try {
            const video = await videosService.getVideo({ videoId });
            res.status(200).json({
                data: videoId,
                mesaage: 'Video Retrieved'
            });

        } catch (err) {
            next(err);
        }
    });

    router.post('/', async(req, res, next) => {
        // Recogemos del POST el "video" así que hacemos un destructuring
        const { body: video } = await req;

        try {
            const createVideoId = await videosService.createVideo({ video });
            res.status(201).json({
                data: createVideoId,
                message: 'Video Created'
            });

        } catch (err) {
            next(err); // Se lo pasamos al siguiente Middleware
        }
    });

    router.put('/:videoId', async(req, res, next) => {
        const { videoId } = req.params;
        const { body: video } = req;

        try {
            const updateVideoId = await videosService.updateVideo({
                videoId,
                video
            });

            res.status(200).json({
                data: updateVideoId,
                message: 'Video Updated'
            });

        } catch (err) {
            next(err);
        }
    });

    router.delete('/:videoId', async(req, res, next) => {
        const { videoId } = req.params;

        try {
            const deleteVideoId = await videosService.deleteVideo({
                videoId
            });

            res.status(200).json({
                data: deleteVideoId,
                message: 'Video Deleted'
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = videosApi;