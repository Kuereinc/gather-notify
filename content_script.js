// 入力ダイアログを表示 ＋ 入力内容を user に代入
user = localStorage.getItem('KuereUser');

if (!user) {
  user = window.prompt("ユーザー名を入力してください", "");
}

localStorage.setItem('user', user);

url = "https://hooks.slack.com/services/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"
payload = { "text": user + "さんがgatherに入りました。" }


xhr = new XMLHttpRequest();


xhr.open("POST", url, false);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
xhr.send('payload=' + JSON.stringify(payload))


const checkExists = () => {
  url = "https://hooks.slack.com/services/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"
  payload = { "text": user + "さんはgatherにいます" }
  xhr = new XMLHttpRequest();


  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
  xhr.send('payload=' + JSON.stringify(payload))
}
setInterval(checkExists, 1000 * 10 * 60);
