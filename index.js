fs = require('fs');
gm = require('gm')
function fuckErr(err) { if (err) console.log('日志：' + err) }
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cut3(path) {
    gm(path).size(function (err, size) {
        if (!err) {
            if (size.width / size.height != 3 / 2)
                console.warn("警告：图片宽高比不为3:2")
            chunkLen = size.width / 3

            path2 = path.replace('.', '') + "c3"
            fs.mkdir(path2, fuckErr)
            gm(path).crop(chunkLen * 2, chunkLen * 2, 0, 0).write(path2 + "/3.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, 0).write(path2 + "/2.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, chunkLen).write(path2 + "/1.png", fuckErr);
            console.log('日志：' + path + " - OK")
        }
    })
}

function cut4(path) {
    gm(path).size(function (err, size) {
        if (!err) {
            if (size.width / size.height != 1 / 1)
                console.warn("警告：图片宽高比不为1:1")
            chunkLen = size.width / 3

            path2 = path.replace('.', '') + "c4"
            fs.mkdir(path2, fuckErr)
            gm(path).crop(chunkLen * 3, chunkLen * 2, 0, 0).write(path2 + "/4.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, chunkLen * 2).write(path2 + "/3.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, chunkLen * 2).write(path2 + "/2.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, chunkLen * 2).write(path2 + "/1.png", fuckErr);
            console.log('日志：' + path + " - OK")
        }
    })
}

function cut5(path) {
    gm(path).size(function (err, size) {
        if (!err) {
            if (size.width / size.height != 6 / 5)
                console.warn("警告：图片宽高比不为6:5")
            chunkLen = size.width / 3
            bigChunklen = size.width / 2

            path2 = path.replace('.', '') + "c5"
            fs.mkdir(path2, fuckErr)
            gm(path).crop(bigChunklen, bigChunklen, 0, 0).write(path2 + "/5.png", fuckErr);
            gm(path).crop(bigChunklen, bigChunklen, bigChunklen, 0).write(path2 + "/4.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, bigChunklen).write(path2 + "/3.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, bigChunklen).write(path2 + "/2.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, bigChunklen).write(path2 + "/1.png", fuckErr);
            console.log('日志：' + path + " - OK")
        }
    })
}


function cut6(path) {
    gm(path).size(function (err, size) {
        if (!err) {
            if (size.width / size.height != 1 / 1)
                console.warn("警告：图片宽高比不为1:1")
            chunkLen = size.height / 3

            path2 = path.replace('.', '') + "c6"
            fs.mkdir(path2, fuckErr)
            gm(path).crop(chunkLen * 2, chunkLen * 2, 0, 0).write(path2 + "/6.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, 0).write(path2 + "/5.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, chunkLen).write(path2 + "/4.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, chunkLen * 2).write(path2 + "/3.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, chunkLen * 2).write(path2 + "/2.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, chunkLen * 2).write(path2 + "/1.png", fuckErr);
            console.log('日志：' + path + " - OK")
        }
    })
}

function cut7(path) {
    gm(path).size(function (err, size) {
        if (!err) {
            if (size.width / size.height != 3 / 4)
                console.warn("警告：图片宽高比不为3:4")
            chunkLen = size.width / 3

            path2 = path.replace('.', '') + "c7"
            fs.mkdir(path2, fuckErr)
            gm(path).crop(chunkLen * 3, chunkLen * 2, 0, 0).write(path2 + "/7.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, chunkLen * 2).write(path2 + "/6.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, chunkLen * 2).write(path2 + "/5.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, chunkLen * 2).write(path2 + "/4.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, chunkLen * 3).write(path2 + "/3.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, chunkLen * 3).write(path2 + "/2.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, chunkLen * 3).write(path2 + "/1.png", fuckErr);
            console.log('日志：' + path + " - OK")
        }
    })
}

function cut8(path) {
    gm(path).size(function (err, size) {
        if (!err) {
            if (size.width / size.height != 2 / 2.5)
                console.warn("警告：图片宽高比不为2:2.5")
            chunkLen = size.width / 3
            bigChunkLen = size.width / 2

            path2 = path.replace('.', '') + "c8"
            fs.mkdir(path2, fuckErr)
            gm(path).crop(bigChunkLen, bigChunkLen, 0, 0).write(path2 + "/8.png", fuckErr);
            gm(path).crop(bigChunkLen, bigChunkLen, bigChunkLen, 0).write(path2 + "/7.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, bigChunkLen).write(path2 + "/6.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, bigChunkLen).write(path2 + "/5.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, bigChunkLen).write(path2 + "/4.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, bigChunkLen + chunkLen).write(path2 + "/3.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, bigChunkLen + chunkLen).write(path2 + "/2.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen * 2, bigChunkLen + chunkLen).write(path2 + "/1.png", fuckErr);
            console.log('日志：' + path + " - OK")
        }
    })
}

function cut9(path) {
    gm(path).size(function (err, size) {
        if (!err) {
            if (size.width / size.height != 3 / 4)
                console.warn("警告：图片宽高比不为3:4")
            chunkLen = size.width / 3
            bigChunkLen = chunkLen * 2

            path2 = path.replace('.', '') + "c9"
            fs.mkdir(path2, fuckErr)
            gm(path).crop(bigChunkLen, bigChunkLen, 0, 0).write(path2 + "/9.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, bigChunkLen, 0).write(path2 + "/8.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, bigChunkLen, chunkLen).write(path2 + "/7.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, bigChunkLen).write(path2 + "/6.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, bigChunkLen).write(path2 + "/5.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, bigChunkLen, bigChunkLen).write(path2 + "/4.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, 0, bigChunkLen + chunkLen).write(path2 + "/3.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, chunkLen, bigChunkLen + chunkLen).write(path2 + "/2.png", fuckErr);
            gm(path).crop(chunkLen, chunkLen, bigChunkLen, bigChunkLen + chunkLen).write(path2 + "/1.png", fuckErr);
            console.log('日志：' + path + " - OK")
        }
    })
}

// cut3("c3.png")
// cut4("c4.png")
// cut5("c5.png")
// cut6("c6.png")
// cut7("c7.png")
// cut8("c8.png")
// cut9("c9.png")

// 你瞅啥qwq?
rl.question(`请把要裁剪的图片拖拽过来，然后按回车： `, (img) => {
    rl.question(`请选择切成几片(3,4,5,6,7,8,9)，然后按回车：`, (pear) => {
        console.log('日志：' + `正在调度任务： ${img} - ${pear}`);
        switch (pear) {
            case '1':
                cut1(img)
                break;
            case '2':
                cut2(img)
                break;
            case '3':
                cut3(img)
                break;
            case '4':
                cut4(img)
                break;
            case '5':
                cut5(img)
                break;
            case '6':
                cut6(img)
                break;
            case '7':
                cut7(img)
                break;
            case '8':
                cut8(img)
                break;
            case '9':
                cut9(img)
                break;
            default:
                console.warn('警告：输入的选项有误，当作 6 来处理')
                cut6(img)
                break;
        }
        rl.close();
        console.log('日志：' + `完毕！请查看图片所在的目录`);
    });
});
