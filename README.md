# Nella
一個好用的中文音樂機器人! , 含有20個斜線功能!

## 安裝
```
npm install
```
## 託管

可使用[Vera Hosting](https://www.vera-hosting.xyz)託管讓您的Bot可以24小時上線!

## 邀請
```
https://discord.com/api/oauth2/authorize?client_id=1067731490143744061&permissions=1239101589600&scope=bot%20applications.commands
```
## 聲明

> 此功能由[Tomato6966](https://github.com/Tomato6966)製作! , 並非本人開發! , 本人只提供中文翻譯


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="是否想要中文的Music Bot? , 那麼Nella很適合你! , Nella採用了斜線指令 , 讓您在Discord不無聊!">
    <meta property="og:title" content="Nella | 音樂機器人">
    <meta property="og:description" content="是否想要中文的Music Bot? , 那麼Nella很適合你! , Nella採用了斜線指令 , 讓您在Discord不無聊!">
    <meta property="og:image" content="assets/favicon.jpg">
    <meta property="og:url" content="https://nella.cf">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" href="../assets/favicon.jpg">
	<link rel="canonical" href="https://nella.cf">
    <title>Nella</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid container">
            <a class="navbar-brand" href="/">
                <img src="../assets/bot.jpg" alt="" width="50" height="50" class="rounded-circle"> &nbsp;
                <span>Nella</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="../index.html">首頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#/">指令</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./team.html">開發者</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="linksdrop" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            連結
                        </a>
                        <ul class="dropdown-menu bgn" aria-labelledby="linksdrop">
                            <li><a class="dropdown-item text-muted font-weight-bold" href="https://discord.com/api/oauth2/authorize?client_id=1067731490143744061&permissions=1239101589600&scope=bot%20applications.commands" target="_blank">邀請
                                    Bot</a>
                            </li><a class="dropdown-item text-muted font-weight-bold" href="https://discord.gg/3S5BgMTx47" target="_blank">支援群
                                    </a></li>
                           
                        </ul>
                    </li>
                </ul>
                <div class="d-flex ml-auto" id="headerlogin">
                    <li class="nav-item" style="list-style: none;">
                        <a class="nav-link btn btn-outline-secondary login" href="https://lesa-hosting.cf">免費Discord Bot託管</a>
                    </li>
                </div>
            </div>
        </div>
    </nav>
    </div>

    <div class="jumbotron text-center bg-transparent">
        <h1 class="commandstitle">功能</h1>
        <p class="lead commandssub">查看所有功能</p>
        <hr>
        <div class="border"></div>
        <br>
        <br>
        <br>
        <div id="myCmd">
            <br>
            <button type="button" class="collapsible">help<span> - 查看指令</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類:</h4>
                <p style="color: aqua;">info</p>
				<h4 style="color: #cccccc;">示範 :</h4>
                <p>n!help</p>
            </div>
            <br>
            <br>
            <button type="button" class="collapsible">ping<span> - 查看延遲</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(19, 182, 160);">info</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/ping</p>
            </div>
            <br>
            <br>
			<button type="button" class="collapsible">bassboost<span> - 更改音樂的低音增強等級</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/bassboost [0~20]</p>
		    </div>
            <br>
            <br>
            <button type="button" class="collapsible">clearqueue<span> 清除歌曲列表</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/clearqueue</p>
			</div>
            <br>
            <br>
			<button type="button" class="collapsible">filter<span> - 特效工具</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/filter</p>
			</div>
            <br>
            <br>
			<button type="button" class="collapsible">forward<span> - 加秒數</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/forward <幾秒></p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">join<span> - 讓機器人加入語音頻道</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/join</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">leave<span> - 讓機器人離開語音頻道</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/leave</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">loop<span> - 重複播放</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/loop</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">move<span> - 移動歌曲列表排隊號碼</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/move <原本> <移動></p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">nowplaying<span> - 查看目前播放歌曲狀態</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/nowplaying</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">pause<span> - 暫停</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/pause</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">play<span> - 播放音樂</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/play <歌曲名稱></p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">playskip<span> - 播放歌曲列表其中一首歌直接跳過目前的歌</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/playskip <歌曲列表名稱></p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">playtop<span> - 添加一首歌放在歌曲列表第一排隊號碼</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/playtop <歌曲列表名稱></p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">queue<span> - 查看歌曲列表</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/queue</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">queueloop<span> - 重複播放歌曲列表</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/queueloop</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">skip<span> - 跳過</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/skip</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">speed<span> - 調整速度</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/speed <速度></p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">stop<span> - 停止播放</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/stop</p>
				</div>
            <br>
            <br>
			<button type="button" class="collapsible">volume<span> - 調整音量</span></button>
            <div class="content">
                <h4 style="color: rgb(169, 247, 247);">分類 :</h4>
                <p style="color: rgb(242, 44, 232);">Music</p>
                <h4 style="color: #cccccc;">示範 :</h4>
                <p>/volume <音量></p>
            </div>
        </div>
    </div>
    </div>

    <footer class="mastfoot mb-auto">
            <div class="container-fluid mb-auto">
                <div class="row d-flex justify-content-center">
                    <div class="">
                        <p style="font-size: 19px; padding: 0px; margin: 0px;"><a href="https://github.com/Hadi-Koubeissi"
                                style="text-decoration: none; color: white;"></a></br>Copyright ©
               2022 Tira-tw. All rights reserved.</br>
                    </div>
                </div>
            </div>
        </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../js/main.js"></script>
</body>

</html>
