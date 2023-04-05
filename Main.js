var mapOptions = {
    center: new naver.maps.LatLng(36.362226199413065, 127.35606790993106),
    zoom: 17,
    mapTypeControl: true,
    minZoom: 17,
    maxZoom: 17,
    mapTypes: new naver.maps.MapTypeRegistry({
        'normal': naver.maps.NaverStyleMapTypeOptions.getVectorMap()
    })
};

var map = new naver.maps.Map('map', mapOptions);
new naver.maps.Marker({
    position: new naver.maps.LatLng(36.362226199413065, 127.35606790993106),
    map,
});
var labelLayer = new naver.maps.LabelLayer();

const labelbtn = document.getElementById("label");

labelbtn.onclick = function(e) {
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
    callAjax($('#where').val());
});

function callAjax(query) {
    $.ajax({
            url:'map_proxy.php',
            dataType:'json',
            type:'get',
            data:{'query':query},
            success: function(result){
                    console.log(result);
            }
    });
};