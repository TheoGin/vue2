export async function getNews() {
  /*let baseURL = "";
  if (process.env.NODE_ENV === "development") {
    baseURL = "http://www.mydev.com";
  } else {
    baseURL = "http://www.mypro.com";
  }
  console.log('baseURL', baseURL);

  return await fetch(baseURL + "/api/news");
  */
  // 可以直接用文件名区分开发、生产环境，然后用其定义的环境变量
  console.log('process.env.VUE_APP_TITLE', process.env.VUE_APP_TITLE); // process.env.NODE_ENV MY APP
  console.log('process.env.NODE_ENV', process.env.NODE_ENV); // process.env.NODE_ENV development
  console.log('process.env.VUE_APP_SERVICE_URL', process.env.VUE_APP_SERVICE_URL); // process.env.VUE_APP_SERVICE_URL http://www.mydev.com
  return await fetch(process.env.VUE_APP_SERVICE_URL + "/api/news");
}