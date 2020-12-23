const express = require('express');

function videosApi(app) {
    const router = express.Router();

    app.use('/api/videos', router);

    router.get('/', (req, res, next) => {
        const { tags } = req.query;

        res.status(200).json({
            data: tags,
            message: 'Videos Listed'
        });
    });

    router.get('/:videoId', (req, res, next) => {
        const { videoId } = req.params;

        res.status(200).json({
            data: videoId,
            message: 'Video Retrieved'
        });
    });

    router.post('/', (req, res, next) => {
        res.status(201).json({
            data: {},
            message: 'Video Created'
        });
    });

    router.put('/:videoId', (req, res, next) => {
        const { videoId } = req.params;

        res.status(200).json({
            data: videoId,
            message: 'Video Updated'
        });

    });

    router.delete('/:videoId', (req, res, next) => {
        const { videoId } = req.params;

        res.status(200).json({
            data: videoId,
            message: 'Video Deleted'
        });

    });
}

module.exports = videosApi;