new Vue({
    el:'#restaurant',
    data : {
        datas:null,
    },
    // 資料載入完成後執行
    mounted() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET","https://datacenter.taichung.gov.tw/swagger/OpenData/72b2e32b-74e4-4000-b920-7457c54565be");
        xhr.send();

        xhr.onload =() => {
            let json = JSON.parse(xhr.responseText);
            this.datas = json;
        }
    },
})