var fs = require('fs');
var fileName = './plans.json';


var file = require(fileName);

//排序
bubbleSort(file)
//查詢欄位
// for (var i = 0; i < file.length; i++) {
//     console.log(file[i]);
// }



//排序資料
// function sort() {
//     let length = file.length;
//     let indexMin;
//     for (let i = 0; i < length - 1; i++) {
//         indexMin = i;
//         for (let j = i; j = length; j++) {
//             if (file[indexMin].period > file[j].period) {
//                 // 找未排序中最小值
//                 indexMin = j;
//             }
//         }
//         if (i !== indexMin) {
//             swap(i, indexMin);
//         }
//     }
// }

//氣泡排序
function bubbleSort(file) {
    let length = file.length;
    console.log(file.length)
    for (let i; i < length; i++) {
        // 比到後來最後一位已經排序好
        for (let j = 0; j < length - 1; j++) {
            console.log("check(file[j].period : " + check(file[j].period).toString());
            if (check(file[j].period) > check(file[j + 1].period)) {
                swap(j, j + 1);
            }
        }
    }
};

const swap = function(index1, index2) {
    let tmp = file[index1];
    file[index1] = file[index2];
    file[index2] = tmp;
};


//確認年分 XX or XXX
function check(str) {
    var res = str.substring(0, 3);

    //有中文字改為截取2字元
    if (searchChinese(res) == 1) {
        res = str.substring(0, 2)
        return res;
    }
    else {
        res = str.substring(0, 3);
        return res;
    }

}

//判斷有中文
function searchChinese(Str) {
    for (var i = 0; i < Str.length; i++) {
        if (Str.charCodeAt(i) >= 255) {
            return 1;
        }
    }
}

//修改json值
// fs.readFile(fileName, file, function(err) {
//     if (err) return console.log(err);

//     //刪除欄位
//     for (var i = 0; i < file.length; i++) {
//         delete file[i].updated_at;
//     }

//     //新增欄位
//     for (var i = 0; i < file.length; i++) {
//         file[i].updated_at = "2017-03-03T19:26:0" + i + ".123Z";
//     }

//     //查詢欄位
//     for (var i = 0; i < file.length; i++) {
//         console.log(file[i].updated_at);
//     }

// });





// console.log(state);

// var fs = require('fs');
// fs.writeFile("test.txt", JSON.stringify(data), function(err) {
//     if (err) {
//         return console.log(err);
//     }
// });
