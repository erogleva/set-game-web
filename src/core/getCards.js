const path = require('path');
const {readdir} = require('fs-extra');


const getCards = async (pathname, sourcepath) => {
    const cards = [];

    const pattern = /([BSC])_([FSE])([0-3]+)/;

    const dirs = await readdir(pathname);
    await Promise.all(dirs.map(dir => {
        return readdir(path.join(pathname, dir))
            .then(files => {
                files.forEach(file => {
                    const cardData = pattern.exec(file);
                    const relative = path.relative(sourcepath, path.join(pathname, dir, file));
                    cards.push({
                        color: dir.toLowerCase(),
                        shape: getShape(cardData[1]),
                        number: cardData[3],
                        shading: getShading(cardData[2]),
                        source: relative,
                        id: `${file}_${dir}`
                    });
                });
            });
    }));

    return new Promise(resolve => resolve(cards));
};

const getShape = (shape) => {
    switch (shape) {
        case 'S':
            return 'squirrel';
        case 'C':
            return 'crane';
        default:
            return 'bird';
    }
};

const getShading = (shading) => {
    switch (shading) {
        case 'F':
            return 'full';
        case 'E':
            return 'empty';
        default:
            return 'striped';
    }
};

module.exports = getCards;
