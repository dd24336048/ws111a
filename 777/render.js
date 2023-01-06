export function layout(date, content) {
    return `
    <html>
    <head>
      <title>${date}</title>
      <style>
        body {
          padding: 80px;
          font: 16px Helvetica, Arial;
          text-align: center;
          
        }
    
        h1 {
          font-size: 2em;
          text-align: center;
        }
    
        h2 {
          font-size: 1.2em;
          text-align: center;
        }
    
        #posts {
          margin: 0;
          padding: 0;
          text-align: center;
        }
    
        #posts li {
          margin: 40px 0;
          padding: 0;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
          list-style: none;
          text-align: center;
        }
    
        #posts li:last-child {
          border-bottom: none;
          text-align: center;
        }
    
        textarea {
          width: 500px;
          height: 300px;
          text-align: center;
        }
    
        /*input[type=text],
        textarea {
          border: 1px solid #eee;
          border-top-color: #fff;
          border-left-color: #fff;
          border-radius: 2px;
          padding: 15px;
          font-size: .8em;
          text-align: center;
        }*/
    
  
      </style>
    </head>
    <body>
      <section id="content">
        ${content}
      </section>
    </body>
    </html>
    `
  }
  
  export function list(posts) {
    let list = []
    for (let post of posts) {
      list.push(`
      <li>
        <h2>${ post.title }</h2>
        <p><a href="/post/${post.id}">閱讀留言</a></p>
      </li>
      `)
    }
    let content = `
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <nav class="navbar navbar-default" role="navigation">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                  <ul class="dropdown-menu"
                
              </ul>
              
            </div>
            
          </nav>
          <div class="jumbotron">
            <h1>
              澎湖好好玩
            </h1>
          </div>
        </div>
      </div>
      <img src="https://i0.wp.com/blog.settour.com.tw/wp-content/uploads/2021/03/BN_1080x1080.jpg?w=1080&amp;ssl=1" alt="" height="80%" width="80%">
      <div class="row clearfix">
        <div class="col-md-4 column">
          <img src="https://www.penghu-nsa.gov.tw/FileDownLoad/TravelInformation/NotSet/20160907103937579129421.jpg" alt="" height="90%" width="90%">
          <h2>
            景點
          </h2>
          <p>
            中央老街、天后宮、篤行十村、觀音亭、奎壁山摩西分海、南寮古厝彩色浮球秘境、隘門沙灘、山水沙灘、風櫃洞、蛇頭山觀海台、後寮天堂路、澎湖跨海大橋、二崁古厝、大菓葉玄武岩、外垵漁港、漁翁島燈塔
          </p>
        </div>
        <div class="col-md-4 column">
          <img src="https://bobowin.blog/wp-content/uploads/20210323082755_51.jpg" alt="" height="90%" width="90%">
          <h2>
            必吃美食
          </h2>
          <p>
            兩個番茄農場牛肉麵、美東芳牛肉麵、原味漁村小吃、小萍的店、海上牧場、澎湖福朋喜來登酒店、澎湖炸棗、易家仙人掌冰淇淋、澎湖龜、王冠嫩仙草、二崁二馬豆花、阿枝炸粿、郵局口蔥油餅、外垵刈包早餐店、北新橋牛雜湯、鐘記燒餅、二信飯糰
          </p>
        </div>
        <div class="col-md-4 column">
          <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/806b981d-Golden-Beach-Watersports-Package---Klook/%E3%80%90%E6%BE%8E%E6%B9%96%E7%87%92%E7%83%A4%E3%80%91%E6%BE%8E%E6%B9%96%E9%9A%98%E9%96%80%E6%B2%99%E7%81%98%E5%85%AB%E5%90%88%E4%B8%80%E6%B0%B4%E4%B8%8A%E6%B4%BB%E5%8B%95%E3%83%BB%E6%B5%B7%E7%81%98BBQ%E9%A4%90.jpg" alt="" height="130%" width="130%">
          <h2>
            水上活動
          </h2>
          <p>
            夜釣小管、海底漫步、SUP立式划槳、極限寬板滑水、拖曳傘飛行、透明獨木舟、浮潛、海底郵筒體驗、水上自行車、海洋牧場、海上花火船
          </p>
        </div>
      </div>
    </div>
    
    <h2>你有 <strong>${posts.length}</strong> 篇留言!</h2>
    <p><a href="/post/new">新增留言</a></p>
    <ul id="posts">
      ${list.join('\n')}
    </ul>
    `
    return layout('Posts', content)
  }
  
  export function newPost() {
    return layout('New Post', `
    <h1>新增留言</h1>
    <p>建立新留言.</p>
    <form action="/post" method="post">
      <p><input type="text" placeholder="標題" name="title"></p>
      <p><textarea placeholder="內容" name="body"></textarea></p>
      <p><input type="submit" value="新增"></p>
    </form>
    `)
  }
  
  export function show(post) {
    return layout(post.title, `
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    `)
  }