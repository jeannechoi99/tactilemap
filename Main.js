var mapOptions = {
    center: new naver.maps.LatLng(36.362226199413065, 127.35606790993106),
    zoom: 17,
    mapTypeControl: false,
    minZoom: 17,
    maxZoom: 17,
    mapTypes: new naver.maps.MapTypeRegistry({
        'normal': naver.maps.NaverStyleMapTypeOptions.getVectorMap()
    })
};

//var map = new naver.maps.Map('map-container', mapOptions);


// new naver.maps.Marker({
//     position: new naver.maps.LatLng(36.362226199413065, 127.35606790993106),
//     map,
// });
var labelLayer = new naver.maps.LabelLayer();

const labelbtn = document.getElementById("label");

labelbtn.onclick = function(e) {
    console.log("버튼버튼")
    e.preventDefault();

    if (labelLayer.getMap()) {
        labelLayer.setMap(null);
        labelbtn.innerText = "레이블 켜기";
        $(this).removeClass("control-on");
    
    } else {
        labelLayer.setMap(map);
        labelbtn.innerText = "레이블 끄기";
        $(this).addClass("control-on");
    }

};

$('#search_where').click( function() {
    console.log($('#start').val());
    //$('start-end-result').text("출발지: ");
    $('#start-end-result').text("출발지: " + $('#start').val() + "\n 도착지: " + $('#destination').val());
    callAjax($('#start').val());
    //console.log($('start-end-result').text());
});

function callAjax(query) {
    $.ajax({
            url:'naverSearchApi.php',
            dataType:'json',
            type:'GET',
            data:{'query':query},
            success: function(result){
                console.log(result);
            },
            error: function(){
                console.log("실패입니당당이");
            }
    });
};

function loadMapImage(input) {
    var file = input.files[0];

    var newMap = document.createElement("img");
    newMap.setAttribute("class", 'img');
    newMap.setAttribute("id", 'created-map');
    newMap.src = URL.createObjectURL(file);

    var container = document.getElementById('show-map');
    container.appendChild(newMap);
}

//****네이버맵 스크린샷 하는 것 불법 */
// $(function(){
//     $("#make-map").click(function(e){
//         console.log("눌렸당!");
//         html2canvas(document.getElementById("body-container")).then(function(canvas) {
//                 saveAs(canvas.toDataURL("image/jpeg"), '_Media.jpg');
//             })
//         })
//     // html2canvas(document.getElementById("map-container")).then(function(canvas){
//     //     var el = document.createElement("a")
//     //     el.href = canvas.toDataURL("image/jpeg")
//     //     el.download = '이미지.jpeg'
//     //     el.click()
//     // })
//     })

// function saveAs(uri, filename) {
//     var link = document.createElement('a');
//     if (typeof link.download === 'string') {
//         link.href = uri;
//         link.download = filename;
//         link.click();
//     }
// }