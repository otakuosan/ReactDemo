import PATHS from 'root/constants/Paths.js';

const PathUtil = {
    getSliderImage: function (imgName) {
        try {
            return require('root/' + PATHS.UPLOAD.SLIDER + imgName);
        }
        catch(e) {
            return null;
        }
    }
}

export default PathUtil;