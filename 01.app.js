const express = require('express');
const app = express();

app.listen(3000, function() {
console.log("http://127.0.0.1:3000")
});

app.get("/",function(req, res, next){
    res.send("<h1>Hello, World.222 </h1>");
}); // root밑의 요청이 들어오면 함수를 실행, res에 send해줌 (h1태그)

app.get("/hello",function(req, res, next){
    var name = req.query.name;
    res.send("<h1>Hello, "+name+"</h1>");
}); // root/hello로 요청 들어오면 실행

// ?key=value : queryString > query
// /path/path : path Parameters > params

//시맨틱 코드
app.get("/front/:id", function(req, res, next){ //:id -> id를 param으로 받을 수 있음
    var id = Number(req.params.id);
 //   res.send(`<h1>ID: ${id}</h1>`);

    var books = [
        {id: 1, name:'별주부전', desc:'용왕이 토끼를 ...'},
        {id: 2, name:'홍길동전', desc:'아버지를 아버지라 ...'},
        {id: 3, name:'구운몽전', desc:'꿈을 꿨구나...'},
        {id: 4, name:'심청전', desc:'아버지...'}
    ];
    switch(id){
        case 1:
        case 2:
        case 3:
        case 4:
            res.send(`<p>
                <h1>${books[id-1].name}</h1>
                <div>${books[id-1].desc}</div>
            </p>`);
            break;
        default:
            res.send('<p>도서 찾을수없음</p>')
            break;

    }
});
