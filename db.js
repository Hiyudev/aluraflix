const admin = require("firebase-admin");
const serviceAccount = require('./key')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://aluraflix-backend.firebaseio.com',
});

const db = admin.firestore()

const getVideos = async (limit=10) => {
    var videos = [];
    const snapshot = await db.collection('videos').limit(limit).get();
    snapshot.forEach(doc => {
        const obj = {
            id: doc.id,
            ...doc.data()
        }
        videos.push(obj);
    });
    return videos;
}

const getVideo = async(id) => {
    const doc = await db.collection('videos').doc(id).get();
    return {exists: doc.exists, ...doc.data()};
}

const createVideo = async(titulo, url, categoriaId) => {
    const obj = {
        titulo,
        url,
        categoriaId
    }
    const newdoc = await db.collection('videos').add(obj);
    const doc = await getVideo(newdoc.id);
    return doc;
}

const deleteVideo = async(id) => {
    const res = await db.collection('videos').doc(id).delete();
    return res;
}

const hasVideo = async(id) => {
    const res = await db.collection('videos').doc(id).get()
    return res.exists;
}

const updateVideo = async(id, newdata) => {
    const res = await db.collection('videos').doc(id).update(newdata);
    return res;
}

const getVideosbyCategoria = async(id) => {
    var videos = [];
    const snapshot = await db.collection('videos').where('categoriaId', '==', id).get()
    snapshot.forEach(doc => {
        const obj = {
            id: doc.id,
            ...doc.data()
        }
        videos.push(obj);
    });
    return videos;
}

const searchVideos = async(query) => {
    var videos = [];
    const snapshot = await db.collection('videos').where('titulo', '>=', query).where('titulo', '<=', query+ '\uf8ff').get()
    snapshot.forEach(doc => {
        const obj = {
            id: doc.id,
            ...doc.data()
        }
        videos.push(obj);
    });
    return videos;
}

const getCategorias = async(limit=10) => {
    var categorias = [];
    const snapshot = await db.collection('categorias').limit(limit).get();
    snapshot.forEach(doc => {
        const obj = {
            id: doc.id,
            ...doc.data()
        }
        categorias.push(obj);
    });
    return categorias;
}

const getCategoria = async(id) => {
    const doc = await db.collection('categorias').doc(id).get();
    return {exists: doc.exists, ...doc.data()};
}

const createCategoria = async(titulo, cor) => {
    const obj = {
        titulo,
        url: cor,
    }
    const newdoc = await db.collection('categorias').add(obj);
    const doc = await getVideo(newdoc.id);
    return doc;
}

const deleteCategoria = async(id) => {
    const res = await db.collection('categorias').doc(id).delete();
    return res;
}

const hasCategoria = async(id) => {
    const res = await db.collection('categorias').doc(id).get()
    return res.exists;
}

const updateCategoria = async(id, newdata) => {
    const res = await db.collection('categorias').doc(id).update(newdata);
    return res;
}

module.exports = { 
    getVideos,
    getVideo, 
    createVideo,
    deleteVideo,
    updateVideo,
    hasVideo,
    searchVideos,
    getVideosbyCategoria,
    getCategorias,
    getCategoria,
    createCategoria,
    deleteCategoria,
    updateCategoria,
    hasCategoria,
}