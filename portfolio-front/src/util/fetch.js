/**
 * 네트웍을 이용하여 server애서 JSON 데이터 가져오기
 */
export const getFetchData = async(path) => { //[path]에서 []삭제
   const baseUrl = `http://localhost:9000`;
   const url = `${baseUrl}${path}`;
   const response = await fetch(url);
   return await response.json();
}