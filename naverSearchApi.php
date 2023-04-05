<?php
  $client_id = "CMZE91qYmtlsB9jCWqIr";
  $client_secret = "C7FiM7nLwP";
  $encText = urlencode("유성구청근처맛집");
  $url = "https://openapi.naver.com/v1/search/local.xml?query=".$encText; // json 결과
//  $url = "https://openapi.naver.com/v1/search/blog.xml?query=".$encText; // xml 결과
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  $headers = array();
  $headers[] = "X-Naver-Client-Id: ".$client_id;
  $headers[] = "X-Naver-Client-Secret: ".$client_secret;
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
  $response = curl_exec ($ch);
  $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  echo "status_code:".$status_code."
";
  curl_close ($ch);
  if($status_code == 200) {
    echo $response;
  } else {
    echo "Error 내용:".$response;
  }
?>

<!-- <?php 
class Place
{
        private $key = "CMZE91qYmtlsB9jCWqIr"; // 사용자가 발급받은 오픈 API 키 
        private $searchUrl = "https://openapi.naver.com/v1/search/local.xml"; // 오픈 API 호출 URL
        private $target = "place";

        /**
         * API 결과를 받아오기 위하여 오픈 API 서버에 Request를 하고 결과를 XML Object로 반환하는 메서드
         * @return object
         */
        private function query($query)
        {
                $url = sprintf("%s?query=%s&target=%s&key=%s", $this->searchUrl, $query, $this->target, $this->key);
                $data =file_get_contents($url);
                $xml = simplexml_load_string($data);
                
                return $xml;
        }

        /**
         * API의 결과를 Json으로 encode하려 반환하는 메서드
         * XML을 직접 parsing하지 않고 json으로 변환하여 반환한다. 
         */
        public function getPlaceSearch($query)
        {       $xml = $this->query($query);
                $result = json_encode($xml);

                return $result; 
        }
}       
?> -->