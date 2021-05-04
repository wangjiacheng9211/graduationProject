var express = require('express');
var router = express.Router();
var nodeXlsx = require('node-xlsx')
var uuid = require('uuid')


//查找数据
const findData = (params)=>{
  if(params.key==='') return [];
  const exc = nodeXlsx.parse(`public/data/${params.key}.xlsx`);
  let excel_conten = exc[0].data;
  excel_conten.splice(0,1)
  //转换为json格式
  let res = []
  excel_conten.forEach(element => {
    res.push({
      id: uuid.v4(),
      timeStamp:element[0],
      name:element[1],
      desc:element[2],
      primaryCategory:element[3],
      followers:element[4],
      secondaryCategories:element[5],
      apiProvider:element[6]||'',
      apiEndpoint:element[7]||'',
      apiPortalHomePage:element[8]||'',
      docsHomePageURL:element[9]||'',
      termsOfServiceURL:element[10]||'',
      supportedRequestFormats:element[11]||'',
      isThisAnUnofficialAPI:element[12]||'',
      istheAPIDesignDescriptionNonProprietary:element[13]||'',
      restrictedAccess:element[14]||'',
      isThisAHypermediaAPI:element[15]||'',
      sslSupport:element[16]||'',
      architecturalStyle:element[17]||'',
      twitterURL:element[18]||'',
      authenticationModel:element[19]||'',
    })
  });
  console.log(res.length)
  return res;
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  var params = req.query
  console.log('传入的参数为：',params)
  res.send(findData(params));
  
  // res.send('respond with a resource');
  
});

module.exports = router;
