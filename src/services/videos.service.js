const { MOCK_VIDEO } = require('../models/videos');

// La logica de la DB la aislamos en servicios
const getAllVideos = () => {
    return MOCK_VIDEO;
}

module.exports = { getAllVideos }