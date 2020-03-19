var http = require('http');
var fs = require('fs');
var url = require('url');
var uc = require('upper-case');
let formidables = require('formidable');

http.createServer((req, res) => {

    if (req.url == '/fileupload') {
        let form = new formidables.IncomingForm();
        form.parse(req, (err, fields, files) => {
            let oldpath = files.filetoupload.path;
            let newpath = '/Users/mubojia/Desktop/demo/node-demo/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, err => {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end(newpath);
            })
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }




    // 返回HTML文件
    // var q = url.parse(req.url, true);
    // var fileName = '.' + q.pathname;
    // fs.readFile(fileName, (err, data) => {
    //     if (err) {
    //         res.writeHead(404, {'Content-Type': 'text/html'})
    //         return res.end('404 Not Found');
    //     }
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(uc.upperCase('Hello World'));
    //     return res.end()
    // })



    // 读取文件
    // fs.readFile('demo_1.html', (err, data) => {
    //     res.writeHead(200, {'Content-Type': 'text/html'})
    //     res.write(data);
    //     res.end();
    // })

    // 创建一个新文件并写入内容
    // fs.appendFile('demo_02.html', 'Hello content!', (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('Saved!')
    // })

    // fs.writeFile('demo_04.html', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

    // 更新文档 将内容追加到文件内的尾部
    // fs.appendFile('demo_05.html', 'This is my text2.', (err) => {
    //     if(err) throw err;
    //     console.log('Updated!');
    //     res.end();
    // });

    // 更新文档 更换全部文件内容
    // fs.writeFile('demo_05.html', 'This is new text.', (err) => {
    //     if (err) throw err;
    //     console.log('Replaced!');
    // });

    // 删除文件
    // fs.unlink('demo_05.html', err => {
    //     if(err) throw err;
    //     console.log('File deleted!');
    // });

    // 重命名文件
    // fs.rename('demo_1.html', 'demo_01.html', err => {
    //     if (err) throw err;
    //     console.log('File Renamed!')
    // });

}).listen(8080);