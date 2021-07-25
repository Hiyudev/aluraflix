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

const createVideo = async(titulo, url) => {
    const obj = {
        titulo,
        url,
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

module.exports = { 
    getVideos,
    getVideo, 
    createVideo,
    deleteVideo,
    updateVideo,
    hasVideo
}