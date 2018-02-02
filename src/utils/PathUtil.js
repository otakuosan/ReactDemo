import Paths from 'root/constants/Paths.js';

const PathUtil = {
    getSliderImage: function (imgName) {
        try {
            return require('root/' + Paths.Upload.SLIDER + imgName);
        }
        catch(e) {
            return null;
        }
    }
}

export default PathUtil;