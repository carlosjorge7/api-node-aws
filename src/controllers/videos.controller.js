const { getAllVideos } = require('../services/videos.service')

const getList = (req, res) => {
    res.status(200).json({data: getAllVideos()});
}

const getDetail = (req, res) => {
    res.status(200).json({data: 'Detalle'});
}

const updateItem = (req, res) => {
    res.status(200).json({data: 'Actualiza'});
}

const deleteItem = (req, res) => {
    res.status(200).json({data: 'Borrar'});
}

const createItem = (req, res) => {
    res.status(200).json({data: 'crear'});
}

module.exports = { getDetail, getList, updateItem, deleteItem, createItem};